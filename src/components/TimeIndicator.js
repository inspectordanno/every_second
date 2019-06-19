import React from 'react';
import '../styles/TimeIndicator.css'

const TimeIndicator = ({ timeHeld, timeDifference, isPressed, gameStarted }) => {  

  return (
    <div className="TimeIndicator">
      <h2>Your Time: {(!isPressed && gameStarted) && timeHeld}</h2>
      <h2>Difference: {(!isPressed && gameStarted) && timeDifference}</h2>
    </div>
  );
}

export default TimeIndicator;