import React from 'react';

const TimeIndicator = ({ timeHeld, timeDifference, isPressed, gameStarted }) => {  

  return (
    <div>
      <h2>Your Time: {(!isPressed) && timeHeld}</h2>
      <h2>Difference: {(!isPressed && gameStarted) && timeDifference + ' seconds'}</h2>
    </div>
  );
}

export default TimeIndicator;