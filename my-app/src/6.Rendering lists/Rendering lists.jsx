function RenderingLists() {
    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];

    const listItems = products.map(
        product =>
            <li key={product.id}
                style={{
                    color: product.isFruit ? 'magenta' : 'darkgreen'
                }}
            >
                {product.title}
            </li>
    );

    return (
        <>
            <h1>6.Rendering Lists</h1>
            <ul>{listItems}</ul>
        </>
    );
}

export default RenderingLists;