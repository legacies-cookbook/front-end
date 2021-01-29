import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


 
 const LoginForm = () => (
   <div className='login-container'>
     <h1 
     style={{ color: 'none', backgroundColor: '#f3ffca', width: '100%', textAlign: 'center', marginBottom: '20px'}}
     >Login
     </h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.name) {
          errors.name = 'Name Required';
        } 
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field 
                type="email" 
                name="email" 
                style={{ width: '150px', marginBottom: '20px'}} 
                placeholder='enter email' />
           <ErrorMessage 
                name="email" 
                component="div" />
           <Field 
                type="password" 
                name="password" 
                style={{ width: '150px', marginBottom: '20px'}} 
                placeholder='enter password'/>
           <ErrorMessage 
                name="password" 
                component="div" />
           <button className='login-button'
                type="submit" 
                disabled={isSubmitting}>
             Submit
        </button>
        <p style={{fontStyle: 'italic'}}>or</p>
           <button className='login-button' 
           type='button'>
            Sign up!
        </button>
         
         </Form>
       )}
     </Formik>
   </div>
 );
 
 export default LoginForm;