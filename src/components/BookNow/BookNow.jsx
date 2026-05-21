"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";

export default function BookNow({room}) {
    const {roomName,image} = room
    const {data:session} = authClient.useSession()
    // console.log(session?.user.id);
    const user_Id = session?.user.id
    const hourlyRate = room.hourlyRate;

    const today = new Date().toISOString().split("T")[0];

    const timeSlots = [
        "08:00", "09:00", "10:00", "11:00", "12:00",
        "13:00", "14:00", "15:00", "16:00", "17:00",
        "18:00", "19:00", "20:00",
    ];

    const [date, setDate] = useState(today);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [note, setNote] = useState("");


    const endTimes = useMemo(() => {
        if (!startTime) return [];
        const startIndex = timeSlots.indexOf(startTime);
        return timeSlots.slice(startIndex + 1);
    }, [startTime]);

    const totalCost = useMemo(() => {
        if (!startTime || !endTime) return 0;

        const startHour = parseInt(startTime.split(":")[0]);
        const endHour = parseInt(endTime.split(":")[0]);

        return (endHour - startHour) * hourlyRate;
    }, [startTime, endTime]);

    // console.log(room);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const bookingData = {
            roomName,
            image,
            date,
            startTime,
            endTime,
            note,
            totalCost,
            user_Id
        };

        // console.log("Booking Data:", bookingData);
        const res = await fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json()
        // console.log(data.message)
        toast(data.message);
        redirect('/allrooms')

    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-6 text-white shadow-lg rounded-xl space-y-5"
        >
            <h2 className="text-2xl font-bold text-center">
                Book Your Slot
            </h2>
            <div>
                <label className="block mb-1 text-sm font-medium">
                    Date
                </label>

                <input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                    required
                />
            </div>
            <div>
                <label className="block mb-1 text-sm font-medium">
                    Start Time
                </label>
                <select
                    value={startTime}
                    onChange={(e) => {
                        setStartTime(e.target.value);
                        setEndTime("");
                    }}
                    className="w-full p-3 border rounded-lg"
                    required
                >
                    <option value="" style={{ color: "white", background: "blue" }}>Select Start Time</option>
                    {timeSlots.map((t) => (
                        <option key={t} value={t} style={{ color: "white", background: "black" }}>
                            {t}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block mb-1 text-sm font-medium">
                    End Time
                </label>

                <select
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                    disabled={!startTime}
                    required
                >
                    <option value="" style={{ color: "white", background: "blue" }}>Select End Time</option>
                    {endTimes.map((t) => (
                        <option key={t} value={t} style={{ color: "white", background: "black" }}>
                            {t}
                        </option>
                    ))}
                </select>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg text-center">
                <p className="text-sm text-gray-500">Total Cost</p>
                <h3 className="text-2xl font-bold text-black">
                    ${totalCost}
                </h3>
            </div>

            <div>
                <label className="block mb-1 text-sm font-medium">
                    Special Note (optional)
                </label>

                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                    rows={3}
                />
            </div>

            <Button
                type="submit"
                className="w-full bg-white text-white py-3 rounded-lg"
            >
                Confirm Booking
            </Button>
        </form>
    );
}