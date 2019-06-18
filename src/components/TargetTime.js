import React from 'react';

const TargetTime = ({ targetTime }) => {
  return (
    <div>
      <h1>Target Time (In Seconds):</h1>
      <h1>{targetTime.toFixed('1')}</h1>
    </div>
  );
}

export default TargetTime;