import React, { useState } from 'react';
import Circle from './components/Circle';

const App = () => {
  const [circles, setCircles] = useState([]);
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const handleClick = (event) => {
    const { pageX, pageY } = event;
    const newCircle = { x: pageX, y: pageY };
    setCircles([...circles, newCircle]);
    setUndoStack([...circles, newCircle]);
    setRedoStack([]);
  };

  const handleUndo = () => {
    const lastCircle = undoStack.pop();
    if (lastCircle) {
      setRedoStack([...redoStack, lastCircle]);
      setCircles([...circles.slice(0, -1)]);
      setUndoStack([...circles.slice(0, -1)]);
    }
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <button onClick={handleUndo} disabled={undoStack.length === 0}>
        Desfazer
      </button>
      <div onClick={handleClick} style={{ height: '100%' }}>
        {circles.map((circle, index) => (
          <Circle key={index} x={circle.x} y={circle.y} />
        ))}
      </div>
    </div>
  );
};

export default App;
