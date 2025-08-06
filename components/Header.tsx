"use client";

import React from 'react';
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import SearchBar from './SearchBar';
import FavoriteButton from './FavoriteButton';
import CartIcon from './CartIcon';
import SignIn from './SignIn';
import MobileMenu from './MobileMenu';

const Header = () => {

    return (
        <header className='bg-white py-5 border-b border-black'>
            <Container className=' flex justify-between'>
               <div className='w-auto md:w-1/3 flex items-center gap-3 justify-start md:gap-0'>
                 <MobileMenu/>
                 <Logo />
               </div>
                <HeaderMenu />
                <div className='flex gap-5 w-auto md:1/3 justify-end items-center'>
                    <SearchBar/>
                    <FavoriteButton/>
                    <CartIcon/>
                    <SignIn/>
                </div>
            </Container>
        </header>
    )
};

export default Header;