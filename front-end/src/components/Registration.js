import React from 'react';
import { useFormik } from 'formik';
import chef from './images/chef.png'
 
 const validate = values => {
   const errors = {};
 
   if (!values.firstName) {
     errors.firstName = '';
   } else if (values.firstName.length < 2) {
     errors.firstName = 'Email must be more than 2 characters';
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

 
   return errors;
 };
 
 const RegistrationForm = () => {
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     }
     ,
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   
   return (
     
      
    
      <div className= 'registration-container'>
        
      <h1>Register Now</h1>
      <img src={chef} alt='chef logo'/>
      {formik.errors.firstName ? <div style={{color:'red'}}>{formik.errors.firstName}</div> : null}
      {formik.errors.lastName ? <div style={{color: 'red'}}>{formik.errors.lastName}</div> : null}
      {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
      
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor='firstName'>First Name</label>
       <input
         id='firstName'
         placeholder='enter first name'
         name='firstName'
         type='text'
         style={{width: '150px', marginBottom: '10px'}}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
       />
       
 
       <label htmlFor='lastName'>Last Name</label>
       <input
         id='lastName'
         placeholder='enter last name'
         name='lastName'
         type='text'
         style={{width: '150px', marginBottom: '10px'}}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastName}
       />
       
 
       <label 
       
       htmlFor='email'>Email</label>
       <input
         id='email'
         placeholder='enter email address'
         name='email'
         type='email'
         style={{width: '150px', marginBottom: '0px'}}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       
 
       <button className='login-button' type='submit'>Submit</button>
       <p style={{fontStyle:'italic', fontWeight:'bold', textDecoration:'underline'}}>OR</p>
       <button className='login-button'  type='submit'>Login</button>
     </form>
     </div>
   );
 };


 export default RegistrationForm;