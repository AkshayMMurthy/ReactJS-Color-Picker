import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('purple'); // Initial background color
  const colorOptions = ['red', 'lightgreen', 'blue', 'yellow', 'violet', 'aqua', 'orange', 'purple', 'pink','darkgreen','darkorange','lightblue','brown','orange','blue','yellow'];

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    
    <div className="App" style={{ backgroundColor: selectedColor }}>
      <h1>Color Picker</h1>
      
      <div className="color-box"></div>
      <div className="color-options">
        {colorOptions.map((color, index) => (
          <div
            key={index}
            className="color-option"
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          ></div>
        ))}
      </div>
      <button className="pick-button">Pick a Color</button>
    </div>
  );
};

export default App;
