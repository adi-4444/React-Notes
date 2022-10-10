import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Login/Login';
import Signup from './Signup/Signup'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </Router>
  );
}

export default App;
