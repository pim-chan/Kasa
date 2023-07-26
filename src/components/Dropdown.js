import React, { useState } from 'react';

  const Dropdown = ({title, dropdownText}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdown">
        <div className="dropdown__title-container">
            <h3>{title}</h3>
            <img src="./arrow.svg" alt="" onClick={toggleDropdown}/>
        </div>
        {isOpen && (
            <div className="dropdown__text-container">
                <p>{dropdownText}</p>
            </div>
        )}
      </div>
    );
  };
  
export default Dropdown;