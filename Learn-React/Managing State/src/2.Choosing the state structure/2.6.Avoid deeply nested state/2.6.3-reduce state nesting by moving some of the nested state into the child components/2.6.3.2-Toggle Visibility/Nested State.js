import React, { useState } from 'react';

const ParentComponent = () => {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    <button onClick={() => setVisibleIndex(index)}>Toggle Modal</button>
                    {visibleIndex === index && <div className="modal">Modal for {item}</div>}
                </div>
            ))}
        </div>
    );
};

export default ParentComponent;
