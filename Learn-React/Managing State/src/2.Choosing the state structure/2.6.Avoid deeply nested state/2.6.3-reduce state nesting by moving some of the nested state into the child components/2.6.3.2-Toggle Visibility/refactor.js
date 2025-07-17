import React from 'react';

// move the modal visibility state into a child component
const Modal = ({ item, isVisible, onClose }) => (
    isVisible ? (
        <div className="modal">
            <p>Modal for {item}</p>
            <button onClick={onClose}>Close</button>
        </div>
    ) : null
);

const ItemWithModal = ({ item }) => {
    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(prev => !prev)}>Toggle Modal</button>
            <Modal item={item} isVisible={isVisible} onClose={() => setIsVisible(false)} />
        </div>
    );
};

const ParentComponent = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (
        <div>
            {items.map((item, index) => (
                <ItemWithModal key={index} item={item} />
            ))}
        </div>
    );
};

export default ParentComponent;
