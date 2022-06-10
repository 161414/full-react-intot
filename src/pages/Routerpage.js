import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home'
import Login from './Login';
import Signup from './Signup';
export default function Routerpage() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}exact />
                <Route path="/Signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/Dashboard" element={<Dashboard/>} /> 
          
            </Routes>
            </Router>
            
            
        
        </div>
  )
}