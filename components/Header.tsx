"use client";

import React from 'react';
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import SearchBar from './SearchBar';
import FavoriteButton from './FavoriteButton';
import CartIcon from './CartIcon';

const Header = () => {

    return (
        <header className='bg-white py-5 border-b border-black'>
            <Container className=' flex justify-between'>
                <Logo />
                <HeaderMenu />
                <div className='flex gap-2 w-auto md:1/3 justify-end items-center'>
                    <SearchBar/>
                    <FavoriteButton/>
                    <CartIcon/>
                </div>
            </Container>
        </header>
    )
};

export default Header;