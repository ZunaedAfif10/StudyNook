
import BookNow from '@/components/BookNow/BookNow';
import { DeleteAlert } from '@/components/DeleteAlert/DeleteAlert';
import EditModal from '@/components/EditModal/EditModal';
import { auth } from '@/lib/auth';
import { getRooms, getRoomsById } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react'


export default async function page({ params }) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const { id } = await params;
    // console.log(id);

    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    // console.log(room)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        },
        cache: "no-store"
    });
    const room = await res.json();

    const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${session?.user.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        },
        cache: "no-store"
    });
    const allBookings = await resp.json();

    const { roomName } = room
    
    const count = allBookings.filter(
        (booking) => booking.roomName === roomName
    ).length;
    console.log(count)

    


    // console.log(session?.user.id);
    // console.log(room.user_Id)


    const isOwner = room.user_Id == session?.user.id

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-4xl rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">

                <img
                    src={room.image}
                    alt="room"
                    className="w-full h-[200] object-cover"
                />

                <div className="p-6 md:p-8 space-y-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight">
                            {room.roomName}
                        </h1>

                        <span className="text-sky-400 font-semibold text-2xl md:text-xl whitespace-nowrap">
                            ${room.hourlyRate}/hr
                        </span>
                    </div>

                    <p className=" md:text-base text-slate-300 leading-relaxed">
                        {room.description}
                    </p>
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
                            <p className="text-lg text-white font-semibold">{count || 0}</p>
                        </div>
                    </div>
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
                    <div className="pt-2">
                        <BookNow room={room}></BookNow>
                    </div>

                    {isOwner ? (
                        <>
                            <EditModal room={room}></EditModal>
                            <DeleteAlert room={room}></DeleteAlert>

                        </>
                    ) : null}

                </div>
            </div>
        </div>
    )
}
