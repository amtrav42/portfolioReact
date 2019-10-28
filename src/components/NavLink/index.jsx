import React, { Component } from "react";
import { Link } from "react-router-dom";
import './styles.scss';

class NavLink extends Component {
  render(){
    const { href, label } = this.props;
    return (
      <Link to={href}>
        <div className="navLinks">
          {label}
        </div>
      </Link>
    );
  }
}
export default NavLink;
