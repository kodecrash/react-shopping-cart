import React from 'react'
import './OrderForm.css';
import { Formik, useFormik } from "formik";

function OrderForm() {

    // const formik = useFormik({
    //     initialValues: { 
    //         name: "",
    //         email: "",
    //         phone: "",
    //         address: "",
    //     },
    //     onSubmit: values => {
    //       alert(JSON.stringify(values, null, 2));
    //     }
    // });

   // console.log('Form values', formik.values);
    const orderSubmit = (values) => {
        console.log('Order form submit', values);
    };

    const formikProps = { 
        name: "",
        email: "",
        phone: "",
        address: "",
        onSubmit: orderSubmit
    };


    return (
        <div>
           <Formik initialValues={formikProps}>
           {({ handleChange, handleSubmit, values, touched, errors }) => {
               return (
                   <form onSubmit={handleSubmit}>
                       <label htmlFor="name">Name:</label>
                       <input type="text" className="form-control" id="name" name="name"
                           onChange={handleChange} value={values.name} />
                       <label htmlFor="email">Email:</label>
                       <input type="email" className="form-control" id="email" name="email"
                           onChange={handleChange} value={values.email} />

                       <label htmlFor="phone">Phone:</label>
                       <input type="text" className="form-control" id="phone" name="phone"
                           onChange={handleChange} value={values.phone} />
                       <label htmlFor="address">Phone:</label>
                       <textarea type="text" className="form-control" col="5" rows="3" id="address" name="address"
                           onChange={handleChange} value={values.address}></textarea>
                   </form> 
               );
            }}
           
            </Formik>
 
        </div>
    )
}

export default OrderForm;
