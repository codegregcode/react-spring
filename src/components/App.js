import '../styles/app.css';
import { useSpring, animated } from '@react-spring/web';

function App() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => {
    api.start({
      from: { x: 0 },
      to: { x: 1500 },
    });
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
