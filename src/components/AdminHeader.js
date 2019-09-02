import React, { useState } from "react";
import "./Header.scss";

function AdminHeader() {

  const logoPath = `${process.env.PUBLIC_URL}/assets/logo.png`;
  const githubLogoPath = `${process.env.PUBLIC_URL}/assets/github.png`;

  return (
    <div id="header-navbar">
      <ul>
        <li>
          <img className="headerLogo" src={logoPath}/>
        </li>
        <li className="headerText">
          <span>Administrator Dashboard</span>
        </li>
        <li>
          <a href="#">Billing</a>
        </li>
        <li>
          <a href="#">Tickets</a>
        </li>
        <li>
          <a href="#">Task Management</a>
        </li>
        <li className="headerRight">
          <a href="https://github.com/mjaycub/student-discount-app" target="_blank">
            <img className="githubLogo" src={githubLogoPath}/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AdminHeader;
