import RoomCard from '@/components/RoomCard/RoomCard';
import React from 'react'

export default async function page() {
    const res = await fetch('http://localhost:5000/rooms');
    const roomData = await res.json();
    // console.log(data);
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4 py-10">
            <div className='container grid grid-cols-3 gap-7'>
            {
                roomData.map((room,ind) => {
                    return <RoomCard key={ind} room={room}></RoomCard>
                })
            }
            </div>
        </div>
    )
}
