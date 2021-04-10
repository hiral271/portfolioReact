import React from "react";
import "../Project/project.css"

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
            <h2>Project 1</h2>
            <h3>MARVELS</h3>

          </div>
          <p>Contrary to popular belief,
          Contrary to popular belief, Lorem Ipsum is not simply r
          andom text. It has roots in a piece of classical Latin

          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
               consectetur, from a Lorem Ipsum consectetur, from a Lorem Ipsum</p>
        
               <a href="https://github.com/CRenauro/Marvel-Universe" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Click here To See Project</a>
        </div>

        <div className="card text-white bg-dark mb-3">
          <div className="img-container">
            <h2>Project 2</h2>
            <h3>How to fish</h3>

          </div>
          <p>Contrary to popular belief,
          Contrary to popular belief, Lorem Ipsum is not simply r
          andom text. It has roots in a piece of classical Latin

          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
               consectetur, from a Lorem Ipsum consectetur, from a Lorem Ipsum</p>
               <a href="https://github.com/CRenauro/How-To-Fish" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Click here To See Project</a>
        </div>

        <div className="card text-white bg-dark mb-3">
          <div className="img-container">
            <h2>Project 3</h2>
            <h3>RoadWise</h3>

          </div>
          <p>Contrary to popular belief,
          Contrary to popular belief, Lorem Ipsum is not simply r
          andom text. It has roots in a piece of classical Latin

          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
               consectetur, from a Lorem Ipsum consectetur, from a Lorem Ipsum</p>
               <a href="https://github.com/hiral271/roadWise-Project" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Click here To See Project</a>
        </div>

      </div>
    </div>
  </div>
)








export default Project;
