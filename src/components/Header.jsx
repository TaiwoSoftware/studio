/* eslint-disable no-unused-vars */
import React from 'react';
import backgroundImage from './image-hero.jpg';
import Navigation from './Navigation';
import logo from './logo.svg'
function Header() {
    return <header style={{backgroundImage:`url(${backgroundImage})`}}>
        <div className='div'>
            <img src={logo} alt='logo' />
            <Navigation />
        </div>
        <div className='headerDiv'>
            <h3 className='headerThree'>Immersive experiences that deliver </h3>
        </div>
    </header>
}

export default Header;