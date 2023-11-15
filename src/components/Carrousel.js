import React, { useState } from 'react';
import ArrowRightImage from '../assets/images/arrow_right.png';
import ArrowLeftImage from '../assets/images/arrow_left.png';

const Carrousel = ({pictures}) => {
  const [currentSlide, setCurrentSlide] = useState(0) // Indice de l'image affichée = 0

    // Afficher le slide suivant
    const nextSlide = () => {
      setCurrentSlide(currentSlide + 1)
      if(currentSlide === pictures.length - 1) // Vérification indice currentSlide = dernière page. 
      setCurrentSlide(0) // Si oui, affiche première page.
    }

    // Afficher le slide précédent
    const prevSlide = () => {
      setCurrentSlide(currentSlide - 1)
      if(currentSlide === 0) // Vérification indice currentSlide = première page. 
      setCurrentSlide(pictures.length - 1) // Si oui, affiche dernière page.
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
      {/* Affiche image = indice actuel (currentSlide) dans le tableau pictures. */}
      <img
        src={pictures[currentSlide]}
        alt={`Image ${pictures[currentSlide]}`}
        className="carrousel__img"
      />
       {/* Affiche num diapositive actuelle (+ 1 car indice commence à 0) + nombre total images dans le carrousel (pictures) */}
      <div className="slide-count">
        <p>{currentSlide + 1}/{pictures.length}</p>
      </div>
    </div>
  );
};

export default Carrousel;
