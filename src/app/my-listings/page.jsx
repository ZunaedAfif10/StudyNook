import RoomCard from '@/components/RoomCard/RoomCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react'

export const metadata = {
  title: "StudyNook - My Listings",
};

export default async function page() {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/listing/${session?.user.id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const roomData = await res.json();

  // console.log(data)
  return (
    <div>
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4 py-10">
        {
          roomData.length === 0 ?
            <h1 className="text-center flex justify-center items-center text-4xl font-bold text-white">No Listing Found</h1> :
            <div className='md:container lg:container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>

              {
                roomData.map((room, ind) => {
                  return <RoomCard key={ind} room={room}></RoomCard>
                })
              }
            </div>
        }
      </div>
    </div>
  )
}
