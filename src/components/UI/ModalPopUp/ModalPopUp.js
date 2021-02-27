import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ModalPopUp.css';

class ModalPopUp extends Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    // }
    state = {
        checkoutProcessed: false,
        orderPlaced: false
    };

    checkoutHandler()  {
        this.setState({checkoutProcessed: true});
        this.props.onCheckout();
    }

    placeOrderHandler() {
        this.setState({orderPlaced: true});
        this.props.onOrderPlaced();
    }

    render() {
        return (

            <React.Fragment>
                <Modal show={this.props.show}
                    onHide={this.props.hide}
                    animation={false}
                    size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Review your Cart Items </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        { this.props.children }
                    </Modal.Body>
                    <Modal.Footer>
                        {
                        this.state.checkoutProcessed?
                        <Button variant="primary" className="btn btn-submit-cart" onClick={()=> this.placeOrderHandler()}>
                            Place Order
                        </Button>
                        :
                        <Button variant="primary" className="btn btn-submit-cart" onClick={()=> this.checkoutHandler()}>
                            Checkout
                        </Button>
                       }
                    </Modal.Footer>
                </Modal>
            </React.Fragment>

        )
    }

}


export default ModalPopUp;