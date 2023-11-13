import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navigation/Navbar';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
