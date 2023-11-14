import React from 'react';
import StarActive from '../assets/images/star-active.svg';
import StarInactive from '../assets/images/star-inactive.svg';

const Rating = ({rating}) => {;
  const totalStars = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={StarActive} alt="icône note étoile" className='star'/>);
      } else {
        stars.push(<img key={i} src={StarInactive} alt="icône note étoile" className='star'/>);
      }
    }
    return stars;
  };

  return (
    <div className='rating'>
      <div className="stars">{renderStars()}</div>
    </div>
  );
};

export default Rating;
