import React from 'react';

const TimeIndicator = ({ timeHeld, timeDifference, isPressed, gameStarted }) => {  

  return (
    <div>
      <h2>Your Time: {(!isPressed && gameStarted) && timeHeld}</h2>
      <h2>Difference: {(!isPressed && gameStarted) && timeDifference}</h2>
    </div>
  );
}

export default TimeIndicator;