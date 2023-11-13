import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="logo Kasa" className='logo'/>
            <Navigation />
        </div>
    );
};

export default Header;