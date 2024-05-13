import React from 'react';
import Dropdown from './Dropdown/Dropdown';

const App = () => {
  const dropdownItems = ['Yes', 'Probably not'];

  return (
    <div className="app">
      <h1>Should you use a Dropdown?</h1>
      <Dropdown items={dropdownItems} />
    </div>
  );
};

export default App;
