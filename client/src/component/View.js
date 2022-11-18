import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import "../css/View.css";
import Axois from "axios";
import swal from 'sweetalert';

function View()
 {
  
  const [Rollno, setRollno] = useState("");
  const [search, setSearch] = useState([]);
  const [svi,setView]=useState("");
  //view
  const View1 = () => {
  swal(Rollno,"Wait a Second!","warning");
    Axois.post("http://localhost:3001/view",
      {
        Rollno: Rollno,
      }).then((res) => {
        
        const data = res.data
        setSearch(data);
        setView(data.Rollno);
        console.log(data.Rollno);
        console.log(data);
        
      });
  } 
  //table
  const searchdata = search.map((val, key) => {
    return (
      <tr key={key}>
        <td>{val.Date}</td>
        <td>{val.Purpose}</td>
        <td>{val.Period}</td>
      </tr>
    )
  });
  const head =
    <>
      <tr>
        <th>Date</th>
        <th>Purpose</th>
        <th>Period</th>
      </tr></>
  const header =
    <>
    <h6 className="letter">Roll No : {Rollno}</h6>
    <Table bordered hover className="table">
      <thead>
        {head}
      </thead>
      <tbody>
        {searchdata}
      </tbody>
    </Table></>

  return (
    <><div className="pages">
      <div className="container view">
        <h3 className="Auth-form-title">Student Leave and OD Details</h3>
        <Form className="content" autoComplete="off">

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Enter Roll No</Form.Label>
            <Form.Control type="text" placeholder="Ex : 20ITR001" autoFocus className="letter" onChange={(e) => {
              setRollno(e.target.value);
            } } />
          </Form.Group>
          <Button type="button" className="buttons" variant="primary" onClick={View1} style={{ letterSpacing: "3px", fontFamily: "Lato" }} >Show</Button>
        </Form>
      </div>
    </div>
   
    {
      svi != null?
      (
        <></>
      ):
      (

        <div className="container page2">
        <h4>Leave and OD Details</h4>  
        {header}
      </div>
      )
    }
    
    </>

   

  )
}

export default View;