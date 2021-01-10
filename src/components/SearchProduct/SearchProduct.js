import React from 'react';
import './SearchProduct.css';
import CartIcon from '../../assets/images/cart-icon.png';

const SearchProduct = (props) => {

    return (


        <div className="row mt-3">
            <div className="col-md-4 col-sm-4 col-6">
                 <div className="input-group">
                    <input type="text" className="form-control" id="searchInput" required placeholder="Search Item..."/>
                    <div className="input-group-append">
                        <button className="btn btn-search" type="submit"></button>
                    </div>
                    
                </div>
                <label className="search-error">Please enter search items.</label>
            </div>
            <div className="col-md-1 col-sm-1 col-2">
                <img className="carticon" src={CartIcon} alt="cart icon"/>
                <span className="item-count">5</span>
            </div>
            <div className="col-md-4 col-sm-4 col-4 text-left">
                <button className="btn btn mt-1 btn-view-cart"
                onClick={props.viewCart}>
                    VIEW CART
                </button>
            </div>
                        
        </div>
              
       

    );
}

export default SearchProduct;