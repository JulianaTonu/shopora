"use client";

import { HeartIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const FavoriteButton = () => {
    return (
        <Link href={"/fav"}className=' relative' >
            <HeartIcon className='w-5 h-5 hover:text-light_green hoverEffect' />
            <span className='absolute -top-2 -right-1 flex justify-center items-center h-3.5 rounded-full text-white w-3.5 p-2 font-semibold bg-dark_green'>0</span>       
             </Link>
    );
};

export default FavoriteButton;