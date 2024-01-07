// ProductPage.js
import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity } from '../actions/cartActions';
import './ProductPage.css';
import { products } from '../store/productStore';

const ProductPage = ({ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity }) => {
    console.log('cart', cart); // Log to check the value

    const isProductInCart = (productId) => {
        return cart.some(item => item.id === productId);
    };

    const renderButtons = (product) => {
        if (isProductInCart(product.id)) {
            const cartItem = cart.find(item => item.id === product.id);
            return (
                <div>
                    <button className='decrement-btn' onClick={() => decrementQuantity(product)}>-</button>
                    &nbsp; {cartItem.quantity} &nbsp;
                    <button className='increment-btn' onClick={() => incrementQuantity(product)}>+</button>
                </div>
            );
        } else {
            return <button onClick={() => addToCart(product)}>Add to Cart</button>;
        }
    };
    return (
        <div className="product-page">
            <h2>Products</h2>
            <ul className="product-list">
                {products.map((product) => (
                    <li key={product.id} className="product-item">
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        {renderButtons(product)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cart: state.cart.items,
    // products: state.products.products, // If you have products in Redux state, uncomment this line
});

const mapDispatchToProps = {
    addToCart,
    incrementQuantity,
    decrementQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
