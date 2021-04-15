import React from "react";
import "../Contact/contact.css"
import ModalExample from "../Contact/ConatactButton/Button"
import {
  Jumbotron,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
    
} from 'reactstrap';

import data from "../../data.json";


function Contact() {
  return (

<Jumbotron className="ContactForm">


            
<Form className="form">
    <h2>Contact Me </h2>
    <Col>
    
        <FormGroup>
      
            <Label>Email</Label>
            <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
            />
        </FormGroup>
    </Col>
    <Col>
        <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
    </Col>
    <Button>Submit</Button>
    <ModalExample/>
</Form>



</Jumbotron>

   
  );
}

export default Contact;


{/* <div className="jumbotron">

<ul>
<h2><li>Email-Id : {data[0].email}</li></h2>   
<li> <a  href={data[0].github} >GitHub  Link</a></li>   
<li> <a   href={data[0].linkid}>LinkId  Link</a></li>   
<li>Phone : {data[0].phone} </li> 
<li><a href={data[0].resume}>Resume Link </a> </li>  


  </ul>     
</div>     */}