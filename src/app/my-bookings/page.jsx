import MyBookingCard from '@/components/MyBookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const userId = session?.user?.id;
    console.log(userId);

    console.log(session,"ss");
    const res = await fetch(`http://localhost:5000/bookings/${userId}`)
    const bookings = await res.json();

    return (
        <div className='p-20'>
                <div>
                    <div>
                        <h2 className='text-6xl'>My Bookings</h2>
                        <p className='text-[#6C696D]'>Manage and view your upcoming travel plans</p>
                    </div>
                    <div className='mt-10 grid gap-4'>
                        {
                            bookings.map(booking => 
                                <MyBookingCard key={booking._id} booking={booking}></MyBookingCard>
                            )
                        }
                    </div>
                </div>
        </div>
    );
};

export default MyBookingsPage;