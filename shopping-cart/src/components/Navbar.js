import React, { useState } from 'react';
import logo from './logo.svg';
import "./Navbar.css";
import { connect } from 'react-redux';
import { toggleCart } from '../actions/cartActions';

function Navbar({ isCartOpen, toggleCart }) {
    // const [isCartOpen, setCartOpen] = useState(false);

    // const handleCartToggle = () => {
    //     setCartOpen(!isCartOpen);
    // };

    return (
        <div className="nav">
            <img src={logo} className="App-logo" alt="logo" />
            {/* <span style={{  }}>YourCart</span> */}
            <div className='space' style={{ paddingInline: "47px" }}></div>
            <input type='text'
                placeholder='Search here... '
                onChange={(e) => e.target.value}
                style={{
                    width: '30%',
                    height: "30px",
                    background: 'white',
                    paddingLeft: '10px',
                    border: 'transparent'
                }}>
            </input>
            <a
                className="cart-icon"
                href="##"
                // target="_blank"
                rel='noopener noreferrer'
                onClick={toggleCart}
            >
                {isCartOpen ?
                    <i className="fas fa-cart-arrow-down" ></i>
                    : <i className="fas fa-shopping-cart"></i>
                }
                {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
            </a>
        </div>)
}

const mapStateToProps = (state) => ({
    isCartOpen: state.cart.isCartOpen,
});

export default connect(mapStateToProps, { toggleCart })(Navbar);