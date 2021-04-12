import React from "react";
import "../Project/project.css"
import data from "../../data.json"
// const styles = {
//   projectStyle:{
//     background: "#ffeb3b",
//     textAlign: "center",
//     padding: 50,
//   },
//   //#ffeb3b
// }
const Project = () => (
  <div className="project">
    
    <div className="container">
    
    <h1 className="name">Projects I Contributed</h1>
      <div className="card-deck">
        <div className="card text-white bg-dark mb-3">
          <div className="img-container">
            <h2>{data[2].Project}</h2>
            <h3>{data[2].name}</h3>

          </div>
          <p>{data[2].information}</p>
        
               <a  target="_blank" rel="noreferrer"  href="https://github.com/CRenauro/Marvel-Universe" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Click here To See Project</a>
        </div>

        <div className="card text-white bg-dark mb-3">
          <div className="img-container">
            <h2>{data[3].Project}</h2>
            <h3>{data[3].name}</h3>

          </div>
          <p>{data[3].information}</p>
               <a  target="_blank" rel="noreferrer"  href="https://guarded-woodland-35639.herokuapp.com/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Click here To See Project</a>
        </div>

        <div className="card text-white bg-dark mb-3">
          <div className="img-container">
            <h2>{data[4].Project}</h2>
            <h3>{data[4].name}</h3>

          </div>
          <p>{data[4].information}</p>
               <a  target="_blank"  rel="noreferrer" href="https://floating-badlands-67396.herokuapp.com/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Click here To See Project</a>
        
        </div>

      </div>
    </div>
  </div>
)








export default Project;
