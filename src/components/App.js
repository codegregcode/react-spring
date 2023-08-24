import React, { useState } from 'react';
import '../styles/app.css';
import { useSpring, animated } from '@react-spring/web';

function App() {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  const h1Spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 850,
  });

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const [spring2, api2] = useSpring(() => ({
    from: { x: 0, y: 0 },
  }));

  const handleClick = () => {
    if (!clicked) {
      api.start({
        from: { x: 0 },
        to: { x: 25 },
      });
      setClicked(true);
    }

    if (clicked) {
      api.start({
        from: { x: 25 },
        to: { x: 0 },
      });
      setClicked(false);
    }
  };

  const handleClick2 = () => {
    if (!clicked2) {
      api2.start({
        from: { x: 0, y: 0 },
        to: { x: 0, y: 25 },
      });
      setClicked2(true);
    }

    if (clicked2) {
      api2.start({
        from: { x: 0, y: 25 },
        to: { x: 0, y: 0 },
      });
      setClicked2(false);
    }
  };

  return (
    <div className="App">
      <animated.h1 className="centered-h1" style={h1Spring}>
        Hello World
      </animated.h1>
      <div className="animation-container">
        <animated.div
          data-testid="animated-sqr"
          onClick={handleClick}
          style={{
            width: 80,
            height: 80,
            background: '#ff6d6d',
            borderRadius: 8,
            ...springs,
          }}
        />
        <div className="spacer" />
        <animated.div
          data-testid="animated-sqr2"
          onClick={handleClick2}
          style={{
            width: 80,
            height: 80,
            background: '#1B9AAA',
            borderRadius: 8,
            ...spring2,
          }}
        />
      </div>
    </div>
  );
}

export default App;
