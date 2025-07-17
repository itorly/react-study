import React from 'react';

// Moving State to Child Component
const ListItem = ({ item }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ backgroundColor: isHovered ? 'lightblue' : 'transparent' }}
        >
            {item}
        </li>
    );
};

const ParentComponent = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (
        <ul>
            {items.map((item, index) => (
                <ListItem key={index} item={item} />
            ))}
        </ul>
    );
};

export default ParentComponent;
