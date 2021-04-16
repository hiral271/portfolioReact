import React ,{useState}from "react";
import "../Contact/contact.css"
import ModalExample from "../Contact/ConatactButton/Button"
import {
  Jumbotron,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
  
    
} from 'reactstrap';


const  Contact=() =>{
  const[img,setImg]=useState("")
 const inputEvent = (event)=>{
   const data = event.target.value;
   console.log(data)
   setImg(data)
 }
   
 
  return (

<Jumbotron className="ContactForm">


            
<Form className="form">
    <h1>Contact Me </h1>
    <Col>
    
        <FormGroup>
      
            <Label>Email :</Label>
            <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={img}
                onChange={inputEvent}
            />
        </FormGroup>
    </Col>
    <Col>
        <FormGroup>
            <Label for="exampleText"
            
            
            >Comments : </Label>
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