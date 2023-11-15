import React, { useState } from 'react';
import arrowDropdown from '../assets/images/arrow.svg'

const Dropdown = ({ title, dropdownText }) => {
  const [isOpen, setIsOpen] = useState(false); // Etat dropdown 
  const [isArrowRotated, setIsArrowRotated] = useState(false); // Etat rotation de la flèche
  const [hasClicked, setHasClicked] = useState(false);  // Si l'utilisateur a cliqué sur le dropdown au moins une fois.

  // Inversement des états
  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Dropdown ouvert ou fermé
    setIsArrowRotated((prevIsOpen) => !prevIsOpen); // Change rotation flèche 
    setHasClicked(true); 
  };
  
  return (
    <div className="dropdown">
      <div className="dropdown__title-container">
        <h3>{title}</h3>
        <img src={arrowDropdown} 
          alt="flèche dropdown" 
          className={`dropdown__arrow ${isArrowRotated ? 'dropdown__arrow--rotated' : ''}`}
          onClick={toggleDropdown} />
      </div>
      {/* Permet que l'animation hide ne se joue pas à directement l'ouverture de la page */}
      <div className={`dropdown__text-container ${hasClicked ? (isOpen ? 'show' : 'hide') : ''}`}> 
        <div className={`dropdown__text`}>{dropdownText}</div>
      </div>
    </div>
  );
};
  
export default Dropdown;