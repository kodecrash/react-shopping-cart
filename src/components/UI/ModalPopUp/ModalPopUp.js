import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ModalPopUp.css';

class ModalPopUp extends Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    // }

    

    render() {
        return (
            
                <React.Fragment>
                    <Modal show={this.props.show} 
                    onHide={this.props.hide} 
                    animation={false}
                    size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Review your Cart Items
</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                           
                            <Button variant="primary" className="btn btn-submit-cart" onClick={this.props.hide}>
                                Place Order
          </Button>
                        </Modal.Footer>
                    </Modal>
                </React.Fragment>
               
        )
    }

}


export default ModalPopUp;