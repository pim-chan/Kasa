import React, { useState } from 'react';
import DataLocations from '../assets/locations.json';
import ArrowRightImage from '../assets/images/arrow_right.png';
import ArrowLeftImage from '../assets/images/arrow_left.png';

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = DataLocations[0].pictures;

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide) => {
      const nextSlide = currentSlide + 1;
      return nextSlide === images.length ? 0 : nextSlide;
    });
  };
  
  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide) => {
      const prevSlideIndex = currentSlide - 1;
      return prevSlideIndex < 0 ? images.length - 1 : prevSlideIndex;
    });
  };
  

  return (
    <div className="carrousel">
      <img src={ArrowLeftImage} alt="flèche gauche" className="arrow arrow-left" onClick={handlePrevSlide} />
      <img src={ArrowRightImage} alt="flèche droite" className="arrow arrow-right" onClick={handleNextSlide} />
      <img src={images[currentSlide]} alt={`Image ${DataLocations.title}`} className="carrousel__img" />
      <div className="position">
        <p>{currentSlide + 1}/{images.length}</p>
      </div>
    </div>
  );
};

export default Carrousel;


