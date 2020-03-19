import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Category_Master extends Component {
  // insert category data Start //
  Category_submit = () => {
    var Category = this.refs.myInput.value;

    const url = "http://127.0.0.1:8000/api/Category/";
    var data = { CategoryName: Category };

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
    window.location.reload();
  };

  // insert category data End //

  // Edit & Update category data Start //
  Category_Update = () => {
    var SelectCategory = this.refs.mySelect_Cat.value;
    var UpdateCategory = this.refs.mySelect_Cat_Edit.value;
    var data = { CategoryName: UpdateCategory };
    var url = "http://127.0.0.1:8000/api/Category/" + SelectCategory + "/";
    fetch(url, {
      method: "PUT", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
    window.location.reload();
  };
  // Edit & Update category data End //

  // Delete category data Start //
  Category_Delete = () => {
    var SelectCategory = this.refs.mySelect_Cat_Delete.value;
    var url = "http://127.0.0.1:8000/api/Category/" + SelectCategory + "/";
    fetch(url, {
      method: "DELETE", // // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
    window.location.reload();
  };
  // Delete category data End //

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
              <Col>
                <div className="card">
                  <div>
                    <Link to="/Dashboard_Admin">
                      <span>
                        <i className="fas fa-reply-all font_size" />
                      </span>
                    </Link>
                    <span>
                      <i className="fas fa-sign-out-alt font_size float-right" />
                    </span>
                  </div>
                  <h1 className="heading">
                    <center>Category Master</center>
                  </h1>
                  <Tabs defaultActiveKey="New" id="uncontrolled-tab-example">
                    {/* create tab Start */}
                    <Tab eventKey="New" title="New" className="text-center">
                      <div>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="2" />
                            <Form.Label column sm="2">
                              Category Name
                            </Form.Label>
                            <Col sm="6">
                              <Form.Control
                                type="text"
                                ref="myInput"
                                placeholder="Enter Category Name"
                              />
                            </Col>
                            <Col sm="6" />
                            <Col sm="4">
                              <div className="btn_end">
                                <Button
                                  variant="success"
                                  onClick={this.Category_submit}
                                >
                                  Save
                                </Button>
                              </div>
                            </Col>
                          </Form.Group>
                        </Form>
                      </div>
                    </Tab>
                    {/* create tab End */}

                    {/* Edit tab start */}
                    <Tab eventKey="Edit" title="Edit" className="text-center">
                      <div>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="2" />
                            <Form.Label column sm="2">
                              Choose Category
                            </Form.Label>
                            <Col sm="6">
                              <Form.Control as="select" ref="mySelect_Cat">
                                <option>Choose Category</option>
                                {items.map(item => (
                                  <option value={item.id}>
                                    {item.CategoryName}
                                  </option>
                                ))}
                              </Form.Control>
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="2" />
                            <Form.Label column sm="2">
                              Replace With
                            </Form.Label>
                            <Col sm="6">
                              <Form.Control
                                type="text"
                                ref="mySelect_Cat_Edit"
                                placeholder="Please Enter the  Category Name to Edit"
                              />
                            </Col>
                            <Col sm="6" />
                            <Col sm="4">
                              <div className="btn_end">
                                <Button
                                  variant="primary"
                                  onClick={this.Category_Update}
                                >
                                  Update
                                </Button>
                              </div>
                            </Col>
                          </Form.Group>
                        </Form>
                      </div>
                    </Tab>
                    {/* Edit tab End */}

                    {/* Delete tab Start */}
                    <Tab
                      eventKey="Delete"
                      title="Delete"
                      className="text-center"
                    >
                      <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                          <Col sm="2" />
                          <Form.Label column sm="2">
                            Choose Category
                          </Form.Label>
                          <Col sm="6">
                            <Form.Control as="select" ref="mySelect_Cat_Delete">
                              <option>Choose Category to Delete</option>
                              {items.map(item => (
                                <option value={item.id}>
                                  {item.CategoryName}
                                </option>
                              ))}
                            </Form.Control>
                          </Col>
                          <Col sm="6" />
                          <Col sm="4">
                            <div className="btn_end">
                              <Button
                                variant="danger"
                                onClick={this.Category_Delete}
                              >
                                Delete
                              </Button>
                            </div>
                          </Col>
                        </Form.Group>
                      </Form>
                    </Tab>
                    {/* Delete tab End */}
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

export default Category_Master;
