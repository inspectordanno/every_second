import React from 'react';
import '../styles/Tries.css'

const Tries = ({ tries }) => {
  return (
    <div className="Tries">
      <h3>Tries Left: {tries}</h3>
    </div>
  );
}

export default Tries;