const products = [
    { id: 1, name: 'Product 1', price: 20.0 },
    { id: 2, name: 'Product 2', price: 30.0 },
    { id: 3, name: 'Product 3', price: 25.0 },
    { id: 4, name: 'Product 4', price: 25.0 },
    { id: 5, name: 'Product 5', price: 25.0 },
    { id: 6, name: 'Product 6', price: 25.0 },
    { id: 7, name: 'Product 7', price: 25.0 },
    // Add more dummy products as needed
];

function getProduct(id) {
    let product = products.find(product => product.id === id);
    if (product === undefined) {
        console.log(`product with id:${id} doesn't exist!`);
        return undefined; // not necessary to return undefined here it will return undefined anyway.
    }
    return product;
}
export { products, getProduct };
