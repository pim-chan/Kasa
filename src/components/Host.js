import React from 'react';

const Host = ({hostPhoto, hostName}) => {
    return (
        <div className='host'>
            <div className="host__name">
                <p>{hostName}</p>
            </div>
            <div className="host__photo">
                <img src={hostPhoto} alt={`Photo host de ${hostName}`} />
            </div> 
        </div>
    );
};

export default Host;