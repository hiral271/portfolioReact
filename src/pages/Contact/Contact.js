import React from "react";
import "../Contact/contact.css"
import data from "../../data.json";

function Contact() {
  return (

<div className="jumbotron">
{/* <h2>{data[0].Name}</h2> */}
  <ul>
<h2><li>Email-Id : {data[0].email}</li></h2>   
  <li> <a  href={data[0].github} >GitHub  Link</a></li>   
  <li> <a   href={data[0].linkid}>LinkId  Link</a></li>   
  <li>Phone : {data[0].phone} </li> 
  <li><a href={data[0].resume}>Resume Link </a> </li>  

  
    </ul>     
</div>    
   
  );
}

export default Contact;
