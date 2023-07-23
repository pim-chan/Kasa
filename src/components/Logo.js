import React from 'react';
import imgLogo from '../assets/images/logo.png'

const Logo = () => {
    return (
        <div className='logo'>
            <img src={imgLogo} alt="logo Kasa" />
        </div>
    );
};

export default Logo;