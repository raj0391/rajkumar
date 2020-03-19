import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class Product_Master extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      sel_pro_cat: [],
      sel_pro_Sub_cat: [],

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

  getPhoto = () => {
    var formData = new FormData();
    var file = document.getElementById("one").files[0];
    var file_two = document.getElementById("two").files[0];
    var file_three = document.getElementById("three").files[0];
    var file_four = document.getElementById("four").files[0];
    var file_five = document.getElementById("five").files[0];
    var file_six = document.getElementById("six").files[0];
    var Select_Product_Category = this.refs.mySelect_Product_Cat.value;
    var Select_Product_Sub_Category = this.refs.mySelect_Product_Sub_Cat.value;
    // var Select_Product_Child_Category = this.refs.mySelect_Product_Child_Cat
    //   .value;
    var Product_Name = this.refs.Product_Name.value;
    var Product_Id = this.refs.Product_Id.value;
    var Product_Quantity = this.refs.Product_Quantity.value;
    var Product_Unit_Price = this.refs.Product_Unit_Price.value;
    var Product_Discount = this.refs.Product_Discount.value;
    var Product_Offer_Price = this.refs.Product_Offer_Price.value;
    var Product_Quote = this.refs.Product_Quote.value;
    var Product_Description = this.refs.Product_Description.value;

    formData.append("Category_Id", Select_Product_Category);
    formData.append("Sub_Category_Id", Select_Product_Sub_Category);
    // formData.append("Child_Category_Id", Select_Product_Child_Category);
    formData.append("Product_Name", Product_Name);
    formData.append("Product_Id", Product_Id);
    formData.append("Quantity", Product_Quantity);
    formData.append("Unit_Price", Product_Unit_Price);
    formData.append("Discount", Product_Discount);
    formData.append("Offer_Price", Product_Offer_Price);
    formData.append("Product_Quote", Product_Quote);
    formData.append("Product_Detail_Description", Product_Description);
    formData.append("Status", "1");
    formData.append("Created_by", "xx");
    formData.append("Updated_by", "yy");

    formData.append("Image_one", file);
    formData.append("Image_two", file_two);
    formData.append("Image_three", file_three);
    formData.append("Image_four", file_four);
    formData.append("Image_five", file_five);
    formData.append("Image_six", file_six);

    fetch("http://127.0.0.1:8000/api/Products/", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", JSON.stringify(response)));
    // window.location.reload();
  };

  Sel_Product_Cat = () => {
    var Select_Category = this.refs.mySelect_Product_Cat.value;
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
          sel_pro_cat: data
        });
      });
  };

  Sel_Product_Sub_Cat = () => {
    var Select_Category = this.refs.mySelect_Product_Sub_Cat.value;
    alert(Select_Category);
    var url =
      "http://127.0.0.1:8000/api/Child_Category/?Sub_Category_Id=" +
      Select_Category;
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
          sel_pro_Sub_cat: data
        });
      });
  };

  render() {
    const { category, sel_pro_cat, sel_pro_Sub_cat } = this.state;
    return (
      <div className="Product_Master">
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
                  <center>Add New Product</center>
                </h1>
              </Col>
            </Row>

            {/* image upload start */}

            {/*  col md 6 Start*/}
            <Row className="pro_mar_top">
              <Col md={6}>
                <div className="img_card">
                  <Form>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Choose Product Main Image</Form.Label>
                      <Form.Control type="file" id="one" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Choose Product Second Image</Form.Label>
                      <Form.Control type="file" id="two" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Choose Product Third Image</Form.Label>
                      <Form.Control type="file" id="three" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Choose Product Fourth Image</Form.Label>
                      <Form.Control type="file" id="four" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Choose Product Fifth Image</Form.Label>
                      <Form.Control type="file" id="five" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Choose Product Sixth Image</Form.Label>
                      <Form.Control type="file" id="six" />
                    </Form.Group>
                  </Form>
                </div>
              </Col>
              {/*  col md 6 End*/}
              {/* image upload start */}

              {/* Product details upload start */}
              {/*  col md 6 Start*/}
              <Col md={6}>
                <div className="pro_card">
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                          as="select"
                          ref="mySelect_Product_Cat"
                          onChange={this.Sel_Product_Cat}
                        >
                          <option>Select Product Category</option>
                          {category.map(item => (
                            <option value={item.id}>{item.CategoryName}</option>
                          ))}
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Sub Category</Form.Label>
                        <Form.Control
                          as="select"
                          ref="mySelect_Product_Sub_Cat"
                          onChange={this.Sel_Product_Sub_Cat}
                        >
                          <option>Select Product Sub Category</option>
                          {sel_pro_cat.map(item => (
                            <option value={item.id}>
                              {item.Sub_Category_Name}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                          type="text"
                          ref="Product_Name"
                          placeholder="Enter Product Name"
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Product Id</Form.Label>
                        <Form.Control
                          type="text"
                          ref="Product_Id"
                          placeholder="Enter Product ID"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                          type="number"
                          ref="Product_Quantity"
                          placeholder="Enter Product Quantity"
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Unit Price (Rs)</Form.Label>
                        <Form.Control
                          type="number"
                          ref="Product_Unit_Price"
                          placeholder="Enter Unit Price"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Discount(%)</Form.Label>
                        <Form.Control
                          type="number"
                          ref="Product_Discount"
                          placeholder="Enter the Discount Percentage"
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Offer Price</Form.Label>
                        <Form.Control
                          type="number"
                          ref="Product_Offer_Price"
                          placeholder="Enter the Offer Price"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Product Quote</Form.Label>
                        <Form.Control
                          type="text"
                          ref="Product_Quote"
                          placeholder="Enter the Product Quote"
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Product Detail Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        ref="Product_Description"
                        rows="3"
                        placeholder="Enter the Product Detail Description"
                      />
                    </Form.Group>
                  </Form>
                </div>
              </Col>
              <Col md={{ span: 6, offset: 7 }}>
                <div id="btn_padding">
                  <Button
                    variant="success"
                    type="submit"
                    onClick={this.getPhoto}
                  >
                    <i className="far fa-save" />
                    Save
                  </Button>
                  <Button variant="primary" type="submit">
                    <i className="fas fa-sync" />
                    Reset
                  </Button>
                  <Button variant="danger" type="submit">
                    <i className="fas fa-times" />
                    Cancel
                  </Button>
                </div>
              </Col>
              {/*  col md 6 End*/}
              {/* Product detals upload End */}
            </Row>
          </Container>
        </Router>
      </div>
    );
  }
}

export default Product_Master;
