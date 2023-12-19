import React, { useState } from 'react';
import Circle from './components/Circle';

const App = () => {
  const [circles, setCircles] = useState([]);

  const handleClick = (event) => {
    const { pageX, pageY } = event;
    const newCircle = { x: pageX, y: pageY };
    setCircles([...circles, newCircle]);
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }} onClick={handleClick}>
      {circles.map((circle, index) => (
        <Circle key={index} x={circle.x} y={circle.y} />
      ))}
    </div>
  );
};

export default App;
