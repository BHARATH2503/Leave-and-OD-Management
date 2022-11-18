import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Axios from "axios";
import swal from 'sweetalert';

export default function Delete() {

    //rollno
    const [Rollno, setRollno] = useState("")
    //date
    const [Date, setDate] = useState("");

    //delete

    const Delete = () => {
        try {
            Axios.post("http://localhost:3001/delete", { Rollno: Rollno, Date: Date, }).then(() => {
                swal("Deleted!", Rollno, "success");
            })
        }
        catch (err) {
            console.log(err);
        }

    }

    return (
        <div className="page1">
            <div className="container">
                <h3 className="Auth-form-title">Delete the Leave and OD Details</h3>
                <Form className="content" autoComplete="off">

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Roll No</Form.Label>
                        <Form.Control type="text" className="letter" placeholder="Ex : 20ITR001" onChange={(e) => {
                            setRollno(e.target.value)
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control className="letter" type="date" onChange={(e) => {
                            setDate(e.target.value)
                        }} />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="danger" className="buttondel" type="button" onClick={Delete}>
                            Delete
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}