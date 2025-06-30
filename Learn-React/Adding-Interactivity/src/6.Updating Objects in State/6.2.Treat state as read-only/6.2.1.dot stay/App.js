import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      /**
       * This code modifies the object assigned to position from the previous render. 
       * But without using the state setting function, React has no idea that object has changed. 
       * So React does not do anything in response.
       * 
       * While mutating state can work in some cases, we don’t recommend it. 
       * You should treat the state value you have access to in a render as read-only.
       */
      onPointerMove={e => {
        position.x = e.clientX;
        position.y = e.clientY;
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
}
