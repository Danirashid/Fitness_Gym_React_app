import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-icons">
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
          <img src={github} alt="" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-l"></div>
      <div className="blur blur-f-r"></div>
    </div>
  );
};

export default Footer;
