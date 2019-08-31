import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CollegeRegistration from "./CollegeRegistration";

class CollegeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collegeName: null
    };
  }

  componentDidMount() {
    // Check if the provided 'collegeName' is actually a college registered already
    fetch(`/api/colleges/${this.props.match.params.collegeName}`)
      .then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })
      .then((data) => {
        // If college is registered, show college details
        if (data.id && data.name) {
          this.setState({
            collegeName: this.props.match.params.collegeName
          });
        } else {
          // college is not yet registered, redirect user to college registration page
          this.props.history.push("/college");
        }
      });
  }

  render() {
    const CollegeDetails = () => (
      <div>
        <h1>college details page</h1>
        <h2>{this.state.collegeName}</h2>
      </div>
    );
    return <CollegeDetails />;
  }
}

export default CollegeDetails;
