import React from 'react';
import DataLocations from '../assets/locations.json';

const Tags = () => {
    const dataLocationsTags = DataLocations[0].tags;

    return (
        <div className='tags__container'>
            {dataLocationsTags.map((tag, id) => (
                <p key={id} className='tag'>{tag}</p>
            ))}
        </div>
    );
};

export default Tags;
