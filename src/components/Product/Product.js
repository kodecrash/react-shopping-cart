import React, {useState, useContext} from 'react';
import './Product.css';
import AppContext from '../../context/app-context';

const Product = (props) => {
    const appContext = useContext(AppContext);
    const [inputQty, setInputOty] = useState(1);

    let productObj = {
        name: props.name,
        price: props.price,
        image: props.picture,
        id: props.id,
        qty: props.quantity? props.quantity:inputQty
    };

   

    console.log(appContext.isCartShown);

    const updateQuantity = (event) => {
        console.log('Quantity Updated');
        productObj.qty = parseInt(event.target.value);
        setInputOty(productObj.qty);
    }

    return (

        
        <div className="row">
            <div className="col-md-2 col-sm-2 col-2">
                <img className="product-image" src={`images/${props.picture}`} alt={props.picture} />
            </div>
            <div className="col-md-4 col-sm-4 col-4 offset-1">
                {
                    appContext.isCartShown?<span>Cart Shown</span>:null
                }
                <h4 className="product-name ml-2">{props.name}</h4>
                <h4 className="product-price ml-2">{props.price}</h4>
            </div>
            <div className="col-md-1 col-sm-1  col-12 text-center">
                <input type="text" className="input-qty"  value={productObj.qty} onChange={updateQuantity}/>
            </div>
            <div className="col-md-2 col-sm-2 col-12">
                <button className="btn add-to-cart-btn mt-1" onClick={() => props.add(productObj)}>Add</button>
            </div>
        </div>

    );

};


export default Product;