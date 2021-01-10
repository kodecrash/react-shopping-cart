import  { useState } from 'react';
import './App.css';
import SearchUser from './components/SearchUser/SearchUser';
import SearchProduct from './components/SearchProduct/SearchProduct';
import ModalPopUp from './components/UI/ModalPopUp/ModalPopUp';
import ProductList from './components/ProductList/ProductList';

function App() {

  const [isModalVisible, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const showModal = () => {
    setShowModal(true);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const addToCart = (product, qty) => {
    console.log(product);
    if (product) {
      cartItems.push(product);
      setCartItems(cartItems);
    }
   
 
  }

  const removeFromCart = (product) => {

  }

  return (
    <div className="App">

      <div className="container-fluid app-container">
        <div className="row">
          <div className="col-md-12 cart-container">
            <SearchUser />
            <SearchProduct viewCart={showModal} />
            <ProductList addProduct={addToCart} removeProduct={removeFromCart}/>
          </div>
        </div>
      </div>
      <ModalPopUp show={isModalVisible} hide={hideModal}>
        <h1>This is Modal</h1>
      </ModalPopUp>

    </div>
  );
}

export default App;
