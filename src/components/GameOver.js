import React from "react";
import '../styles/GameOver.css';

const GameOver = ({ reset }) => {
  return (
    <div className="GameOver">
      <h1>Game Over!</h1>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default GameOver;
