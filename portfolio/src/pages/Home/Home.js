import React from "react";
import "./home.css"
import Dashbord from "../Dashbord/Dashbord"
import Project from "../Project/Project"
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
     <Project/>
     </div>
);

export default Home;