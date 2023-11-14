import React, { useState } from 'react';
import ArrowRightImage from '../assets/images/arrow_right.png';
import ArrowLeftImage from '../assets/images/arrow_left.png';
// import DataLocations from '../assets/locations.json'
// import { useParams } from 'react-router-dom';

const Carrousel = ({pictures}) => {

  const [currentSlide, setCurrentSlide] = useState(0)
  // const idLocation = useParams('id').id;
    
  // const CurrentDataLocation = DataLocations.filter(item => item.id === idLocation);

  // const currentData = CurrentDataLocation[0]
  // const pictures = currentData.pictures;

    const nextSlide = () => {
      setCurrentSlide(currentSlide + 1)
      if(currentSlide === pictures.length - 1)
      setCurrentSlide(0)
    }

    const prevSlide = () => {
      setCurrentSlide(currentSlide - 1)
      if(currentSlide === 0)
      setCurrentSlide(pictures.length - 1)
    }
  
  return (
    <div className="carrousel">
      <img 
        src={ArrowLeftImage} 
        alt="flèche gauche" 
        className="arrow arrow-left" 
        onClick={prevSlide} 
      />
      <img 
        src={ArrowRightImage} 
        alt="flèche droite" 
        className="arrow arrow-right" 
        onClick={nextSlide}
      />
      <img
        src={pictures[currentSlide]}
        alt={`Image ${pictures[currentSlide]}`}
        className="carrousel__img"
      />
      <div className="slide-count">
        <p>{currentSlide + 1}/{pictures.length}</p>
      </div>
    </div>
  );
};

export default Carrousel;
