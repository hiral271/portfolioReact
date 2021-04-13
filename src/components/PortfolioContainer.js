import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Project/Projects"
import Contact from "../pages/Contact/Contact";
import Footer from "../pages/Footer/Footer"
class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

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
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
        <Footer/>
      </div>
    );
  }
}

export default Portfolio;
