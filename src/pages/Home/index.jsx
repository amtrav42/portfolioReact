import React, { Component } from "react";
import './styles.scss';

class Home extends Component {
  render(){
    return (
      <div className="homeBox">
       <div className="homeWelcome">
         <h2>Welcome to my website!</h2>
       </div>
       <div className="homeContent">
         <p>Hi, I'm Amelia</p>
         <p>Maker, Coder and Writer</p>
         <p>Have a look at some of my projects and drop me a line!</p>
       </div>
      </div>
    );
  }
}
export default Home;
