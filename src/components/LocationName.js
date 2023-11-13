import React from 'react';
import DataLocations from '../assets/locations.json'

const LocationName = () => {
    const dataLocations = DataLocations[0];
    return (
        <div className='fl__text'>
            <h1 className='fl__title'>{dataLocations.title}</h1>
            <h2 className='fl__localisation'>{dataLocations.location}</h2>
        </div>
    );
};

export default LocationName;