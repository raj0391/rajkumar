import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import sha1 from "sha1";
class Register_Login extends Component {
  // Register Submit Start //
  Register_submit = () => {
    var name = this.refs.name.value;
    var phone_no = this.refs.phone_no1.value;
    var email = this.refs.email1.value;
    var password = this.refs.password1.value;
    var confirm_password = this.refs.confirm_password.value;

    const url = "http://127.0.0.1:8000/api/User_register/";
    var data = {
      Name: name,
      Email: email,
      Moblie: phone_no,
      Password: password,
      Status: "1",
      Created_by: "1",
      Updated_by: "1"
    };

    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
    // window.location.reload();
  };
  // Register Submit End //

  //Login Submit Start //
  Login_submit = () => {
    var phone_no = this.refs.phone_no.value;
    var password = this.refs.password.value;
    const url = "http://127.0.0.1:8000/api/User_register/";

    // window.location.reload();
  };
  //Login Submit Start //
  // view category data start //
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/Category/")
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          items: data
        });
      });

    console.log(this.state);
    // .then(data => this.setState({ hits: data.hits }));
  }
  // view category data End //
  render() {
    const { isLoaded, items } = this.state;
    return (
      <div className="Category_Master">
        <Router>
          <Container>
            <Row>
              <Col>
                <center>
                  <img src="./images/logo2.png" width="275px;" alt="" />
                </center>
              </Col>
            </Row>
            <Row>
              <Col md="2" />
              <Col md="8">
                <div className="card">
                  <h1 className="heading">
                    <center>Register / Login</center>
                  </h1>
                  <Tabs defaultActiveKey="New" id="uncontrolled-tab-example">
                    {/* Register tab Start */}
                    <Tab
                      eventKey="New"
                      title="Register"
                      className="text-center"
                    >
                      <div>
                        <Col>
                          <Form>
                            <Form.Row>
                              <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter Name"
                                  ref="name"
                                />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Phone No</Form.Label>
                                <Form.Control
                                  type="number"
                                  placeholder="Phone No"
                                  ref="phone_no1"
                                />
                              </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formGridAddress1">
                              <Form.Label>Email</Form.Label>
                              <Form.Control placeholder="Email" ref="email1" />
                            </Form.Group>
                            <Form.Row>
                              <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                  type="password"
                                  placeholder="Password"
                                  ref="password1"
                                />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                  type="password"
                                  placeholder="Confirm Password"
                                  ref="confirm_password"
                                />
                              </Form.Group>
                            </Form.Row>
                            <Button
                              variant="primary"
                              type="submit"
                              onClick={this.Register_submit}
                            >
                              Register Now
                            </Button>
                          </Form>
                        </Col>
                      </div>
                    </Tab>
                    {/* Register tab End */}

                    {/* Login tab start */}
                    <Tab eventKey="Edit" title="Login" className="text-center">
                      <div>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="2" />
                            <Form.Label column sm="2">
                              User Name
                            </Form.Label>
                            <Col sm="6">
                              <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control
                                  type="number"
                                  placeholder="Phone No"
                                  ref="phone_no"
                                />
                              </Form.Group>
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="2" />
                            <Form.Label column sm="2">
                              Password
                            </Form.Label>
                            <Col sm="6">
                              <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control
                                  type="password"
                                  placeholder="Password"
                                  ref="password"
                                />
                              </Form.Group>
                            </Col>
                          </Form.Group>
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={this.Login_submit}
                          >
                            Login
                          </Button>
                        </Form>
                      </div>
                    </Tab>
                    {/* Login tab End */}
                  </Tabs>
                </div>
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    );
  }
}

export default Register_Login;
