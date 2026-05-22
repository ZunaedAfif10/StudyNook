"use client";

import { useState } from "react";
import RoomCard from "../RoomCard/RoomCard";

export default function FilterClient({ rooms }) {
    const [search, setSearch] = useState("");
    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const amenitiesOptions = [
        "Whiteboard",
        "Projector",
        "Wi-Fi",
        "Power Outlets",
        "Quiet Zone",
        "Air Conditioning",
    ];

    const toggleAmenity = (item) => {
        setSelectedAmenities((prev) => {
            if (prev.includes(item)) {
                return prev.filter((a) => a !== item);
            } else {
                return [...prev, item];
            }
        });
    };

    const filteredRooms = rooms.filter((room) => {
        const matchName = room.roomName
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchAmenities =
            selectedAmenities.length === 0 ||
            selectedAmenities.every((a) =>
                room.amenities.includes(a)
            );

        return matchName && matchAmenities;
    });

    return (
        <>
            <div className="bg-slate-900 p-4 rounded-xl text-white space-y-4">

                <input
                    type="text"
                    placeholder="Search room..."
                    className="w-full p-2 text-2xl mb-4 rounded text-white"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="space-y-2">
                    <p className="font-semibold text-xl pb-2">Amenities</p>

                    {amenitiesOptions.map((item) => (
                        <label
                            key={item}
                            className="flex items-center  gap-2 text-xl"
                        >
                            <input
                                type="checkbox"
                                className=""
                                checked={selectedAmenities.includes(item)}
                                onChange={() => toggleAmenity(item)}
                            />
                            {item}
                        </label>
                    ))}
                </div>

            </div>

            {
                filteredRooms.length === 0 ?
                    <p className="text-center flex justify-center items-center text-4xl font-bold text-white">No Rooms Found</p> :
                    <div className="md:container lg:container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-3">
                        {
                            filteredRooms.map((room, ind) => {
                                return <RoomCard key={ind} room={room}></RoomCard>
                            })
                        }
                    </div>
            }
        </>
    );
}