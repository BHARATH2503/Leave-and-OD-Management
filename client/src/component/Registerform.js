import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Select from "react-select";
import option from "./Data";
import Axios from "axios";
import swal from 'sweetalert';
import "../css/Registerform.css";

function Registerform() {
  //select
  const [Department, setDepartment] = useState();
  function handleSelect(data) {
    setDepartment(data);
  }
  //section
  const [Section, setSection] = useState("");
  //rollno
  const [Rollno, setRollno] = useState("")
  //date
  const [Date, setDate] = useState("");
  //period
  const [Period, setPeriod] = useState("");
  //purpose
  const [Purpose, setPurpose] = useState("");
  //reasson
  const [Reason, setReason] = useState("");


  //insert
  const Entry = () => {
    try {
      Axios.post("http://localhost:3001/add", {
        Department: Department, Section: Section, Rollno: Rollno, Date: Date, Period: Period, Purpose: Purpose,Reason:Reason,
      }).then((res) => {
        swal("Inserted", Rollno, "success");
        res.end();
      });
    }
    catch (err) {
      console.log(err);
      swal("Fill the Details","", "error");
    }
  }

 

  
  return (

    <div className="page">
      <div className="container">
        <h3 className="Auth-form-title">Leave and OD Details</h3>
        <center> <p>📌  Enter Rollno and Section in Upper Case  📌</p></center>
        <Form className="content" autoComplete="off">

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Department</Form.Label>
            <Select className="letter1"
              options={option}
              placeholder="Select Department"
              value={Department}
              onChange={handleSelect}
              isSearchable={true}
              required
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Section</Form.Label>
            <Form.Control type="text" className="letter" required placeholder="Ex : A" onChange={(e) => {
              setSection(e.target.value)
            }} />
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Roll No</Form.Label>
            <Form.Control type="text" className="letter" required placeholder="Ex : 20ITR001" onChange={(e) => {
              setRollno(e.target.value)
            }} />
          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>Choose the option</Form.Label>
            <Form.Check className="letter" value="Leave" required type='radio' name="purpose" label="Leave" onChange={(e) => {
              setPurpose(e.target.value)
            }} />
            <Form.Check className="letter" value="OD" required type='radio' name="purpose" label="OD" onChange={(e) => {
              setPurpose(e.target.value)
            }} />
          </Form.Group>



          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control className="letter" required type="date" onChange={(e) => {
              setDate(e.target.value)
            }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Period</Form.Label>
            <Form.Control type="text" className="letter" required placeholder="Ex : 1-8  or  2-4  or  5" onChange={(e) => {
              setPeriod(e.target.value)
            }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Reason</Form.Label>
            <Form.Control type="text" className="letter" required placeholder="Ex : Workshop or Fewer" onChange={(e) => {
              setReason(e.target.value)
            }} />
          </Form.Group>

          <Form.Group>
            <Button variant="primary" className="button" type="button" onClick={Entry}>
              Submit
            </Button>
            
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
export default Registerform;