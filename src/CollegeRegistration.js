import React, { Component } from 'react';

class CollegeRegistration extends Component {
  render() {
    const CollegeRegistration = () => (
       <div>
        <h1>Registration page</h1>
        <p>Empty for this demo. This would be a registration/request form for specific colleges. See links below for demo:</p>
        <ul>
          <li><a href="/college/usc">/college/usc</a></li>
          <li><a href="/admin">/admin</a></li>
        </ul>
      </div>
    )
    return (
        <CollegeRegistration/>
    );
  }
}

export default CollegeRegistration;