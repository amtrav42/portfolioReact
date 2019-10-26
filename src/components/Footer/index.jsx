import React, { Component } from "react";
import './styles.scss';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render(){
    const d = new Date();
    const n = d.getFullYear();
    return (
      <footer className='footer'>
        Thank you for visiting my website! If you'd like to have a chat please <Link to="/contact">contact us</Link>!
        <br/>
        Copyright {n}
      </footer>
    );
  }
}
export default Footer;
