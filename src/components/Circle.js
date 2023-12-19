import React from 'react';

const Circle = ({ x, y }) => {
  return (
    <div
      style={{
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: 'blue',
        position: 'absolute',
        top: `${y}px`,
        left: `${x}px`,
      }}
    ></div>
  );
};

export default Circle;
