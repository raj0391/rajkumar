import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class Sub_Category_Master extends Component {
  // view category data start //
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      Sub_Category: [],
      sel_cat: [],
      sel_cat_Del: [],

      isLoaded: false
    };
  }

  componentDidMount() {
    // this.fetchData();
    fetch("http://127.0.0.1:8000/api/Category/")
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          category: data
        });
      });
    fetch("http://127.0.0.1:8000/api/Sub_Category/")
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          Sub_Category: data
        });
      });

    console.log(this.state);
    // .then(data => this.setState({ hits: data.hits }));
  }
  // view category data End //

  // insert sub category data Start //

  Sub_Category_submit = () => {
    var Category = this.refs.mySelect_Cat.value;
    var Sub_Category = this.refs.myInput_sub_cat.value;
    alert(Category);
    alert(Sub_Category);
    const url = "http://127.0.0.1:8000/api/Sub_Category/";
    var data = { Category_Id: Category, Sub_Category_Name: Sub_Category };

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

  // insert sub category data End //

  // // sub category edit start  // //

  // choose category start //
  Sel_Cat_Edit = () => {
    var Select_Category = this.refs.mySelect_Cat_edit.value;
    var url =
      "http://127.0.0.1:8000/api/Sub_Category/?Category_Id=" + Select_Category;
    fetch(url, {
      method: "GET",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          sel_cat: data
        });
      });
  };
  // choose category End //

  // choose Sub category start //
  Sel_Sub_Cat_Edit = () => {
    var Select_Sub_Category = this.refs.mySelect_sub_Cat_edit.value;
    // alert(Select_Sub_Category);
    var url =
      "http://127.0.0.1:8000/api/Sub_Category/?Category_Id=" +
      Select_Sub_Category;
    fetch(url, {
      method: "GET",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          sel_Sub_cat: data
        });
      });
  };
  // choose Sub category End //

  // Sub category name change start //
  Sub_Category_Edit_submit = () => {
    var Select_Category = this.refs.mySelect_Cat_edit.value;
    var Select_Sub_Category = this.refs.mySelect_sub_Cat_edit.value;
    var Select_Sub_Category_Edit = this.refs.myInput_sub_cat_edit.value;

    var url =
      "http://127.0.0.1:8000/api/Sub_Category/" + Select_Sub_Category + "/";
    alert(url);
    var data = {
      Sub_Category_Name: Select_Sub_Category_Edit
      // Category_Id: Select_Category
    };

    // var data = { Sub_Category_Name: Update_Sub_Category_Edit };

    fetch(url, {
      method: "PATCH", // or 'PUT'

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

  // Sub category name change End //
  // // sub category edit End  // //

  // // sub category Delete Start  // //
  // choose category Delete Start //
  Sel_Cat_Delete = () => {
    var Select_Category_Delete = this.refs.mySelect_Cat_Delete.value;
    alert(Select_Category_Delete);
    var url =
      "http://127.0.0.1:8000/api/Sub_Category/?Category_Id=" +
      Select_Category_Delete;
    fetch(url, {
      method: "GET",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          sel_cat_Del: data
        });
      });
  };
  // choose category Delete End //
  // choose Sub category Delete Start //
  Sub_Category_Delete = () => {
    var Select_Category_Delete = this.refs.mySelect_Sub_Cat_Delete.value;
    alert(Select_Category_Delete);
    var url =
      "http://127.0.0.1:8000/api/Sub_Category/" + Select_Category_Delete + "/";
    alert(url);

    fetch(url, {
      method: "DELETE", // or 'PUT'

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
  // choose Sub category Delete End //

  // // sub category Delete End  // //
  render() {
    const {
      isLoaded,
      category,
      Sub_Category,
      sel_cat,
      sel_Sub_cat,
      sel_cat_Del
    } = this.state;
    return (
      <div className="Sub_Category_Master">
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
                    <center>Sub Category Master</center>
                  </h1>
                  <Tabs defaultActiveKey="New" id="uncontrolled-tab-example">
                    {/* create tab */}
                    <Tab eventKey="New" title="New" className="text-center">
                      <div>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="2" />
                            <Form.Label column sm="2">
                              Choose Category
                            </Form.Label>
                            <Col className="input_space_bot" sm="6">
                              <Form.Control as="select" ref="mySelect_Cat">
                                <option>Choose Category</option>
                                {category.map(item => (
                                  <option value={item.id}>
                                    {item.CategoryName}
                                  </option>
                                ))}
                              </Form.Control>
                            </Col>
                            <Col sm="2" />
                            <Col sm="2" />
                            <Form.Label column sm="2">
                              Sub Category Name
                            </Form.Label>
                            <Col sm="6">
                              <Form.Control
                                type="text"
                                ref="myInput_sub_cat"
                                placeholder="Enter Sub Category Name"
                              />
                            </Col>
                            <Col sm="6" />
                            <Col sm="4">
                              <div className="btn_end">
                                <Button
                                  variant="success"
                                  onClick={this.Sub_Category_submit}
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

                            <Col className="input_space_bot" sm="6">
                              <Form.Control
                                as="select"
                                ref="mySelect_Cat_edit"
                                onChange={this.Sel_Cat_Edit}
                              >
                                <option>Choose Category</option>
                                {category.map(item => (
                                  <option value={item.id} x>
                                    {item.CategoryName}
                                  </option>
                                ))}
                              </Form.Control>
                            </Col>
                            <Col sm="2" />
                            <Col sm="2" />
                            <Form.Label column sm="2">
                              Choose Sub Category
                            </Form.Label>
                            <Col sm="6">
                              <Form.Control
                                as="select"
                                ref="mySelect_sub_Cat_edit"
                                onChange={this.Sel_Sub_Cat_Edit}
                              >
                                <option>Choose Sub Category</option>
                                {sel_cat.map(item => (
                                  <option value={item.id}>
                                    {item.Sub_Category_Name}
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
                                ref="myInput_sub_cat_edit"
                                placeholder="Please Enter Sub category Name to Edit"
                              />
                            </Col>
                            <Col sm="6" />
                            <Col sm="4">
                              <div className="btn_end">
                                <Button
                                  variant="primary"
                                  onClick={this.Sub_Category_Edit_submit}
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

                    {/* Delete tab start */}
                    <Tab
                      eventKey="Delete"
                      title="Delete"
                      className="text-center"
                    >
                      <div>
                        <Form>
                          <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="2" />
                            <Form.Label column sm="2">
                              Choose Category
                            </Form.Label>
                            <Col className="input_space_bot" sm="6">
                              <Form.Control
                                as="select"
                                ref="mySelect_Cat_Delete"
                                onChange={this.Sel_Cat_Delete}
                              >
                                <option>Choose Category</option>

                                {category.map(item => (
                                  <option value={item.id}>
                                    {item.CategoryName}
                                  </option>
                                ))}
                              </Form.Control>
                            </Col>
                            <Col sm="2" />
                            <Col sm="2" />
                            <Form.Label column sm="2">
                              Choose Sub Category
                            </Form.Label>
                            <Col sm="6">
                              <Form.Control
                                as="select"
                                ref="mySelect_Sub_Cat_Delete"
                                onChange={this.Sel_Sub_Cat_Delete}
                              >
                                <option>Choose Sub Category</option>
                                {sel_cat_Del.map(item => (
                                  <option value={item.id}>
                                    {item.Sub_Category_Name}
                                  </option>
                                ))}
                              </Form.Control>
                            </Col>
                            <Col sm="6" />
                            <Col sm="4">
                              <div className="btn_end">
                                <Button
                                  variant="danger"
                                  onClick={this.Sub_Category_Delete}
                                >
                                  Delete
                                </Button>
                              </div>
                            </Col>
                          </Form.Group>
                        </Form>
                      </div>
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

export default Sub_Category_Master;
