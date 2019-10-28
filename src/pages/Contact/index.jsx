import React, { Component } from "react";
import './styles.scss';

class Contact extends Component {
  render(){
    return (
      <div className="contactBox">
       <div className="contactWelcome">
         <h2>Let's Chat!</h2>
         Ready to have your own website? Or need some help with content?
         <br/> Drop me a line and lets get making!
       </div>
       <div className="contactContent">
         <a href="https://www.linkedin.com/in/amelia-travers/"target="_blank"><i class="fab fa-linkedin-in"></i></a>
         <a href="https://www.facebook.com/amaltr"target="_blank"><i class="fab fa-facebook-square"></i></a>
         <a href="https://www.instagram.com/amaltr42/?hl=en"target="_blank"><i class="fab fa-instagram"></i></a>
         <a href="mailto:amelia.travers@gmail.com"target="_blank"><i class="far fa-envelope"></i></a>
       </div>
      </div>
    );
  }
}
export default Contact;
