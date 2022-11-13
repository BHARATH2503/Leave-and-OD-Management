import React from "react";
import Button from 'react-bootstrap/Button';
import {Outlet,Link} from 'react-router-dom';
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/App.css';
import "../css/Nav.css";
import logo from "../images/logo-1.jpg";

function Navbar1() {
   
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        // console.log(error.message);
      }
    };  
    console.log(user);  
    return (
        <>
            {
                user == null?
                (
                    <Navbar expand="lg" className="Navbar" id="navcolor">
                <Container fluid>
                    <Navbar.Brand>
                    <img src={logo} style={{marginLeft:'15px'}}  width="60" height="70" alt="KEC logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="link" to="/">Home</Link>
                            <Link className="link" to="/register">Register</Link>
                            <Link className="link" to="/view">View</Link>
                            <Button><Link className="link" to="/login">Login</Link></Button>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                ):
                (
                    <Navbar expand="lg" className="Navbar" id="navcolor">
                    <Container fluid>
                        <Navbar.Brand>
                        <img src={logo} style={{marginLeft:'15px'}}  width="60" height="70" alt="KEC logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link className="link" to="/">Home</Link>
                                <Link className="link" to="/register">Register</Link>
                                <Link className="link" to="/view">View</Link>
                                <Button onClick={handleLogout}>Logout</Button>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                )
            }
            <Outlet/>
        </>
    );
}
export default Navbar1;
