import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/App.css';
import "../css/Nav.css";
import logo from "../images/logo-1.jpg";

function Navbar1() {
   
    return (
        <>
            <Navbar sticky="top" expand="lg" className="Navbar" id="navcolor">
                <Container fluid>
                    <Navbar.Brand>
                    <img src={logo} style={{marginLeft:'15px'}}  width="60" height="70" alt="KEC logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="link" to="/">Home</Link>
                            <Link className="link" to="/register">Register</Link>
                            <Link className="link" to="/about">About</Link>
                            <Link className="link" to="/login">Login</Link>
                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Navbar1;