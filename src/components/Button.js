import React from 'react';

const Button = ({ handleMouseDown, handleMouseUp, isGameOver }) => {

  return (
    <div>
      <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} disabled={isGameOver}></button>
      <span>Hold the button down for the target length of time</span>
    </div>
  );
}

export default Button;