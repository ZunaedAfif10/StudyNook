'use client'
import { authClient, useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";



export default function page() {

    useEffect(() => {
        document.title = "StudyNook - Add Your Rooms";
    }, []);

    const amenitiesOptions = [
        "Whiteboard",
        "Projector",
        "Wi-Fi",
        "Power Outlets",
        "Quiet Zone",
        "Air Conditioning",
    ];


    const { data: session } = useSession();

    // console.log(session);
    const user = session?.user

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const roomData = {
            ...Object.fromEntries(formData.entries()),
            user_Id: user?.id,
            amenities: formData.getAll("amenities"),
            createdAt: new Date()
        };

        console.log(roomData);
        const { data: tokenData } = await authClient.token()

        const res = await fetch('http://localhost:5000/rooms', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(roomData)
        })

        const data = await res.json();
        toast.success('Room added successfully');
        // console.log(data)

        redirect('/');
    };
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-8 shadow-2xl">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white">
                        Create Room
                    </h2>
                    <p className="mt-2 text-slate-400">
                        Add your room information
                    </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                        <label className="mb-2 block text-sm text-slate-200">
                            Room Name
                        </label>
                        <input
                            type="text"
                            name="roomName"
                            required
                            placeholder="Ocean View Room"
                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm text-slate-200">
                            Description
                        </label>
                        <textarea
                            name="description"
                            required
                            rows={5}
                            placeholder="Write room details..."
                            className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-slate-200">
                            Image URL
                        </label>
                        <input
                            type="url"
                            name="image"
                            placeholder="https://example.com/image.jpg"
                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm text-slate-200">
                                Floor
                            </label>
                            <input
                                type="text"
                                name="floor"
                                placeholder="3rd Floor"
                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-slate-200">
                                Capacity
                            </label>

                            <input
                                type="number"
                                name="capacity"
                                placeholder="4"
                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="mb-2 block text-sm text-slate-200">
                            Hourly Rate
                        </label>
                        <input
                            type="number"
                            name="hourlyRate"
                            placeholder="5"
                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                        />
                    </div>
                    <div>
                        <label className="mb-4 block text-sm text-slate-200">
                            Amenities
                        </label>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {amenitiesOptions.map((item) => (
                                <label
                                    key={item}
                                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 cursor-pointer hover:border-sky-500/40 transition"
                                >
                                    <input
                                        type="checkbox"
                                        name="amenities"
                                        value={item}
                                        className="h-4 w-4 accent-sky-500"
                                    />
                                    <span className="text-sm">{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button
                            type="submit"
                            className="w-full rounded-2xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-500"
                        >
                            Create Room
                        </button>
                        <button
                            type="reset"
                            className="w-full rounded-2xl border border-sky-500 px-6 py-3 font-semibold text-sky-400 transition hover:bg-sky-500/10"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
