import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './logo.jpg';
import User from './user.jpg';


function App() {
  return (
    <div className="App">
      <h1>
        Hello,<p>Udit Sharma</p> 
        </h1>
        <div><h6>0 followers|0 following</h6></div>
    
      <div className="img">
        <img src={Logo} alt='website logo' />
        </div>
        <div className="img1">
        <img src={User} alt='website logo' />
        </div>
      

      </div>
        );
}
function img() {
  return (
    <div>
       <div className="img">
        <img src={Logo} alt='website logo' />
        </div>
        <div className="img1">
      </div>
      

      </div>
        );
}

export default App;
//export default img;
