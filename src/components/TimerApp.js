import React, { useState } from 'react';
import moment from 'moment';
import Button from './Button';
import Level from './Level';
import TargetTime from './TargetTime';
import TimeIndicator from './TimeIndicator';
import Tries from './Tries';

const TimerApp = () => {
  const [level, setLevel] = useState(1);
  const [targetTime, setTargetTime] = useState(.2);
  const [isPressed, setIsPressed] = useState(false);
  const [whenPressed, setPressed] = useState(moment());
  const [whenReleased, setReleased] = useState(moment());
  const [tries, setTries] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const timeHeld = whenReleased.diff(whenPressed) / 1000;
  let timeDifference = Math.abs(targetTime - timeHeld);
  timeDifference = Math.round(1000 * timeDifference) / 1000; //rounded

  const handleMouseDown = () => {
    !gameStarted && setGameStarted(true); //initialize game on the first click
    setIsPressed(true);
    setPressed(moment());
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    setReleased(moment());

    console.log(timeHeld);
    console.log(timeDifference);

    if (timeDifference <= .1) {
      setLevel(level + 1);
      setTargetTime(targetTime + .2);
    } else if (timeDifference > .1 && tries >= 1) {
      setTries(tries - 1);
    }

    if (tries === 1) {
      setGameOver(true);
    }
  };
  
  return (
    <div>
      <Level level={level}/>
      <TargetTime targetTime={targetTime} />
      <Button handleMouseDown={handleMouseDown} handleMouseUp={handleMouseUp} isGameOver={gameOver} />
      <TimeIndicator timeHeld={timeHeld} timeDifference={timeDifference} isPressed={isPressed} gameStarted={gameStarted} />
      <Tries tries={tries} />
    </div>
  )
}

export default TimerApp;