import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom'; 


const validate = values => {
  const errors = {};
 
    if (!values.firstName) {
      errors.firstName = '';
    } else if (values.firstName.length < 2) {
      errors.firstName = 'First name must be more than 2 characters';
    }
 
    if (!values.lastName) {
      errors.lastName = '';
    } else if (values.lastName.length < 2) {
      errors.lastName = 'Last name must be more than 2 characters';
    }
 
    if (!values.email) {
      errors.email = '';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.tos) {
      errors.tos = 'You must accept the terms of service';
    } else if (values.tos.boolean === false) {
      errors.tos = '';
    }
 
   return errors;
}
 
  const RegistrationForm = () => {
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        tos: false,
      }
     ,
      validate,

    onSubmit: values => {
      axios
      .post('https://reqres.in/api/users', values)
      .then(res => {
        (JSON.stringify(res.data, null, 8))
        console.log('success', res)
        FormReset();
      })
      .catch(err => {
        console.log('failed request', err)
      })
     }} 
    )

    const FormReset = () => {
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
      )
      this.setState({
        itemvalues: [{}]
      })
    }

   
    return (
      <div className= 'registration-container'>
      <h1>Register Now</h1>
      
      {formik.errors.firstName ? <div style={{color:'red'}}>{formik.errors.firstName}</div> : null}
      {formik.errors.lastName ? <div style={{color: 'red'}}>{formik.errors.lastName}</div> : null}
      {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
      {formik.errors.tos ? <div style={{color: 'red'}}>{formik.errors.tos}</div> : null}
      
     
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor='firstName'>First Name:</label>
      <input
        id='firstName'
        placeholder='enter first name'
        name='firstName'
        type='text'
        style={{width: '300px', marginBottom: '10px', padding: '12px'}}
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
       
 
      <label htmlFor='lastName'>Last Name:</label>
      <input
        id='lastName'
        placeholder='enter last name'
        name='lastName'
        type='text'
        style={{width: '300px', marginBottom: '10px', padding: '12px'}}
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
       
 
      <label htmlFor='email'>Email:</label>
      <input
        id='email'
        placeholder='enter email address'
        name='email'
        type='email'
        style={{width: '300px', marginBottom: '10px', padding: '12px'}}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      
      <div className='tos'>
      <label htmlFor='tos'>I accept the terms of service</label>
      <input
        id='tos'
        name='tos'
        type='checkbox'
        onChange={formik.handleChange}
        value={formik.values.tos} 
      />
  </div>
       
      <button className='login-button' type='submit'>Submit</button>
       
      <Link to='/login' style={{textDecoration:'none'}}>
      <button className='login-button' type='button'>Login</button>
    </Link>

      <p style={{fontStyle:'italic', fontWeight:'bold'}}>Already have an account?</p>
     
    </form>
  </div>
     
  );
 };


 export default RegistrationForm;