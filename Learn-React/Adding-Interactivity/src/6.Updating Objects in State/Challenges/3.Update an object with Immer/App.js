// import { useState } from 'react';
import { useImmer } from 'use-immer';
import Background from './Background.js';
import Box from './Box.js';

const initialPosition = {
  x: 0,
  y: 0
};

export default function Canvas() {
  // const [shape, setShape] = useState({
  //   color: 'orange',
  //   position: initialPosition
  // });
  const [shape, updateShape] = useImmer({
    color: 'orange',
    position: initialPosition
  });


  function handleMove(dx, dy) {
    // setShape({
    //   ...shape,
    //   position: {
    //     x: shape.position.x + dx,
    //     y: shape.position.y + dy
    //   }
    // });
    updateShape(
      draft => {
        draft.position.x = draft.position.x + dx,
        draft.position.y = draft.position.y + dy
      }
    );
    // shape.position.x += dx;
    // shape.position.y += dy;
  }

  function handleColorChange(e) {
    // setShape({
    //   ...shape,
    //   color: e.target.value
    // });
    updateShape(
      draft => {
        draft.color = e.target.value
      }
    )
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}
