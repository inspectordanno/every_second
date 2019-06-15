import React, { useState } from 'react';
import Button from './components/Button';
import Level from './components/Level';
import TargetTime from './components/TargetTime';
import TimeIndicator from './components/TimeIndicator';
import Tries from './components/Tries';

const TimerApp = () => {
  const [level, setLevel] = useState(1);
  const [targetTime, setTargetTime] = useState(.2);
  const [heldTime, setHeldTime] = useState();
  const [tries, setTries] = useState(3);
  const [gameInit, setGameInit] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const incrementLevel = () => {
    setLevel(level + 1);
  }

  const incrementTargetTime = () => {
    setTargetTime(targetTime + .2);
  }

  const decrementTries = () => {
    setTries(tries - 1);
  }

  const makeGameOver = () => {
    setGameOver(true);
  }
  
  return (
    <div>
      <Level level={level} className='level' />
      <TargetTime targetTime={targetTime} />
      <Button className = 'button'/>
      <TimeIndicator />
      <Tries className='tries' />
    </div>
  )
}

export default TimerApp;