import React from 'react';

const GameOver = ({ reset }) => {
  return (
    <div>
      <h1>
        Game Over!
      </h1>
      <button onClick={reset}>
        Reset
      </button>
    </div>
    
  )
}

export default GameOver;