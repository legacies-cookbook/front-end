import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios'
/* import { Link } from 'react-router-dom';  */


const validate = values => {
  const errors = {};
 
    if (!values.username) {
    errors.username = '';
    } else if (values.username.length < 6) {
    errors.username = 'Username must be at least 6 characters';
    }
 
    if (!values.password) {
      errors.password = '';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
 
   return errors;
 };
 
const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
     }
     ,
      validate,
      
      onSubmit: values => {
      axios
      .post('https://reqres.in/api/users', values)
      .then(res => {
          (JSON.stringify(res.data, null, 8))
          console.log('success', res)
          FormReset()
          
          
      })
      .catch(err => {
        console.log('failed request', err)
      })
     }}
     )

     const FormReset = () => {
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = ""))
      
    }

   
    return (
      <div className= 'login-container'>
      <h1>Sign In</h1>
      
      {formik.errors.username ? <div style={{color: 'red'}}>{formik.errors.username}</div> : null}
      {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
      
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor='username'>Username:</label>
      <input
        id='username'
        placeholder='enter username'
        name='username'
        type='text'
        style={{width: '300px', marginBottom: '10px', padding: '12px'}}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
 
      <label htmlFor='password'>Password:</label>
      <input
        id='password'
        placeholder='enter password'
        name='password'
        type='password'
        style={{width: '300px', marginBottom: '50px', padding: '12px'}}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
       
       

      <button className='login-button' type='submit'>Log In</button>

      {/* <Link to='/register' style={{textDecoration:'none'}}> */}
        
      <button className='login-button' type='button'>Register</button>
      
      {/* </Link> */}

      <p style={{fontStyle:'italic', fontWeight:'bold'}}>Need to register?</p>

    </form>
  </div>
  );
 };


 export default LoginForm;