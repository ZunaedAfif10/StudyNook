import React from 'react'

export default function RoomCard({ room }) {

    const { roomName, description, image, floor, capacity, hourlyRate, amenities, user_Id } = room;

    return (
        <div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900 overflow-hidden shadow-lg h-full flex flex-col">
                <img
                    src={image}
                    alt="Room"
                    className="h-52 w-full object-cover"
                />
                <div className="p-5 text-white flex flex-col flex-1">
                    <h2 className="text-xl font-semibold">
                        {roomName}
                    </h2>
                    <p className="mt-2 text-sm text-slate-300 line-clamp-3">
                        {description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                        <span>Floor {floor}</span>
                        <span>{capacity} People</span>
                    </div>
                    <p className="mt-3 text-lg font-bold text-sky-400">
                        ${hourlyRate}/hr
                    </p>
                    <div className="my-4 flex flex-wrap gap-2">
                        {
                            amenities.map((amenit, ind) => {
                                return <span key={ind} className="rounded-full bg-slate-800 px-3 py-1 text-xs">
                                    {amenit}
                                </span>
                            })
                        }
                    </div>
                    <button
                        className="mt-auto w-full rounded-lg bg-sky-500 py-2 font-medium transition hover:bg-sky-600"
                    >
                        View Details
                    </button>

                </div>
            </div>

        </div>
    )
}
