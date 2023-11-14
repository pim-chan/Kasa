import React from 'react';

const Banner = ({title, backgroundImg}) => {
    const bannerStyle = {
        background: `url(${backgroundImg}) center/cover`,
    };
    return (
        <div className='banner' style={bannerStyle}>
            <div className="banner__overlay"></div>
            <h1 className='banner__title'>{title}</h1>
        </div>
    );
};

export default Banner;