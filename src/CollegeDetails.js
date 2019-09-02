import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUniversity,
  faTags
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Container,
  Row,
  Col,
  ProgressBar,
  InputGroup,
  FormControl
} from "react-bootstrap";

import Header from "./Components/Header";
import CollegeRegistration from "./CollegeRegistration";
import "./CollegeDetails.scss";
import IconTile from "./components/IconTile";
import PriceTable from "./components/PriceTable";

class CollegeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collegeName: null,
      achievedDiscount: null,
      proposedDiscountPercentage: 50,
      discountProgress: 70,
      completedSignups: 14,
      requiredSignups: 20
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
      .then(data => {
        // If college is registered, show college details
        if (data.id && data.name) {
          // Uppercase first letter in college name if not already, lowercase the rest
          let formattedName =
            this.props.match.params.collegeName.charAt(0).toUpperCase() +
            this.props.match.params.collegeName.slice(1).toLowerCase();
          this.setState({
            collegeName: formattedName
          });
        } else {
          // college is not yet registered, redirect user to college registration page
          this.props.history.push("/college");
        }
      });
  }

  render() {
    // Populate text under progress bar with appropriate status text
    const remainingRequired =
      this.state.requiredSignups - this.state.completedSignups;
    const discountProgressText = this.state.achievedDiscount ? (
      <h3>
        Amazing, your college has achieved a {this.state.achievedDiscount}%
        discount already! You are only {remainingRequired} signups away from
        reaching a {this.state.proposedDiscountPercentage}% discount!
      </h3>
    ) : (
      <h3>
        Your college is only {remainingRequired} signups away from reaching
        their {this.state.proposedDiscountPercentage}% discount!
      </h3>
    );

    const CollegeDetails = () => (
      <div>
        <Header />
        <section className="collegeLandingImage">
          <div className="overlay">
            <div className="landingHeadings">
              <h1>Group Discount Sign Up</h1>
              <h2>{this.state.collegeName}</h2>
            </div>
          </div>
        </section>

        {/*  PROGRESS BAR SECTION WITH SIGN UP CTA */}
        <div className="darkContainer">
          <Container className="progressCtaSection">
            <Row className="justify-content-md-center">
              <Col lg="12">
                <ProgressBar
                  className="m-3 progressBar"
                  now={this.state.discountProgress}
                  label={`${this.state.discountProgress}%`}
                />
                {discountProgressText}
                <a href="#emailCapture">
                <Button className="ctaBtn" variant="primary">
                  Sign Up
                </Button>
                </a>
                
              </Col>
            </Row>
          </Container>
        </div>

        {/* HOW IT WORKS TILES */}
        <div className="howItWorksContainer">
          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="12">
                <h3 className="mainHeader">How Does It Work?</h3>
              </Col>
              <Col xs lg="4">
                <IconTile
                  icon={faUniversity}
                  title="Registration Opens"
                  content="AMBOSS opens up registration for you and your fellow college students."
                />
              </Col>
              <Col xs lg="4">
                <IconTile
                  icon={faUsers}
                  title="Student Sign Up"
                  content="You and your fellow students sign up, more students means a bigger discount!"
                />
              </Col>
              <Col xs lg="4">
                <IconTile
                  icon={faTags}
                  title="Discount Code Released"
                  content="AMBOSS grants you your college specific discount code via email once the quota is met!"
                />
              </Col>
            </Row>
          </Container>
        </div>

        {/* PRICE TABLE */}
        <div className="text-center">
          <PriceTable/>
        </div>

        {/* FINAL CTA - EMAIL & REGISTRATION CAPTURE */}
        <div className="emailCapture" id="emailCapture">
          <Container>
            <Row className="justify-content-md-center">
            <Col xs lg="12">
                <h3 className="mainHeader">Student Registration</h3>
              </Col>
              <Col lg="3">
                <InputGroup>
                  <FormControl
                    placeholder="First Name"
                    aria-label="First Name"
                  />
                </InputGroup>
              </Col>
              <Col lg="3">
                <InputGroup>
                  <FormControl
                    placeholder="Second Name"
                    aria-label="Second Name"
                  />
                </InputGroup>
              </Col>
              <Col lg="3">
                <InputGroup>
                  <FormControl
                    placeholder="johndoe@example.com"
                    aria-label="Email Address"
                  />
                </InputGroup>
              </Col>
              <Col lg="3">
                <Button className="bottomCtaBtn">Sign Up</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
    return <CollegeDetails />;
  }
}

export default CollegeDetails;
