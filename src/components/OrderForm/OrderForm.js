import React from 'react'
import './OrderForm.css';
import { Formik, useFormik } from "formik";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const OrderForm = (props)  =>  {

    // useImperativeHandle(
    //     ref,
    //     () => {
    //         orderSubmit()
    //     }
    // )

    const formik = useFormik({
        initialValues: { 
            name: "",
            email: "",
            phone: "",
            address: "",
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        }
    });

    const placeOrderHandler = () => {
        props.onOrderPlaced(formik.values);
    }


   // console.log('Form values', formik.values);
    // const orderSubmit = (values) => {
    //     console.log('Orderform submit', values);
    // };


    return (
        <div>
            
           <Formik>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" name="name"
                        onChange={formik.handleChange} value={formik.values.name} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email"
                        onChange={formik.handleChange} value={formik.values.email} />

                    <label htmlFor="phone">Phone:</label>
                    <input type="text" className="form-control" id="phone" name="phone"
                        onChange={formik.handleChange} value={formik.values.phone} />
                    <label htmlFor="address">Address:</label>
                    <textarea type="text" className="form-control" col="5" rows="3" id="address" name="address"
                        onChange={formik.handleChange} value={formik.values.address}></textarea>
                </form>
            </Formik>
            <Modal.Footer>
                    <Button variant="primary" className="btn btn-submit-cart" onClick={placeOrderHandler}>
                        Place Order
                    </Button>
            </Modal.Footer>
 
        </div>
    )
};

export default OrderForm;
