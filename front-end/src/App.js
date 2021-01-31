import React from 'react'
import './App.css';
import RegistrationForm from './components/Registration' 
import LoginForm from './components/Login'
import { BrowserRouter, Route, Link } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
    <div className='links'>
      <Link to='/'>Login</Link>
      <Link to='/register'>Register</Link>
      </div>
    
      
    <div className='paths'>
      
      <Route exact path='/' component={LoginForm} />
      <Route path='/register' component={RegistrationForm}/>
    </div>
      </BrowserRouter>
    
    
    </div>
    
  );
}

export default App;
