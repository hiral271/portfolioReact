import React from "react";
import "../Project/project.css"

const styles = {
  projectStyle: {
    background: "#ffeb3b",
    textAlign: "center",
    padding: 50,
  },
  //#ffeb3b
}
const Project = () => (
  <div style={styles.projectStyle}>
    <h1>Projects</h1>
    {/* <div id="marvels"></div> */}
    <a id="marvels"href="https://github.com/CRenauro/Marvel-Universe"></a>
    <div id="howtofish"></div>
    <div id="roadwise"></div>
  </div>
);

export default Project;
