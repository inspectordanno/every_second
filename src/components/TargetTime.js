import React from "react";
import '../styles/TargetTime.css';

const TargetTime = ({ targetTime }) => {
  return (
    <div className="TargetTime">
      <h1 className="TargetTime__title">Target Time <br />(In Seconds)</h1>
      <h1 className="TargetTime__time">{targetTime.toFixed("1")}</h1>
    </div>
  );
};

export default TargetTime;
