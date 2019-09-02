import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  InputGroup,
  FormControl,
  Button
} from "react-bootstrap";
import AdminHeader from "./components/AdminHeader";
import "./AdminDetails.scss";

// NOTE:
// The AdminDashboard and AdminDetails components were done last, very hastily
// I just wanted to show how the admin panel could integrate with the demo.

class AdminDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collegeData: {
        name: null,
        discountPercent: null,
        requiredSignups: null
      },
      editable: false,
      discountInput: null,
      requiredUsersInput: null
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
        this.setState({
          collegeData: data,
          discountInput: data.discountPercent,
          requiredUsersInput: data.requiredSignups
        });
      });
  }


  sendDataUpdate = () => {
      // post data to API
  }


  onEditPress = () => {
    this.setState(prevState => {
      let isEditableState = !prevState.editable;

      // if saving, check if data is different from prevState and use API to update
      let postRequestRequired = false;
      if (!isEditableState) {
        if((prevState.collegeData.discountPercent !== this.state.discountInput) || (prevState.collegeData.requiredSignups !== this.state.requiredUsersInput))  {
            postRequestRequired = true;
        } else {
            postRequestRequired = false;
        }
      }

      if(postRequestRequired) {
          this.sendDataUpdate(); // FAKE 
      }
      return {
        editable: isEditableState
      };
    });
  };

  onDiscountInputChange = e => {
    this.setState({
      discountInput: e.target.value
    });
  };

  onRequiredUsersInput = e => {
    this.setState({
      requiredUsersInput: e.target.value
    });
  };

  onBackPress = () => {
    this.props.history.push(`/admin`);
  }

  render() {
    const AdminDetails = () => (
      <div className="adminPage">
        <AdminHeader />

        <Container className="mt-4">
          <Row>
            <Col lg="12">
            <Button className="mb-3" variant="outline-dark" onClick={this.onBackPress}>Back</Button>
              <div className="detailsPanel">
                <h3 className="firstLetterUppercase">
                  {this.state.collegeData.name}
                </h3>

                <div className="actionBtnArea">
                  <Button
                    variant="outline-info"
                    className="actionBtn mr-3"
                    onClick={this.onEditPress}
                  >
                    {this.state.editable ? "Save" : "Edit"}
                  </Button>
                  <Button className="actionBtn">Email Students</Button>
                </div>

                <h5>Discount Available</h5>

                {this.state.editable ? (
                  <input
                    type="text"
                    name="fname"
                    onChange={this.onDiscountInputChange}
                    value={this.state.discountInput}
                  />
                ) : (
                  <p>{this.state.collegeData.discountPercent}</p>
                )}

                <h5>Required Signups</h5>
                <p>{this.state.collegeData.requiredSignups}</p>

                {/* Could be pulled from an API that generates the promo codes and saves in DPI */}
                <h5>Generated Promo Code</h5>
                <p>XJY-648</p>
              </div>

              {/* STUDENT TABLE */}
              <Table className="mt-4 collegeDataTable" striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Student Name</th>
                    <th>Student Email</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.collegeData.students ? (
                    this.state.collegeData.students.map((item, i) => {
                      return (
                        <tr data="test11" key={i}>
                          <td>{item.id}</td>
                          <td className="firstLetterUppercase">{item.name}</td>
                          <td>{item.email}</td>
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
    return <AdminDetails />;
  }
}

export default AdminDetails;
