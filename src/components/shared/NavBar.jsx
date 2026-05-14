'use client'
import Image from 'next/image';
import React from 'react';
import ActiveLink from '../ActiveLink';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import { redirect } from "next/navigation";


const NavBar = () => {
    const {
        data: session,
    } = authClient.useSession();

    const isUser = session?.user;

    const handleLogOut = async () =>{
        await authClient.signOut();
        redirect("/")
    }
    
    return (
        <nav className='grid grid-cols-3 justify-between bg-white p-5'>
            <ul className='flex gap-3 items-center'>
                <li><ActiveLink href={'/'}>Home</ActiveLink></li>
                <li><ActiveLink href={'/destinations'}>Destinations</ActiveLink></li>
                <li><ActiveLink href={'/my-bookings'}>My Bookings</ActiveLink></li>
                <li><ActiveLink href={'/add-destination'}>Add Destination</ActiveLink></li>
            </ul>

            <div className='flex justify-center items-center'>
                <Image
                    src={'/assets/Wanderlast.png'}
                    alt='logo'
                    height={150}
                    width={150}
                />
            </div>
            <ul className='flex gap-3 items-center justify-end'>
                {
                    isUser ?
                        <>
                            <li className='cursor-pointer'>
                                <ActiveLink href={'/profile'}>
                                    <Avatar>
                                        <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src={isUser?.image || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} />
                                        <Avatar.Fallback></Avatar.Fallback>
                                    </Avatar>
                                </ActiveLink>
                            </li>
                            <Button onClick={handleLogOut} variant='danger' className={'rounded-none'}>Logout</Button>
            </> :
            <>
                <li><ActiveLink href={'/auth/login'}>Login</ActiveLink></li>
                <li><ActiveLink href={'/auth/signup'}>Sign Up</ActiveLink></li>
            </>
                }

        </ul>
        </nav >
    )
};

export default NavBar;