import React from 'react';
import { useFormik } from 'formik';
 
 const validate = values => {
   const errors = {};
 
   if (!values.password) {
     errors.password = '';
   } else if (values.password.length < 6) {
     errors.password = 'Password must be at least 6 characters';
   }
 
   if (!values.email) {
     errors.email = '';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }

 
   return errors;
 };
 
 const LoginForm = () => {
   const formik = useFormik({
     initialValues: {
       email: '',
       password: '',
     }
     ,
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   
   return (
      <div className= 'login-container'>
      <h1>Welcome!</h1>
      
      {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
      {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
      
      
     <form onSubmit={formik.handleSubmit}>
     <label 
       htmlFor='email'>Email</label>
       <input
         id='email'
         placeholder='enter email address'
         name='email'
         type='email'
         style={{width: '150px', marginBottom: '10px'}}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
 
       <label 
       htmlFor='password'>Password</label>
       <input
         id='password'
         placeholder='enter password'
         name='password'
         type='password'
         style={{width: '150px', marginBottom: '50px'}}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
       />
       
 
       <button className='login-button' type='submit'>Log In</button>
       <p style={{fontStyle:'italic', fontWeight:'bold', textDecoration:'underline'}}>OR</p>
       <button className='login-button'  type='submit'>Register</button>
     </form>
     </div>
   );
 };


 export default LoginForm;