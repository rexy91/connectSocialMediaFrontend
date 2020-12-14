import React from 'react';
import './App.css';

//Components
import Login from './Components/Login/Login'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App"> 
        <Header/>
        <Login/>
    </div>
  );
}

export default App;
