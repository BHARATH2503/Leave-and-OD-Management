import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Nav.css';

export default function Navbar1() {
    return (
        <>
            <Navbar sticky="top" expand="lg" bg="light">
                <Container fluid>
                    <Navbar.Brand>
                    <img style={{cursor:'default',marginLeft:'30%'}}
              src="https://letusstudy.in/storage/colleges/logo-131220190616.jpg"
              width="60"
              height="80"
              className=" align-center"
              alt="React Bootstrap logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle style={{ backgroundColor: 'white' }} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="link" to="/">Home</Link>
                            <Link className="link" to="/register">Register</Link>
                            <Link className="link" to="/contact">Contact</Link>
                            <Link className="link" to="/login">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
