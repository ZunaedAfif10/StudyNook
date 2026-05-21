import BookingTable from '@/components/BookingTable/BookingTable';
import { auth } from '@/lib/auth';

import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react'

export default async function page() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const res = await fetch(`http://localhost:5000/bookings/${session?.user.id}`);
    const bookingData = await res.json();

    // console.log(bookingData)
    return (
        <div>
            <BookingTable bookingData={bookingData}></BookingTable>
        </div>
    )
}
