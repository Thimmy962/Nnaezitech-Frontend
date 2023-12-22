import React from 'react';
import { useSpring, animated, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const Carousel = ({ slides }) => {
  const [index, setIndex] = React.useState(0);

  const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 4) {
      cancel();
      setIndex((prev) => (xDir > 0 ? prev - 1 : prev + 1));
    }
  });

  const props = useSpring({
    marginLeft: `-${index * 100}%`,
  });

  return (
    <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100%' }} {...bind()}>
      <animated.div
        style={{
          display: 'flex',
          width: `${slides.length * 100}%`,
          ...props,
        }}
      >
        {slides.map((slide, i) => (
          <div key={i} style={{ width: '100%', flexShrink: 0 }}>
            {slide}
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default Carousel;
