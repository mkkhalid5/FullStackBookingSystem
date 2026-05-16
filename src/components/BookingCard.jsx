'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const BookingCard = ({ data }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const { _id, price, departureDate, destinationName, imageUrl, country } = data;

    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDate,
        }

        const {data: tokenData} = await authClient.token();
        console.log('tokendata',tokenData);

        const res = await fetch("http://localhost:5000/bookings", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData),
        })
        const data = await res.json();
        if(data?.acknowledged){
            toast.success('Booking added Successfully!')
        }
        
    }



    return (
        <div className='col-span-1 shadow shadow-taupe-400 p-5'>
            <p className='text-[#6C696D]'>Starting form</p>
            <h3 className='text-4xl text-[#15A1BF]'>$ {price}</h3>
            <p className='text-[#6C696D]'>per person</p>

            <p className='mt-10 px-4 py-3 bg-[#F8FAFC]'>{departureDate}</p>
            <hr className='text-slate-300 mt-5 mb-5' />
            <Button className='bg-[#15A1BF] rounded-none text-lg w-full flex items-center gap-2' onClick={handleBooking}>Book Now <FaArrowRight /></Button>
            <ul className=' text-[#6C696D] mt-5'>
                <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Free cancellation up to 7 days</li>
                <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Travel insurance included</li>
                <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />24/7 customer support</li>
            </ul>
        </div>
    );
};

export default BookingCard;