import React,  { Component } from 'react';
import Product from '../Product/Product';
import './ProductList.css';

class ProductList extends Component {

    state = {
       products: [{
        name: 'Buffalo - Striploin',
        price: '39.11',
        image: 'product-1.jpg',
        id: 101
       },{
        name: 'Bread - Malt',
        price: '82.61',
        image: 'product-2.jpg',
        id: 102
       },{
        name: 'Wine - Gato Negro Cabernet',
        price: '51.01',
        image: 'product-3.jpg',
        id: 103
       }]
    }

  

    render () {
        let productListTemplate = null;

        if (this.state.products) {
            productListTemplate = this.state.products.map(product => {
                return (
                    <tr key={product.id}>
                        <td  colSpan={2}>
                            <Product name={product.name}
                                     price={product.price}
                                     picture={product.image}
                                     id={product.id}
                                     add={this.props.addProduct}
                                     remove={this.props.removeProduct}/>
                        </td>
                    </tr>
                )
            })
        }

        return (
          <>
                <div className="row mt-3">
                    <div className="product-container col-md-12">
                        <div className="table-container">
                            <table className="table">
                               <thead className="thead-dark">
                                    <tr>
                                        <th>Products</th>
                                        <th>Qty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { productListTemplate }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                            
          </>

        )
    }

}

export default ProductList;