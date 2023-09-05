import React from 'react';
import { useSpring, animated } from '@react-spring/web';

function Title() {
  const h1Spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 850,
  });

  return (
    <div>
      {' '}
      <animated.h1 className="centered-h1" style={h1Spring}>
        Hello World
      </animated.h1>
    </div>
  );
}

export default Title;
