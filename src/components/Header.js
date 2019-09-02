import React, { useState } from "react";
import "./Header.scss";

function Header() {

  const logoPath = `${process.env.PUBLIC_URL}/assets/logo.png`;
  const githubLogoPath = `${process.env.PUBLIC_URL}/assets/github.png`;

  return (
    <div id="header-navbar">
      <ul>
        <li>
          <img className="headerLogo" src={logoPath}/>
        </li>
        <li className="headerText">
          <span>Student Discount App</span>
        </li>
        <li>
          <a href="#">Tour</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Student Scores</a>
        </li>
        <li className="headerRight">
          <a href="https://github.com/mjaycub/student-discount-app" target="_blank" className="headerLink">
            <img className="githubLogo" src={githubLogoPath}/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
