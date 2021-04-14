import React, { Component } from "react";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Project/Projects"
import Contact from "../pages/Contact/Contact";
import Footer from "../pages/Footer/Footer"
class ContainerInfo extends Component {
  

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Project") {
      return <Projects />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <Footer
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      
      </div>
    );
  }
}



export default ContainerInfo;