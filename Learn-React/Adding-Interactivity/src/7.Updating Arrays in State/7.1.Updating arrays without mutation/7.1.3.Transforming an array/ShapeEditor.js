import { useState } from 'react';

// Initial shapes data with unique IDs, types, and positions
let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },  // Circle at (50, 100)
  { id: 1, type: 'square', x: 150, y: 100 }, // Square at (150, 100)
  { id: 2, type: 'circle', x: 250, y: 100 }, // Circle at (250, 100)
];

/**
 * ShapeEditor component demonstrates transforming arrays in state
 * by moving circles down while keeping squares in place
 */
export default function ShapeEditor() {
  // State to manage shapes array
  const [shapes, setShapes] = useState(initialShapes);

  /**
   * Handles button click to transform shapes array
   * Moves circles down by 50px while keeping squares in place
   */
  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        // No change for squares
        return shape;
      } else {
        // Create new circle object with updated y position
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    // Update state with transformed array
    setShapes(nextShapes);
  }

  return (
    <>
      {/* Button to trigger shape transformation */}
      <button onClick={handleClick}>
        Move circles down!
      </button>

      {/* Container for shape visualization */}
      <div style={{ 
        position: 'relative', 
        height: '300px', 
        border: '1px solid #ccc', 
        marginTop: '20px' 
      }}>
        {/* Map through shapes array to render each shape */}
        {shapes.map(shape => (
          <div
            key={shape.id}
            style={{
              background: shape.type === 'circle' ? '#4CAF50' : '#2196F3', // Green for circles, blue for squares
              position: 'absolute',
              left: shape.x,
              top: shape.y,
              borderRadius: shape.type === 'circle' ? '50%' : '5px', // Round corners for circles
              width: 50,
              height: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Subtle shadow for depth
              transition: 'all 0.3s ease' // Smooth transition for position changes
            }}
          >
            {/* Display first letter of shape type (C for circle, S for square) */}
            {shape.type[0].toUpperCase()}
          </div>
        ))}
      </div>
    </>
  );
}
