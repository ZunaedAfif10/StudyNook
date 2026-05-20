import { getRoomsById } from '@/lib/data';
import React from 'react'

export default async function page({ params }) {
    const { id } = await params;
    console.log(id);
    const room = await getRoomsById(id);
    // console.log(room)

    const isOwner = true

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-4xl rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">

                {/* Image */}

                <img
                    src={room.image}
                    alt="room"
                    className="w-full h-[200] object-cover"
                />


                {/* Content */}
                <div className="p-6 md:p-8 space-y-6">

                    {/* Title + Price row */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight">
                            {room.roomName}
                        </h1>

                        <span className="text-sky-400 font-semibold text-2xl md:text-xl whitespace-nowrap">
                            ${room.hourlyRate}/hr
                        </span>
                    </div>

                    {/* Description */}
                    <p className=" md:text-base text-slate-300 leading-relaxed">
                        {room.description}
                    </p>

                    {/* Info cards */}
                    <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-3">
                            <p className="text-xl text-slate-400">Floor</p>
                            <p className="text-lg text-white font-semibold">{room.floor}</p>
                        </div>

                        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-3">
                            <p className="text-xl text-slate-400">Capacity</p>
                            <p className="text-lg text-white font-semibold">{room.capacity}</p>
                        </div>

                        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-3">
                            <p className="text-xl text-slate-400">Bookings</p>
                            <p className="text-lg text-white font-semibold">{room.bookingCount || 0}</p>
                        </div>
                    </div>

                    {/* Amenities */}
                    <div>
                        <p className="text-2xl text-slate-400 mb-2">Amenities</p>
                        <div className="flex flex-wrap gap-2">
                            {room.amenities?.map((amenit, ind) => (
                                <span
                                    key={ind}
                                    className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200"
                                >
                                    {amenit}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2">
                        <button className="w-full bg-sky-500 hover:bg-sky-600 transition py-3 rounded-xl font-medium text-white shadow-lg">
                            Book Now
                        </button>
                    </div>

                    {isOwner ? (
                        <>
                            <button className="border border-white/10 text-white bg-white/5 px-7 backdrop-blur-lg transition hover:bg-white/10 w-full sm:flex-1  py-3 rounded-lg font-medium">
                                Edit
                            </button>

                            <button className="w-full sm:flex-1 bg-red-500 hover:bg-red-600 py-3 rounded-lg font-medium">
                                Delete
                            </button>
                        </>
                    ) : null}

                </div>
            </div>
        </div>
    )
}
