import './App.css';
import Navbar from './Navbar';
import Products from "./ProductPage"
import Cart from './Cart';
import { connect } from 'react-redux';


function App({ isCartOpen }) {
  return (
    <div className="App">
      <Navbar />
      {isCartOpen && <Cart />}
      <Products />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isCartOpen: state.cart.isCartOpen,
});

export default connect(mapStateToProps)(App);