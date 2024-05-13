import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log('Clicked item:', item);
    setIsOpen(false);
  };

  return (
    <div className="central-box"> {/* Central box */}
      <button className="dropdown-button" onClick={toggleDropdown}>
        Select
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
      <span className="dropdown-arrow"></span> {/* Arrow */}
    </div>
  );
};

export default Dropdown;
