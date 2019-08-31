import React, { Component } from "react";

class CollegeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collegeName: null
    };
  }
  componentDidMount() {
    this.setState({
      collegeName: this.props.match.params.collegeName
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
