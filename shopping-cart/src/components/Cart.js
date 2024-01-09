import React from 'react';
import './Cart.css';
// import { connect } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';

// function Cart({ cart, decrementQuantity, incrementQuantity }) {
function Cart() {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const calculateTax = () => {
        const subtotal = calculateSubtotal();
        const taxRate = 0.1; // 10%
        return subtotal * taxRate;
    };

    const calculateSubtotal = () => {
        const subtotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);
        return subtotal;
    };

    const calculateTotal = () => {
        return calculateSubtotal() + calculateTax();
    };

    return (
        <div className="cart-overlay">
            <div className="cart-container">
                <h1>Shopping Cart</h1>
                {cart.length === 0 ? (
                    <p>Cart is empty. Please add something here!</p>
                ) : (
                    <>
                        <table className="orders">
                            <thead>
                                <tr>
                                    <th colSpan={3}>Item</th>
                                    <th colSpan={2}>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart
                                    .filter((item) => item.quantity > 0)
                                    .map((product) => (
                                        <tr key={product.id}>
                                            <td colSpan={3}>{product.name}</td>
                                            <td colSpan={2}>&#x20B9; {product.price.toFixed(2)}</td>
                                            <td>
                                                <button onClick={() => dispatch(decrementQuantity(product))}>-</button>
                                                &nbsp;{product.quantity}&nbsp;
                                                <button onClick={() => dispatch(incrementQuantity(product))}>+</button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                        <table className="order-summary">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Order Summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.name} x {product.quantity}</td>
                                        <td>&#x20B9; {product.price * product.quantity}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>Tax (10%)</td>
                                    <td>&#x20B9; {calculateTax().toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>&#x20B9; {calculateSubtotal().toFixed(2)}</td>
                                </tr>
                                <tr style={{ borderTop: '1px solid #aaa' }}>
                                    <td>Total</td>
                                    <td>&#x20B9; {calculateTotal().toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button id="place-order-btn">Place Order</button>
                    </>
                )}
            </div>
        </div>
    );
}

// const mapStateToProps = (state) => ({
//     cart: state.cart.items,
// });

// export default connect(mapStateToProps, { incrementQuantity, decrementQuantity })(Cart);
export default Cart;
