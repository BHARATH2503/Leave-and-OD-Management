import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/App.css";
import {
	BrowserRouter ,
	Routes,
	Route,
 
} from 'react-router-dom';
import Nav from './Navbar1';
import Home from './Home';
import Login from './Login';
import Registerform from './Registerform'
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from "../context/UserAuthContext"
import View from './View';
function App() {
  return (
    <BrowserRouter>
    <UserAuthContextProvider>
    <Routes>
      <Route path="/" element={<Nav/>}>
      <Route index element={<Home/>} /> 
      <Route path="/register" element={<ProtectedRoute><Registerform/></ProtectedRoute>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/view' element={<View/>}/>
      </Route>
    </Routes>
    </UserAuthContextProvider>
    </BrowserRouter>
    

  );
}
export default App;