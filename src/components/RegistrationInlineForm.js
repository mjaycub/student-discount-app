import React, { Component } from "react";
import {
  Container,
  Row,
  InputGroup,
  FormControl,
  Col,
  Button,
  Alert
} from "react-bootstrap";

class RegistrationInlineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      emailAddress: null,
      successfullRegistration: false
    };
  }

  handleFirstNameChange = e => {
    this.setState({ firstName: e.target.value });
  };

  handleLastNameChange = e => {
    this.setState({ lastName: e.target.value });
  };

  handleEmailChange = e => {
    console.log(this.state);
    this.setState({ emailAddress: e.target.value });
  };

  handleSignUp = e => {
    console.log("SUBMIT");
    // Ensure all values are populated
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.emailAddress
    ) {
      console.log("ALL GOOD");

      // post: /api/students
      fetch("/api/students", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: `${this.state.firstName} ${this.state.lastName}`,
          email: this.state.emailAddress,
          collegeId: this.props.collegeId
        })
      }).then((response) => {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        console.log("RESONSE RETURNNNNNN");
        console.log(response);

        if (response.status === 200) {
          this.setState({ successfullRegistration: true });
        } else {
          this.setState({ successfullRegistration: false, errorMessage: true });
        }
      });
    } else {
      console.log("Fields not complete");
    }
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="12">
            <h3 className="mainHeader">Student Registration</h3>
            {this.state.successfullRegistration ? (
              <Alert variant="success">
                User registration successful! Please confirm via email.
              </Alert>
            ) : 
            this.state.errorMessage ? 
            <Alert variant="danger">
                {/* Obviously, this is terrible UX error messaging, just demonstrating an error case alert */}
                There was an error registering your account.
            </Alert>
            : 
            null}
          </Col>
          <Col lg="3">
            <InputGroup>
              <FormControl
                placeholder="First Name"
                aria-label="First Name"
                onChange={this.handleFirstNameChange}
              />
            </InputGroup>
          </Col>
          <Col lg="3">
            <InputGroup>
              <FormControl
                placeholder="Second Name"
                aria-label="Second Name"
                onChange={this.handleLastNameChange}
              />
            </InputGroup>
          </Col>
          <Col lg="3">
            <InputGroup>
              <FormControl
                placeholder="johndoe@example.com"
                aria-label="Email Address"
                onChange={this.handleEmailChange}
              />
            </InputGroup>
          </Col>
          <Col lg="3">
            <Button className="bottomCtaBtn" onClick={this.handleSignUp}>
              Sign Up
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RegistrationInlineForm;
