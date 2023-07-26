import React from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Card';

const Home = () => {
    return (
        <div>
          <Banner title="Chez vous, partout et ailleurs" backgroundImg='./img-falaise.png'/> 
          <Cards/>
        </div>
    );
};

export default Home;