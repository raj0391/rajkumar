import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
class Filter_Product_Master extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      sel_cat_fiter: [],
      sel_sub_cat_fiter: [],
      fiter_Selected: [],
      Category_Id: [],

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

  // Sel_Cat_Filter dropdown sub category Start//
  Sel_Cat_Filter = () => {
    var Category = this.refs.mySelect_Cat_Filter.value;
    alert(Category);
    var url = "http://127.0.0.1:8000/api/Sub_Category/?Category_Id=" + Category;
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
          sel_cat_fiter: data
        });
      });
  };

  // Sel_Cat_Filter dropdown sub category End//

  // Sel_Sub_Cat_Filter dropdown Start//
  Sel_Sub_Cat_Filter = () => {
    var Sub_Category = this.refs.mySelect_Sub_Cat_Filter.value;
    alert(Sub_Category);
    var url =
      "http://127.0.0.1:8000/api/Child_Category/?Sub_Category_Id=" +
      Sub_Category;
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
          sel_sub_cat_fiter: data
        });
      });
  };

  // Sel_Sub_Cat_Filter dropdown End//

  // Filter according to selecetd category starts//
  Filter = () => {
    var Category = this.refs.mySelect_Cat_Filter.value;
    var Sub_Category = this.refs.mySelect_Sub_Cat_Filter.value;
    var Child_Category = this.refs.mySelect_Child_Cat_Filter.value;
    var url =
      "http://127.0.0.1:8000/api/get/Products/?Category_Id=" +
      Category +
      "&Sub_Category_Id=" +
      Sub_Category +
      "&Child_Category_Id=" +
      Child_Category;
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
          fiter_Selected: data
        });
      });
  };
  // Filter according to selecetd category Ends//

  // Edit selected value from the drop down list Start //
  Edit = value => {
    var Edit_Sel = value;
    var url = "http://127.0.0.1:8000/api/Products/" + Edit_Sel + "/";
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
          Edit_Selected: data
        });
      });
  };
  // Edit selected value from the drop down list End //

  // Delete selected value from the drop down list Start //
  Delete = value => {
    var Del_Sel = value;
    alert(Del_Sel);
    var url = "http://127.0.0.1:8000/api/Products/" + Del_Sel + "/";
    alert(url);
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
    // window.location.reload();
  };
  // Delete selected value from the drop down list End //
  render() {
    const {
      isLoaded,
      category,
      sel_cat_fiter,
      sel_sub_cat_fiter,
      fiter_Selected,
      Category_Id
    } = this.state;
    return (
      <div className="Filter_Product_Master">
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
                <h1>
                  <center>Filter Product</center>
                </h1>
              </Col>
            </Row>
            <Row className="filter_top">
              {/* Row start */}
              <Col md="3">
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Category</Form.Label>

                      <Form.Control
                        as="select"
                        ref="mySelect_Cat_Filter"
                        onChange={this.Sel_Cat_Filter}
                      >
                        <option>Choose Category</option>
                        {category.map(item => (
                          <option value={item.id}>{item.CategoryName}</option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Col>
              <Col md="3">
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Sub Category</Form.Label>
                      <Form.Control
                        as="select"
                        ref="mySelect_Sub_Cat_Filter"
                        onChange={this.Sel_Sub_Cat_Filter}
                      >
                        <option>Choose Sub Category</option>
                        {sel_cat_fiter.map(item => (
                          <option value={item.id}>
                            {item.Sub_Category_Name}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Col>
              <Col md="3">
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Child Category</Form.Label>
                      <Form.Control as="select" ref="mySelect_Child_Cat_Filter">
                        <option>Choose Child Category</option>
                        {sel_sub_cat_fiter.map(item => (
                          <option value={item.id}>
                            {item.Child_Category_Name}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Col>
              <Col md="3">
                <div onClick={this.Filter}>
                  <Button className="text_top" variant="primary">
                    <i className="fas fa-search" /> Search Products
                  </Button>
                </div>
              </Col>
            </Row>
            {/* Row end */}

            {/* table stripped start */}
            <Row>
              <Col>
                <div className="card1">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Sl No</th>
                        <th>Category Name</th>
                        <th>Sub Category Name</th>
                        <th>Child Category Name</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Offer Price</th>
                        <th colSpan="2">Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fiter_Selected.map(products => {
                        return (
                          <tr>
                            <td>{products.id}</td>
                            <td>{products.Category_Id.CategoryName}</td>
                            <td>
                              {products.Sub_Category_Id.Sub_Category_Name}
                            </td>
                            <td>
                              {products.Child_Category_Id.Child_Category_Name}
                            </td>
                            <td>{products.Product_Name}</td>
                            <td>{products.Unit_Price}</td>
                            <td>{products.Offer_Price}</td>

                            <td>
                              <Link
                                to={{
                                  pathname:
                                    "/Product_Master_Edit/" + products.id
                                }}
                              >
                                <button onClick={() => this.Edit(products.id)}>
                                  <i className="far fa-edit" /> Edit Products
                                </button>
                              </Link>
                            </td>
                            <td>
                              <button onClick={() => this.Delete(products.id)}>
                                <i className="far fa-trash-alt" />
                                Delete Products
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </Col>
              {/* table stripped End */}
            </Row>
          </Container>
        </Router>
      </div>
    );
  }
}

export default Filter_Product_Master;
