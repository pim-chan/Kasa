import React from 'react';
import LogoFooter from '../assets/images/logo-footer.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__content">
                <img src={LogoFooter} alt="logo Kasa" className='footer__logo'/>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;