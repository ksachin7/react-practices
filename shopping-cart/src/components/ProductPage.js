import React from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity } from '../actions/cartActions';
import './ProductPage.css';
import { products } from '../store/productStore';

const renderButtons = (cart, dispatch, product) => {
    // const isProductInCart = (productId) => {
    //     return cart.some(item => item.id === productId);
    // };
  
    // test-api
    // const [responseData, setResponseData] = useState(null);
    // const [error, setError] = useState(null);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const url =
    //       'https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=iphone&country=US&category=aps';
    //     const options = {
    //       method: 'GET',
    //       headers: {
    //         'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY', // Replace this with your actual API key
    //         'X-RapidAPI-Host': 'amazon-product-reviews-keywords.p.rapidapi.com',
    //       },
    //     };
  
    //     try {
    //       const response = await fetch(url, options);
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       const result = await response.text();
    //       setResponseData(result);
    //     } catch (error) {
    //       setError(error);
    //     }
    //   };
  
    //   fetchData();
    // }, []); // Empty dependency array ensures this effect runs only once on component mount

      const cartItem = cart.find(item => item.id === product.id);

    if (cartItem && cartItem.quantity > 0) {
        return (
            <div>
                {cartItem.quantity === 1 ?
                    <button className='remove' onClick={() => dispatch(removeFromCart(product))}><i className="fas fa-times"></i></button> :
                    <button className='decrement-btn' onClick={() => dispatch(decrementQuantity(product))}>-</button>
                }
                &nbsp; {cartItem.quantity} &nbsp;
                <button className='increment-btn' onClick={() => dispatch(incrementQuantity(product))}>+</button>
            </div>
        );
    }
    else {
        return <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>;
    }
};

const ProductPage = () => {
    // const ProductPage = ({ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity }) => {
    // console.log('cart', cart); // Log to check the value
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="product-page">
            <h2>Products</h2>
            <ul className="product-list">
                {products.map((product) => (
                    <li key={product.id} className="product-item">
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        {renderButtons(cart, dispatch, product)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// const mapStateToProps = (state) => ({
//     cart: state.cart.items,
// });

// const mapDispatchToProps = {
//     addToCart,
//     incrementQuantity,
//     decrementQuantity,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
export default ProductPage;
