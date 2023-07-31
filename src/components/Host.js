import React from 'react';
import DataLocations from '../assets/locations.json'

const Host = (hostPhoto) => {
    const host = DataLocations[0].host;
    const hostPhotoStyle = {background : `url(${hostPhoto}) center/cover`};
    return (
        <div>
            <div className="hostName">
                <p>{host.name}</p>
            </div>
            <div className="hostPhoto" style={hostPhotoStyle}>
            </div> 
        </div>
    );
};

export default Host;