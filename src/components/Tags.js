import React from 'react';

const Tags = ({tags}) => {
    return (
        <div className='tags__container'>
            {tags.map((tag, id) => (
                <p key={id} className='tag'>{tag}</p>
            ))}
        </div>
    );
};

export default Tags;
