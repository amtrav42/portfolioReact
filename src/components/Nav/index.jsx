import React, { Component } from "react";
import NavLink from "../NavLink";

const navLinkList = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "code",
    label: "Code"
  },
  {
    href: "write",
    label: "Write"
  },
  {
    href: "about",
    label: "About"
  },
  {
    href: "contact",
    label: "Contact"
  },
];

class Nav extends Component {
  render(){
    return (
      <nav>
        {navLinkList.map(
          function (currentLink, i){
            return <NavLink key={`navLink${i}`} href={currentLink.href} label={currentLink.label} />
          }
        )}
      </nav>
    );
  }
}
export default Nav;
