import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";
import Level from "./Level";
import TargetTime from "./TargetTime";
import TimeIndicator from "./TimeIndicator";
import Tries from "./Tries";
import GameOver from "./GameOver";
import '../styles/TimerApp.css';

const TimerApp = () => {
  const [level, setLevel] = useState(1);
  const [targetTime, setTargetTime] = useState(0.2);
  const [isPressed, setIsPressed] = useState(false);
  const whenPressed = useRef(null);
  const tries = useRef(3);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const timeHeld = useRef(null); // make it a ref instead of just a variable
  const timeDifference = useRef(null); // make it a ref instead of just a variable

  //react-spring
  const [opacity, setOpacity] = useSpring(() => ({ opacity: 0 }));

  const handleMouseDown = () => {
    !gameStarted && setGameStarted(true); //initialize game on the first click
    setIsPressed(true);
    whenPressed.current = Date.now();
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    const whenReleased = Date.now();

    timeHeld.current = (whenReleased - whenPressed.current) / 1000;
    timeDifference.current = Math.abs(targetTime - timeHeld.current);
    timeDifference.current = Math.round(1000 * timeDifference.current) / 1000; //rounded

    console.log(timeHeld.current);
    console.log(timeDifference.current);

    if (timeDifference.current <= 0.1) {
      setLevel(level + 1);
      setTargetTime(targetTime + 0.2);
    } else if (timeDifference.current > 0.1 && tries.current >= 1) {
      //react spring set method
      setOpacity({ opacity: 0 });

      tries.current--;
      // consider using ref for tries as well to get rid of this weird tries === 1 and use tries.current === 0
      if (tries.current === 0) {
        setGameOver(true);
      }
    }
  };

  const reset = () => {
    setLevel(1);
    setTargetTime(0.2);
    tries.current = 3;
    setGameStarted(false);
    setGameOver(false);
    timeHeld.current = null;
  };

  return (
    <div className="TimerApp">
      <Level level={level} />
      <TargetTime targetTime={targetTime} />
      <Button
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
        isGameOver={gameOver}
      />
      <TimeIndicator
        timeHeld={timeHeld.current}
        timeDifference={timeDifference.current}
        isPressed={isPressed}
        gameStarted={gameStarted}
      />
      {/* <animated.h1
        className="ex"
        style={{
          opacity: opacity.opacity.interpolate({
            range: [0, 0.5, 1],
            output: [0, 1, 0]
          })
        }}
      >
        x
      </animated.h1> */}
      <Tries tries={tries.current} />
      {gameOver && <GameOver reset={reset} />}
    </div>
  );
};

export default TimerApp;
