import React from "react";

import data from "../../data.json"
import "../Project/project.css"


const ProjectsCard = () => (
  <div id="project">
   
    <div className="jumbotron" id="cool">
    <h2 id="border">Wanna see my Work Flip this Cards</h2>
    <div class="row">
     
      <div class="col"> 
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div class="card" >
              <img class="card-img-top" src={data[2].image} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">{data[2].Project}</h5>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <h1>{data[2].name}</h1>
         
           
            <a  target="_blank"href={data[2].link} class="btn btn-secondary btn-lg btn-block">Click here to see Project </a>
          </div>
        </div>
      </div>
      </div>


      <div class="col"> 
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div class="card" >
              <img class="card-img-top" src={data[3].image} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">{data[3].Project}</h5>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <h1>{data[3].name}</h1>
     
           
            <a  target="_blank"href={data[3].link} class="btn btn-secondary btn-lg btn-block">Click here to see Project </a>
          </div>
        </div>
      </div>
      </div>
      



      <div class="col"> 
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div class="card" >
              <img class="card-img-top" src={data[4].image} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">{data[4].Project}</h5>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <h1>{data[4].name}</h1>
            
           
            <a  target="_blank"href={data[4].link} class="btn btn-secondary btn-lg btn-block">Click here to see Project </a>
          </div>
        </div>
      </div>
      </div>
    </div>


           <br></br>

    <div className="row">
      <div class="col"> 
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div class="card" >
              <img class="card-img-top" src={data[5].image} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">{data[5].Project}</h5>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <h1>{data[5].name}</h1>
      
           
            <a  target="_blank"href={data[5].link} class="btn btn-secondary btn-lg btn-block">Click here to see Project </a>
          </div>
        </div>
      </div>
      </div>


      <div class="col"> 
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div class="card" >
              <img class="card-img-top" src={data[6].image} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">{data[6].Project}</h5>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <h1>{data[6].name}</h1>
            
           
            <a  target="_blank"href={data[6].link} class="btn btn-secondary btn-lg btn-block">Click here to see Project </a>
          </div>
        </div>
      </div>
      </div>
      



      <div class="col"> 
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div class="card" >
              <img class="card-img-top" src={data[7].image} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">{data[7].Project}</h5>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <h1>{data[7].name}</h1>
         
           
            <a  target="_blank"href={data[7].link} class="btn btn-secondary btn-lg btn-block">Click here to see Project </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>



    </div>


)








export default ProjectsCard;



{/* <div classNameName="project">
    
    //   <div classNameName="container">
      https://p8.f1.n0.cdn.getcloudapp.com/items/o0u6m1Ko/19c3efeb-7b3a-4c30-b6c2-0e5e780e2773.jpeg?source=viewer&v=71c080d6e21ffa3258ab7b60c07134fc
    //   <h1 className="name">Projects I Contributed</h1>
    //     <div className="card-deck">
    //       <div className="card text-white bg-dark mb-3">
    //         <div className="img-container">
    //           <h2>{data[2].Project}</h2>
    //           <h3>{data[2].name}</h3>
  
    //         </div>
    //         <p>{data[2].information}</p>
          
    //              <a  target="_blank" rel="noreferrer"  href="https://github.com/CRenauro/Marvel-Universe" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Click here To See Project</a>
    //       </div>
  
    //       <div className="card text-white bg-dark mb-3">
    //         <div className="img-container">
    //           <h2>{data[3].Project}</h2>
    //           <h3>{data[3].name}</h3>
  
    //         </div>
    //         <p>{data[3].information}</p>
    //              <a  target="_blank" rel="noreferrer"  href="https://guarded-woodland-35639.herokuapp.com/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Click here To See Project</a>
    //       </div>
  
    //       <div className="card text-white bg-dark mb-3">
    //         <div className="img-container">
    //           <h2>{data[4].Project}</h2>
    //           <h3>{data[4].name}</h3>
  
    //         </div>
    //         <p>{data[4].information}</p>
    //              <a  target="_blank"  rel="noreferrer" href="https://floating-badlands-67396.herokuapp.com/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Click here To See Project</a>
          
    //       </div>
  
    //     </div>
    //   </div>
    // </div> */}