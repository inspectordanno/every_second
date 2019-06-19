import React from 'react';
import '../styles/Button.css';

const Button = ({ handleMouseDown, handleMouseUp, isGameOver }) => {
  return (
    <div className="Button">
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp} 
        disabled={isGameOver}
      >
      </button>
      <div>Hold the button down for the target length of time</div>
    </div>
  );
}

export default Button;