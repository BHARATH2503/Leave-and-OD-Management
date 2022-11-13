import React,{useState} from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Select from "react-select";
import option from "./Data";
import "../css/Registerform.css";

function Registerform()
{

  //select
  const [selectedOptions, setSelectedOptions] = useState();
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  
    return(
      <div className="page">
      <div className="container">
        <h3 className="Auth-form-title">Leave and OD Details</h3>
        <Form className="content" autoComplete="off">
        
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Department</Form.Label>
          <Select className="letter1"
                  options={option}
                  placeholder="Select Department"
                  value={selectedOptions}
                  onChange={handleSelect}
                  isSearchable={true}
                />
        </Form.Group>

        
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Section</Form.Label>
          <Form.Control type="text" className="letter" placeholder="Ex : A" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Regulation</Form.Label>
          <Form.Control type="number" className="letter" placeholder="Ex : 2020" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" className="letter" placeholder="Ex : 20ITR001" />
        </Form.Group>
        

        <Form.Group className="mb-3">
        <Form.Label>Choose the option</Form.Label>
          <Form.Check className="letter" value="Leave" type='radio' name="purpose" label="Leave"/>
          <Form.Check className="letter"  value="OD" type='radio' name="purpose" label="OD"/>
        </Form.Group>

        

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control className="letter" type="date"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Period</Form.Label>
          <Form.Control type="text" className="letter" placeholder="Ex : 1 - 8  OR  2 - 4  OR  5"/>
        </Form.Group>

        <Form.Group>
        <Button variant="primary" className="button" type="submit">
          Submit
        </Button>
        </Form.Group>
      </Form>
      
      </div>
      <br></br>
      <br></br>
      </div>
      
    );
}
export default Registerform;