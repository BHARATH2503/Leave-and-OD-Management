import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Select from "react-select";
import option from "./Data";
import Axios from "axios";
import "../css/Registerform.css";

function Registerform() {
  //select
  const [Department, setDepartment] = useState();
  function handleSelect(data) {
    setDepartment(data);
  }
  //section
  const [Section, setSection] = useState("");
  //regulation
  const [Regulation, setRegulation] = useState(0);
  //rollno
  const [Rollno, setRollno] = useState("")
  //date
  const [Date, setDate] = useState("");
  //period
  const [Period, setPeriod] = useState("");
  //option
  const [Option, setOption] = useState("");



  //insert
  const Entry = () => {
    try {
      console.log("adasdsad")
      Axios.post("http://localhost:3001/add", {
        Department: Department, Section: Section, Regulation: Regulation, Rollno: Rollno, Date: Date, Period: Period, Option: Option,
      }).then(() => {
        alert("Inserted Succesfully")
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <h3 className="Auth-form-title">Leave and OD Details</h3>
        <Form className="content" autoComplete="off">

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Department</Form.Label>
            <Select className="letter1"
              options={option}
              placeholder="Select Department"
              value={Department}
              onChange={handleSelect}
              isSearchable={true}
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Section</Form.Label>
            <Form.Control type="text" className="letter" placeholder="Ex : A" onChange={(e) => {
              setSection(e.target.value)
            }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Regulation</Form.Label>
            <Form.Control type="number" className="letter" placeholder="Ex : 2020" onChange={(e) => {
              setRegulation(e.target.value)
            }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Roll No</Form.Label>
            <Form.Control type="text" className="letter" placeholder="Ex : 20ITR001" onChange={(e) => {
              setRollno(e.target.value)
            }} />
          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>Choose the option</Form.Label>
            <Form.Check className="letter" value="Leave" type='radio' name="purpose" label="Leave" onChange={(e) => {
              setOption(e.target.value)
            }} />
            <Form.Check className="letter" value="OD" type='radio' name="purpose" label="OD" onChange={(e) => {
              setOption(e.target.value)
            }} />
          </Form.Group>



          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control className="letter" type="date" onChange={(e) => {
              setDate(e.target.value)
            }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Period</Form.Label>
            <Form.Control type="text" className="letter" placeholder="Ex : 1 - 8  OR  2 - 4  OR  5" onChange={(e) => {
              setPeriod(e.target.value)
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