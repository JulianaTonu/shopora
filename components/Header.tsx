"use client";

import React from 'react';
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import SearchBar from './SearchBar';

const Header = () => {

    return (
        <header className='bg-white py-5 border-b border-black'>
            <Container className=' flex justify-between'>
                <Logo />
                <HeaderMenu />
                <div>
                    <SearchBar/>
                </div>
            </Container>
        </header>
    )
};

export default Header;