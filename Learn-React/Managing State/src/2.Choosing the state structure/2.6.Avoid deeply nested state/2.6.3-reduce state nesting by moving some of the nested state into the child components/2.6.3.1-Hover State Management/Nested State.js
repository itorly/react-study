import React, { useState } from 'react';

// In this example, we have a parent component 
// that manages the hover state of a list of items:
const ParentComponent = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (
        <ul>
            {items.map((item, index) => (
                <li
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ backgroundColor: hoveredIndex === index ? 'lightblue' : 'transparent' }}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default ParentComponent;
