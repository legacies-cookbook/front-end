import React from 'react'
import './App.css';
import RegistrationForm from './components/Registration' 
import LoginForm from './components/Login'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      
      <Router>
    <div className='links'>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
      </div>
    
      
    <div className='paths'>
      
      <Route path='/login' component={LoginForm} />
      <Route path='/register' component={RegistrationForm}/>
    </div>
      </Router>
    
    
    </div>
    
  );
}

export default App;
