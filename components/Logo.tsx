import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const Logo = ({className} : {className?:string}) => {
    return (
        <Link href={"/"}>
            <h2 className={cn("text-2xl text-dark_green font-black tracking-wider uppercase hover:text-light_green",className)}>
                Shopor<span className='text-light_green hover:text-dark_green hoverEffect'>a</span>
            </h2>
        </Link>
    );
};

export default Logo;