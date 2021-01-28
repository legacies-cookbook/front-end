import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


 
 const RegistrationForm = () => (
   <div className='registration-container'>
     <h1 
     style={{ color: 'none', backgroundColor: '#f3ffca', width: '100%', textAlign: 'center', marginBottom: '20px'}}
     >Sign up here!
     </h1>
     <Formik
       initialValues={{ name: '', email: '', password: '', tos: '' }}
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
                type="name" 
                name="name" 
                style={{ width: '150px', marginBottom: '20px'}} 
                placeholder='enter name' />
           <ErrorMessage 
                name="name" 
                component="p" />  
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
            <Field 
                type="checkbox" 
                name="tos" 
                style={{ width: '150px', marginBottom: '20px'}} />
               
           <ErrorMessage 
                name="password" 
                component="div" />
           <button className='login-button'
                type="submit" 
                disabled={isSubmitting}>
             Submit
        </button>
           <button className='login-button' 
           type='button'>
            Already Registered?
        </button>
         
         </Form>
       )}
     </Formik>
   </div>
 );
 
 export default RegistrationForm;