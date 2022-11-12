import React from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import "../css/View.css";
class View extends React.Component {
    render() {
        return (
            <div className="pages">
            <div className="container view">
              <h3 className="Auth-form-title">Student Leave and OD Details</h3>
              <Form className="content" autoComplete="off">
                
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Enter Your Roll No</Form.Label>
          <Form.Control type="text" placeholder="Eg:20ITR001" autoFocus className="letter"/>
        </Form.Group>
        <Button className="buttons" variant="success" type="button">Search</Button>
        </Form>
        </div>
        </div>
            
        )
    }
}
export default View;