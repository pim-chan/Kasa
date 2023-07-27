import React, { useState } from 'react';

const Dropdown = ({ title, dropdownText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsArrowRotated(!isArrowRotated);
  };
  
    return (
      <div className="dropdown">
        <div className="dropdown__title-container">
            <h3>{title}</h3>
            <img src="./arrow.svg" alt="flèche dropdown" className= {`dropdown__arrow-trigger ${isArrowRotated ? 'dropdown__arrow-trigger--rotated' : ''}`} onClick={toggleDropdown}/>
        </div>
        {/* <div className= {`dropdown__text-container ${isOpen ? 'dropdown__text-container--open' : ''}`} onClick={toggleDropdown}></div> */}
        {isOpen && (
            <div className="dropdown__text-container dropdown__text-container--open">
                <p>{dropdownText}</p>
            </div>
        )}
      </div>
    );
  };
  
export default Dropdown;