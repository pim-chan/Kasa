import React, { useState } from 'react';
import arrowDropdown from '../assets/images/arrow.svg'

const Dropdown = ({ title, dropdownText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsArrowRotated(!isArrowRotated);
  };
  
    return (
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
        <div className="dropdown__title-container">
            <h3>{title}</h3>
            <img src={arrowDropdown} alt="flèche dropdown" className= {`dropdown__arrow-trigger ${isArrowRotated ? 'dropdown__arrow-trigger--rotated' : ''}`} onClick={toggleDropdown}/>
        </div>
        {isOpen && (
            <div className={`dropdown__text-container ${isOpen ? 'show' : ''}`}>
                <p>{dropdownText}</p>
            </div>
        )}
      </div>
    );
  };
  
export default Dropdown;