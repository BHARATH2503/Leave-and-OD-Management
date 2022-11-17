import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Axios from "axios";
import swal from 'sweetalert';

export default function Update() {

    //rollno
    const [Rollno, setRollno] = useState("")
    //date
    const [Date, setDate] = useState("");
    //period
    const [Period, setPeriod] = useState("");
    //option
    const [Purpose, setPurpose] = useState("");

    //update

  const Update = () => {
    try {
      Axios.put("http://localhost:3001/update", { Rollno: Rollno, Date: Date, Purpose: Purpose, Period: Period }).then(()=>{
        swal("Updated!", Rollno, "success");
      })
    }
    catch(err)
    {
      console.log(err)
    }
  }


    return (
        <div className="page">
            <div className="container">
                <h3 className="Auth-form-title">Update the Leave and OD Details</h3>
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

                    <Form.Group className="mb-3">
                        <Form.Label>Choose the option</Form.Label>
                        <Form.Check className="letter" value="Leave" type='radio' name="purpose" label="Leave" onChange={(e) => {
                            setPurpose(e.target.value)
                        }} />
                        <Form.Check className="letter" value="OD" type='radio' name="purpose" label="OD" onChange={(e) => {
                            setPurpose(e.target.value)
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Period</Form.Label>
                        <Form.Control type="text" className="letter" placeholder="Ex : 1-8  or  2-4  or  5" onChange={(e) => {
                            setPeriod(e.target.value)
                        }} />
                    </Form.Group>

                    <Form.Group>
                        <Button variant="success" className="button" type="button" onClick={Update}>
                            Update
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}