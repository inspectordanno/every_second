import React from 'react';
import '../styles/Level.css';

const Level = ({ level }) => {
  return (
    <div className="Level"> 
      <h3>Level: {level}</h3>
    </div>
  );
}

export default Level;