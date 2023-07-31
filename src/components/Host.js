import React from 'react';
import DataLocations from '../assets/locations.json'

const Host = () => {
    const host = DataLocations[0].host;
    return (
        <div className='host'>
            <div className="host__name">
                <p>{host.name}</p>
            </div>
            <div className="host__photo">
                <img src={host.picture} alt={`Photo host ${host.name}`} />
            </div> 
        </div>
    );
};

export default Host;