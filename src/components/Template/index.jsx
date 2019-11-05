import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Contact from "../../pages/Contact";
import Code from "../../pages/Code";
import About from "../../pages/About";
import Write from "../../pages/Write";
import Home from "../../pages/Home";
import Nav from "../Nav";

//Declare a class called Template, it's a prototype of the base react component//
class Template extends Component {
  render(){
    const { location } = this.props;
    return (
      <div>
        <Header/>
        <Nav/>
        { location === "home" && <Home />}
        { location === "contact" && <Contact />}
        { location === "code" && <Code />}
        { location === "write" && <Write />}
        { location === "about" && <About />}
        <Footer/>
      </div>
    );
  }
}
export default Template;
