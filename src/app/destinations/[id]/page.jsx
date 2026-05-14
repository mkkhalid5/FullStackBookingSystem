import BookingCard from '@/components/BookingCard';
import DeleteDialog from '@/components/DeleteDialog';
import EditModal from '@/components/EditModal';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft,  FaCheck, FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const data = await res.json();
    const { imageUrl, destinationName, country, duration, description } = data;
    return (
        <div className='max-w-7xl mx-auto py-10'>
            <div className='flex justify-between p-5'>
                <Link href={'/destinations'}><p className='flex justify-center items-center gap-1'><FaArrowLeft /> back to destinations</p> </Link>
                <div className='flex gap-3'>
                    <EditModal data={data}></EditModal>
                    <DeleteDialog data={data} />
                </div>
            </div>
            <Image
                alt={destinationName}
                src={imageUrl}
                width={600}
                height={400}
                className='w-full h-100 object-cover'
            />
            <hr className='text-slate-300 mt-10 mb-10' />
            <div className='grid grid-cols-3 justify-between'>
                <div className='p-5 col-span-2'>
                    <div className='flex items-center gap-2'><LuMapPin /> <span>{country}</span></div>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className='text-xl font-bold'>{destinationName}</h2>
                            <div className='flex gap-1 items-center'><FaRegCalendar /> {duration}</div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <h2 className='mt-10 text-2xl font-bold'>Overview: </h2>
                        <p className='text-[#6C696D]'>{description}</p>
                    </div>
                    <div className='mt-10'>
                        <h2 className='mt-10 text-2xl font-bold'>Highlights: </h2>
                        <p className='text-[#6C696D]'>Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.</p>

                        <ul className='grid grid-cols-2 justify-around text-[#6C696D] mt-5'>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Luxury beachfront accommodation</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Visit Uluwatu Temple at sunset</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Traditional Balinese spa treatment</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Private beach dinner experience</li>
                            <li className='flex gap-1 items-center'><FaCheck className='text-green-500' />Sunrise trek to Mount Batur</li>
                        </ul>
                    </div>
                </div>

                <BookingCard data={data} />
            </div>
        </div>
    );
};

export default DestinationDetailsPage;