import RoomCard from '@/components/RoomCard/RoomCard';
import React from 'react'
import { getRooms } from '@/lib/data';

export default async function page() {
    const roomData = await getRooms();
    // console.log(data);
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4 py-10">
            <div className='md:container lg:container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {
                roomData.map((room,ind) => {
                    return <RoomCard key={ind} room={room}></RoomCard>
                })
            }
            </div>
        </div>
    )
}
