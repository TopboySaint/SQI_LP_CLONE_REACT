import React from "react";
import logo from "../images/sqilogo.jpg";
import myStyle from '../css/Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav className={myStyle.nav}>
        <img src={logo} alt="SQI logo" className={myStyle.nav_img}/>
        <div id="headlinks" className={myStyle.headlinks}>
          <a href="#" className={myStyle.link}>
            About
          </a>
          <a href="#" className={myStyle.link}>
            Programmes
          </a>
          <a href="#" className={myStyle.link}>
            Admissions
          </a>
          <a href="#" className={myStyle.link}>
            E-Portal
          </a>
          <a href="#" className={myStyle.link}>
            SQI SCholarship
          </a>
          <a href="#" className={myStyle.link}>
            News
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
