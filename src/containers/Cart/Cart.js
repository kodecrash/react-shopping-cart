import React,  { Component } from 'react';
import Product from '../../components/Product/Product';
import './Cart.css';

class Cart extends Component {

    state = {
       cartItems: []
    }


    render () {

        let cartTemplate = null;
        if (this.props.selectedProducts) {
         //   this.setState({ cartItems: this.props.selectedProducts});
            cartTemplate = this.props.selectedProducts.map(product => {
                return (
                    <tr key={product.id}>
                        <td  colSpan={2}>
                            <Product name={product.name}
                                     price={product.price}
                                     picture={product.image}
                                     id={product.id}
                                     add={this.props.addProduct}
                                     remove={this.props.removeProduct}
                                     quantity={product.qty}/>
                        </td>
                    </tr>
                )
            });
        }
       
        return (
            <div className="row">
                <div className="cart-container col-md-12">
                    <div className="table-container">
                    <table className="table" id="cartTable">
                        <thead className="thead-dark">
                            <tr>
                                <th width="75%">Products</th>
                                <th>Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            { cartTemplate }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>

        )
    }

}

export default Cart;