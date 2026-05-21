import React from 'react'
import RoomCard from '../RoomCard/RoomCard';

export default async function Featured() {

    const res = await fetch(`http://localhost:5000/rooms/featured`)
    const roomdata = await res.json();
    // console.log(data)

    return (
        <div className='lg:container md:container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-10'>
            {
                roomdata.map((room,ind)=>{
                   return <RoomCard key={ind} room={room}></RoomCard>
                })
            }
        </div>
    )
}
