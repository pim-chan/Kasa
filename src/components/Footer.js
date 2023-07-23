import React from 'react';
import LogoFooter from './LogoFooter';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <LogoFooter />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;