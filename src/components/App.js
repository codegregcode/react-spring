import React, { useState } from 'react';
import '../styles/app.css';
import { useSpring, animated } from '@react-spring/web';

function App() {
  const [clicked, setClicked] = useState(false);

  const [springs, api] = useSpring(() => ({
    from: { x: 50 },
  }));

  const handleClick = () => {
    if (!clicked) {
      api.start({
        from: { x: 50 },
        to: { x: 1590 },
      });
      setClicked(true);
    }

    if (clicked) {
      api.start({
        from: { x: 1590 },
        to: { x: 50 },
      });
      setClicked(false);
    }
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <animated.div
        onClick={handleClick}
        style={{
          width: 80,
          height: 80,
          background: '#ff6d6d',
          borderRadius: 8,
          ...springs,
        }}
      />
    </div>
  );
}

export default App;
