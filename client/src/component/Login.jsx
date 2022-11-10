import React, { useState } from "react";
import '../css/Login.css'
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "./context/UserAuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/register");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="Auth-form-container">
        <Form onSubmit={handleSubmit} className="Auth-form">
          <h4 className="Auth-form-title">ADMIN LOGIN</h4>
          <div className="Auth-form-content">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Label  className="mb-1 txtfield">Email</Form.Label>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Control autoFocus required
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Label className="mb-1 txtfield">Password</Form.Label>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                type="password" required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid mt-2">
              <Button variant="primary" type="Submit" className="txtfield">
                Login
              </Button>
            </div>
          </div>
        </Form>
        <hr />
      </div>
    </>
  );
};
export default Login;
