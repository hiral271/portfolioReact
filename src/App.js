import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Project/Projects"
import Contact from "./pages/Contact/Contact";
import NavTabs from "../src/components/NavTabs"
import Footer from "./pages/Footer/Footer"

const App = () => {
return(
<Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
      <Footer />
    </Router>
)


}


export default App;

