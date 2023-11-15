import React from 'react';
import StarActive from '../assets/images/star-active.svg';
import StarInactive from '../assets/images/star-inactive.svg';

const Rating = ({rating}) => {;
  const totalStars = 5;

  const renderStars = () => {
    const stars = []; // Créer tableau images étoiles

    // Iteration jusqu'à 5 (totalStars)
    for (let i = 1; i <= totalStars; i++) {
      // Si i est inférieur à la rating, affiché etoile rose
      if (i <= rating) {
        stars.push(
        <img 
          key={i} 
          src={StarActive} 
          alt="icône note étoile" 
          className='star'/>);
      } else {
        // Si i est supérieur à la rating, affiché etoile grise
        stars.push(
        <img 
          key={i} 
          src={StarInactive} 
          alt="icône note étoile" 
          className='star'
        />);
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
