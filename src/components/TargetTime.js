import React from 'react';

const TargetTime = ({ targetTime }) => {
  return (
    <div>
      <h1>Target Time</h1>
      <h2>(In Seconds)</h2>
      <h1>{targetTime}</h1>
    </div>
  );
}

export default TargetTime;