import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCalendar, FaStar } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';

const DestinationCard = ({ destination }) => {
    const { _id, imageUrl, price, destinationName, country, duration } = destination;
    return (
        <div className='border relative'>
            <Image
                alt={destinationName}
                src={imageUrl}
                height={400}
                width={400}
                className='w-full h-70'
            />
            <div className='absolute flex gap-2 items-center text-center justify-center  text-black top-3 right-5  bg-white/40 px-2'>
                <span>4.5</span>
                <FaStar />
            </div>
            <div className='p-5'>
                <div className='flex items-center gap-2 text-[#6C696D]'><LuMapPin /> <span>{country}</span></div>
                <div className='flex justify-between'>
                    <div>
                        <div>
                            <h2 className='text-2xl font-bold'>{destinationName}</h2>
                        </div>
                        <div className='flex gap-1 items-center'><FaRegCalendar /> {duration}</div>
                    </div>
                    <div className='flex gap-1 items-center'><h3 className='text-xl font-bold'>${price}</h3><span className='text-[#6C696D]'>/person</span></div>
                </div>
            </div>
            <Link href={`/destinations/${_id}`}><Button variant='ghost' className={'mt-1 text-cyan-500 flex gap-1 items-center justify-center'}>Book Now <FiExternalLink /></Button></Link>
        </div>
    );
};

export default DestinationCard;