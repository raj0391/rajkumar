import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class Child_Category_Master extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      sel_cat: [],
      sel_Sub_cat: [],
      Sel_Child_Cat_edit: [],
      Sel_Child_Sub_Cat_edit: [],
      Sel_Child_Cat_Delete: [],
      Sel_Child_Sub_Cat_Delete: [],

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

    console.log(this.state);
    // .then(data => this.setState({ hits: data.hits }));
  }

  // // insert category data Start  // //

  // choose child category start //
  Sel_Child_Cat = () => {
    var Select_Category = this.refs.mySelect_child_Cat.value;
    alert(Select_Category);
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
  // choose  child category End //
  // // insert child category data Start // //

  // Child category name submit start //
  Child_Category_submit = () => {
    var Select_Category = this.refs.mySelect_child_Cat.value;
    var Select_Sub_Category = this.refs.mySelect_child_Sub_Cat.value;
    var Select_Child_Category_Insert = this.refs.myInput_child_cat_insert.value;
    alert(Select_Category);
    alert(Select_Sub_Category);
    alert(Select_Child_Category_Insert);

    var url = "http://127.0.0.1:8000/api/Child_Category/";
    alert(url);
    var data = {
      Category_Id: Select_Category,
      Sub_Category_Id: Select_Sub_Category,
      Child_Category_Name: Select_Child_Category_Insert
    };

    // var data = { Sub_Category_Name: Update_Sub_Category_Edit };

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

  // Child category name Submit End //

  // // insert child category data End // //

  // // Edit Child category data Start // //

  // Child choose category Edit Start //
  Sel_Child_Cat_edit = () => {
    var Select_Category = this.refs.mySelect_child_Cat_Edit.value;
    alert(Select_Category);
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
          Sel_Child_Cat_edit: data
        });
      });
  };

  // Child choose category Edit End //

  // Child choose Sub category Edit Start //
  Sel_Child_Sub_Cat_edit = () => {
    var Select_Sub_Category_Edit = this.refs.mySelect_child_Sub_Cat_Edit.value;
    alert(Select_Sub_Category_Edit);
    var url =
      "http://127.0.0.1:8000/api/Child_Category/?Sub_Category_Id=" +
      Select_Sub_Category_Edit;
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
          Sel_Child_Sub_Cat_edit: data
        });
      });
  };

  // Child choose Sub category Edit End //

  // Child category name change start //
  Child_Category_Edit_submit = () => {
    var Select_Category = this.refs.mySelect_child_Cat_Edit.value;
    var Select_Sub_Category = this.refs.mySelect_child_Sub_Cat_Edit.value;
    var Select_Child_Category = this.refs.mySelect_child_Child_Cat_Edit.value;
    var Select_Child_Category_Edit = this.refs.myInput_Child_cat_edit.value;

    var url =
      "http://127.0.0.1:8000/api/Child_Category/" + Select_Child_Category + "/";
    alert(url);
    var data = {
      Child_Category_Name: Select_Child_Category_Edit
    };

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

  // Child category name change End //

  // // Edit child category data End // //

  // // Delete child category data Start // //

  // Child choose category Edit Start //
  Sel_Child_Cat_Delete = () => {
    var Select_Category = this.refs.mySelect_child_Cat_Delete.value;
    alert(Select_Category);
    var url =
      "http://127.0.0.1:8000/api/Sub_Category/?Category_Id=" + Select_Category;
    alert(url);
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
          Sel_Child_Cat_Delete: data
        });
      });
  };

  // Child choose category Edit End //

  // Child choose Sub category Edit Start //
  Sel_Child_Sub_Cat_Delete = () => {
    var Select_Sub_Category_Edit = this.refs.mySelect_child_Sub_Cat_Delete
      .value;
    alert(Select_Sub_Category_Edit);
    var url =
      "http://127.0.0.1:8000/api/Child_Category/?Sub_Category_Id=" +
      Select_Sub_Category_Edit;
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
          Sel_Child_Sub_Cat_Delete: data
        });
      });
  };

  // choose Child category Delete Start //
  Child_Category_Delete = () => {
    var Select_Child_Category_Delete = this.refs.Child_Cat_Delete.value;
    alert(Select_Child_Category_Delete);
    var url =
      "http://127.0.0.1:8000/api/Child_Category/" +
      Select_Child_Category_Delete +
      "/";
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
  // choose Child category Delete End //

  // Child choose Sub category Edit End //

  // // Delete child category data End // //
  render() {
    const {
      category,
      sel_cat,
      sel_Sub_cat,
      Sel_Child_Cat_edit,
      Sel_Child_Sub_Cat_edit,
      Sel_Child_Cat_Delete,
      Sel_Child_Sub_Cat_Delete
    } = this.state;
    return (
      <div className="Child_Category_Master">
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
                    <center>Child Category Master</center>
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
                              <Form.Control
                                as="select"
                                ref="mySelect_child_Cat"
                                onChange={this.Sel_Child_Cat}
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
                            <Col className="input_space_bot" sm="6">
                              <Form.Control
                                as="select"
                                ref="mySelect_child_Sub_Cat"
                                onChange={this.Sel_Child_Sub_Cat}
                              >
                                <option>Choose Sub Category</option>
                                {sel_cat.map(item => (
                                  <option value={item.id}>
                                    {item.Sub_Category_Name}
                                  </option>
                                ))}
                              </Form.Control>
                            </Col>
                            <Col sm="2" />
                            <Col sm="2" />
                            <Form.Label column sm="2">
                              Child Category Name
                            </Form.Label>
                            <Col sm="6">
                              <Form.Control
                                type="text"
                                ref="myInput_child_cat_insert"
                                placeholder="Enter the Child Category Name"
                              />
                            </Col>
                            <Col sm="6" />
                            <Col sm="4">
                              <div className="btn_end">
                                <Button
                                  variant="success"
                                  onClick={this.Child_Category_submit}
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
                                ref="mySelect_child_Cat_Edit"
                                onChange={this.Sel_Child_Cat_edit}
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
                            <Col className="input_space_bot" sm="6">
                              <Form.Control
                                as="select"
                                ref="mySelect_child_Sub_Cat_Edit"
                                onChange={this.Sel_Child_Sub_Cat_edit}
                              >
                                <option>Choose Sub Category</option>
                                {Sel_Child_Cat_edit.map(item => (
                                  <option value={item.id}>
                                    {item.Sub_Category_Name}
                                  </option>
                                ))}
                              </Form.Control>
                            </Col>
                            <Col sm="2" />
                            <Col sm="2" />
                            <Form.Label column sm="2">
                              Choose Child Category
                            </Form.Label>
                            <Col className="input_space_bot" sm="6">
                              <Form.Control
                                as="select"
                                ref="mySelect_child_Child_Cat_Edit"
                              >
                                <option>Choose Child Category</option>

                                {Sel_Child_Sub_Cat_edit.map(item => (
                                  <option value={item.id}>
                                    {item.Child_Category_Name}
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
                                ref="myInput_Child_cat_edit"
                                placeholder="Please Enter the Child Category name to edit"
                              />
                            </Col>
                            <Col sm="6" />
                            <Col sm="4">
                              <div className="btn_end">
                                <Button
                                  variant="primary"
                                  onClick={this.Child_Category_Edit_submit}
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
                                ref="mySelect_child_Cat_Delete"
                                onChange={this.Sel_Child_Cat_Delete}
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
                            <Col className="input_space_bot" sm="6">
                              <Form.Control
                                as="select"
                                ref="mySelect_child_Sub_Cat_Delete"
                                onChange={this.Sel_Child_Sub_Cat_Delete}
                              >
                                <option>Choose Sub Category</option>
                                {Sel_Child_Cat_Delete.map(item => (
                                  <option value={item.id}>
                                    {item.Sub_Category_Name}
                                  </option>
                                ))}
                              </Form.Control>
                            </Col>
                            <Col sm="2" />
                            <Col sm="2" />
                            <Form.Label column sm="2">
                              Choose Child Category
                            </Form.Label>
                            <Col sm="6">
                              <Form.Control as="select" ref="Child_Cat_Delete">
                                <option>Choose Child Category</option>
                                {Sel_Child_Sub_Cat_Delete.map(item => (
                                  <option value={item.id}>
                                    {item.Child_Category_Name}
                                  </option>
                                ))}
                              </Form.Control>
                            </Col>
                            <Col sm="6" />
                            <Col sm="4">
                              <div className="btn_end">
                                <Button
                                  variant="danger"
                                  onClick={this.Child_Category_Delete}
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

export default Child_Category_Master;
