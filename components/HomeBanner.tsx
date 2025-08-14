import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { banner1 } from '@/images';

const HomeBanner = () => {
    return (
        <div className='py-16 md:py-0 bg-shop-light-pink rounded-lg px-10 lg:px-24 flex
        items-center justify-between'>

            <div>
                <h1 className='text-2xl font-semibold text-dark_green mb-5'>
                    Grab Upto 50% off on <br />
                    Selected headphone
                </h1>
                <Link href={"/shop"} className='bg-dark_green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-dark_green hoverEffect'> Buy Now
                </Link>
            </div>

            <div>
                <Image 
                src={banner1} 
                alt='banner1'
                className='hidden md:inline-flex w-96 '
                />
            </div>
        </div>
    );
};

export default HomeBanner;