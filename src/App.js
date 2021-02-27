import  { useState, useRef } from 'react';
import './App.css';
import SearchUser from './components/SearchUser/SearchUser';
import SearchProduct from './components/SearchProduct/SearchProduct';
import ModalPopUp from './components/UI/ModalPopUp/ModalPopUp';
import ProductList from './components/ProductList/ProductList';
import Cart from './containers/Cart/Cart';
import OrderForm from './components/OrderForm/OrderForm';

function App() {

  const [isModalVisible, setShowModal] = useState(false);
  const [isCheckoutDone, setCheckoutDone] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartSize, setCartSize] = useState(0);
  const orderFormRef = useRef();

  const showModal = () => {
    setShowModal(true);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const cartCheckout = () => {
    console.log('Cart Checkout');
    setCheckoutDone(true);
  }

  const placeOrder = () => {
    console.log('order placed', orderFormRef);
  }

  const addToCart = (product) => {
    console.log(product);
    if (!product) {
      return;
    }
    // check product already exists
    const existingProudct = selectedProducts.find(prod => prod.id === product.id);
    // If existingProudct not found add product to selectedProducts
    if (product && !existingProudct) {
      const productsArr = [...selectedProducts];
      productsArr.push(product);
      setSelectedProducts(productsArr);
      setCartSize(productsArr.length);
    } else {
      // If existing product found update product quantity only
      const updatedselectedProducts = selectedProducts.map(item => {
        if (item.id === existingProudct.id) {
          item.qty = product.qty
        }
        return item;
      });
      // set updated cart items
      setSelectedProducts(updatedselectedProducts);
      setCartSize(updatedselectedProducts.length);
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
            <SearchProduct viewCart={showModal} cartSize={cartSize} />
            <ProductList addProduct={addToCart} removeProduct={removeFromCart}/>
          </div>
        </div>
      </div>
      <ModalPopUp show={isModalVisible} 
      hide={hideModal} 
      onCheckout={cartCheckout}
      onOrderPlaced={placeOrder}>
        {
         isCheckoutDone? <OrderForm ref={orderFormRef}/> :<Cart selectedProducts={selectedProducts}/>
        }
      </ModalPopUp>

    </div>
  );
}

export default App;
