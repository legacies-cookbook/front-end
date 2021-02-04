import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/UserActions';


const validate = values => {
  const errors = {};
 
    if (!values.username) {
      errors.username = 'username required';
    } else if (values.username.length < 6) {
      errors.username = 'Username must be at least 6 characters';
    }
 
    if (!values.password) {
      errors.password = 'password required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
 
    if (!values.email) {
      errors.email = 'email required';
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
        username: '',
        password: '',
        email: '',
        tos: false,
      }
     ,
      validate,

    onSubmit: values => {
      register(values);
      FormReset();
      
      // axios
      // .post('https://reqres.in/api/users', values)
      // .then(res => {
      //   (JSON.stringify(res.data, null, 8))
      //   console.log('success', res)
      //   FormReset();
      // })
      // .catch(err => {
      //   console.log('failed request', err)
      // })
     }} 
    )

    const FormReset = () => {
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
      )
      
    }

   
    return (
      <div className= 'registration-container'>
      <h1>Register Now</h1>
      
      {formik.errors.username ? <div style={{color:'red'}}>{formik.errors.username}</div> : null}
      {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
      {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
      {formik.errors.tos ? <div style={{color: 'red'}}>{formik.errors.tos}</div> : null}
      
     
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor='username'>Username:</label>
      <input
        id='username'
        placeholder='create username'
        name='username'
        type='text'
        style={{width: '300px', marginBottom: '10px', padding: '12px'}}
        onChange={formik.handleChange}
        value={formik.values.username}
      />
       
 
      <label htmlFor='password'>Password:</label>
      <input
        id='password'
        placeholder='create password'
        name='password'
        type='password'
        style={{width: '300px', marginBottom: '10px', padding: '12px'}}
        onChange={formik.handleChange}
        value={formik.values.password}
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


 export default connect({register})(RegistrationForm);