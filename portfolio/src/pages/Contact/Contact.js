import React from "react";

import data from "../../data.json";

function Contact() {
  return (
 <div>

     <p>
    <li> Name={data[0].Name}</li>   
        image={data[0].image}
        occupation={data[0].occupation}
        location={data[0].location}
        </p>
        
     
   </div>   
  );
}

export default Contact;
