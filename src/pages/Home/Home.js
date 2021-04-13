import React from "react";
import "./home.css"
import Dashbord from "../Dashbord/Dashbord"
import ProjectsCard from "../Project/Projects"

import About from "../About/About";
import Contact from "../Contact/Contact";

// const styles = {
//   homeStyle: {
//     background: "#fccb00",
//     textAlign: "center",
//     padding: 250,
 

//   },
  
// }

const Home = () => (
<div>
  <div className='home'>

    <h1>Hello !!! </h1>
    <p>Welcome to My World</p>
   
     
    </div>  
     <Dashbord/>
    <ProjectsCard />
    <About />
    <Contact />
     </div>
);

export default Home;