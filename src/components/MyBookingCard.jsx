import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BookingCancelAlert from './BookingCancelAlert';

const MyBookingCard = ({booking}) => {
    const handleDelete = () =>{

    }
    return (
        <div key={booking._id} className='p-6 gap-10 grid grid-cols-3 border '>
            <div>
                <Image src={booking.imageUrl} alt={booking.destinationName} width={400} height={225} />
            </div>
            <div className='space-y-3 text-[#6C696D]'>
                <p className='bg-green-100 w-max py-1 px-3 text-green-500 rounded-full'>confirmed</p>
                <h2 className='text-5xl font-semibold text-black'>{booking.destinationName}</h2>
                <p>Departure: {booking.departureDate}</p>
                <p>Location: {booking.country}</p>
                <p className='text-[#15A1BF] text-4xl'>${booking.price}</p>
            </div>
            <div className='flex justify-end gap-3 items-end'>
                <BookingCancelAlert booking={booking}/>
                <Link href={`/destinations/${booking._id}`}><Button className={'bg-[#15A1BF] text-white rounded-none'}>View</Button></Link>
            </div>

        </div>
    );
};

export default MyBookingCard;