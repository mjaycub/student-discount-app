import React, { Component } from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import AdminHeader from "./components/AdminHeader";

import "./AdminDashboard.scss";

// NOTE:
// The AdminDashboard and AdminDetails components were done last, very hastily
// I just wanted to show how the admin panel could integrate with the demo.

class AdminDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colleges: null
    };
  }
  componentDidMount() {
    // Check if the provided 'collegeName' is actually a college registered already
    fetch(`/api/colleges/`)
      .then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })
      .then(data => {
        console.log("COLLEGES DATA");
        console.log(data);
        this.setState({ colleges: data });
      });
  }

  handleTableRowClick = data => {
    console.log("row click");
    const collegeName = data.name
    this.props.history.push(`/admin/details/${collegeName}`);
  };

  render() {
    const AdminDashboard = () => (
      <div className="adminPage">
        <AdminHeader />

        <Container className="mt-4">
          <Row className="justify-content-md-center kpiSection">
            <Col lg="4">
              <Card bg="primary" text="white">
                <Card.Body>
                  <Card.Title>28 New Students this Week</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4">
              <Card bg="success" text="white">
                <Card.Body>
                  <Card.Title>5 New Colleges Onboarded</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4">
              <Card bg="info" text="white">
                <Card.Body>
                  <Card.Title>3 Discount Groups Closed</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <Table className="mt-4 collegeDataTable" striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>College Name</th>
                    <th>Current Discount Aim</th>
                    <th>Required Signups</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.colleges ? (
                    this.state.colleges.map((item, i) => {
                      return (
                        <tr
                          data="test11"
                          key={i}
                          onClick={() => this.handleTableRowClick(item)}
                        >
                          <td>{item.id}</td>
                          <td className="firstLetterUppercase">{item.name}</td>
                          <td>{item.discountPercent}%</td>
                          <td>{item.requiredSignups}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <span>No data found</span>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>

          {/* More room for graphs, more KPIs, etc... */}
        </Container>
      </div>
    );
    return <AdminDashboard />;
  }
}

export default AdminDashboard;
