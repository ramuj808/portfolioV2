import React from "react";
import "./navbar.css";
import logo from "../../assets/icons8-circled-j-50.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="menu">
        <Link className="menuListItem">Home</Link>
        <Link className="menuListItem">About</Link>
        <Link className="menuListItem">Projects</Link>
      </div>
      <button className="menuBtn">
        <img src="" alt="" className="menuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
