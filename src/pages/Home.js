import React from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Card';
import ImgBannerHome from '../assets/images/img-falaise.png'

const Home = () => {
    return (
        <div>
          <Banner 
          title="Chez vous, partout et ailleurs" 
          backgroundImg={ImgBannerHome}/> 
          <Cards/>
        </div>
    );
};

export default Home;