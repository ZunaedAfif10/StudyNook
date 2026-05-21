import BookingTable from '@/components/BookingTable/BookingTable';
import { auth } from '@/lib/auth';

import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react'

export default async function page() {
    const session = await auth.api.getSession({
        headers: await headers()
    })


    const { token } = await auth.api.getToken({
        headers: await headers(),
    });


    const res = await fetch(`http://localhost:5000/bookings/${session?.user.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const bookingData = await res.json();

    // console.log(bookingData)
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black flex flex-col gap-10 justify-center items-center px-4 py-10">
            {
                bookingData.length === 0 ?
                    <h1 className="text-center flex justify-center items-center text-4xl font-bold text-white">No Bookings Found</h1> :
                    <BookingTable bookingData={bookingData}></BookingTable>
            }
        </div>
    )
}
