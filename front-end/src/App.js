import React from 'react'
import './App.css';
import RegistrationForm from './components/Registration' 
import chef from './images/chef.png'



function App() {
  return (
    <div className="App">
      <img src={chef} alt='chef logo'/>
      <RegistrationForm/>
    </div>
  );
}

export default App;
