import React, { useState } from 'react';
import arrowDropdown from '../assets/images/arrow.svg'

const Dropdown = ({ title, dropdownText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsArrowRotated(!isOpen);
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
      <div className={`dropdown__text-container ${isOpen ? 'show' : 'hide'}`}>
        <p>{dropdownText}</p>
      </div>
    </div>
  );
};
  
export default Dropdown;