import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Login from './Login';
import Register from './Register'
// import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from "../context/UserAuthContext"
function App() {
  return (
    <Router>
      <Nav />
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login />}/>
        </Routes>
      </UserAuthContextProvider>
    </Router>

  );
}
export default App;