import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../src/Header";
import Footer from "../src/Footer";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Product: [],
      sel_category_menu: [],
      selected_menu_item: [],

      isLoaded: false
    };
  }

  componentDidMount() {
    Promise.all([
      fetch(
        "http://127.0.0.1:8000/api/sel/get/Products/?q=" +
          this.props.match.params.Sub_Category_Name
      )
    ])
      .then(([res1]) => Promise.all([res1.json()]))
      .then(([data1]) =>
        this.setState({
          isLoaded: true,

          sel_category_menu: data1
        })
      );
    console.log(this.state);
    // .then(data => this.setState({ hits: data.hits }));
  }
  componentDidUpdate() {
    Promise.all([
      fetch(
        "http://127.0.0.1:8000/api/sel/get/Products/?q=" +
          this.props.match.params.Sub_Category_Name
      )
    ])
      .then(([res1]) => Promise.all([res1.json()]))
      .then(([data1]) =>
        this.setState({
          isLoaded: true,

          sel_category_menu: data1
        })
      );
    console.log(this.state);
    // .then(data => this.setState({ hits: data.hits }));
  }
  // Single = value => {
  //   var Selected_id = value;
  //   alert(Selected_id);
  //   var url = "http://127.0.0.1:8000/api/get/Products/" + Selected_id + "/";
  //   alert(url);
  //   fetch(url, {
  //     method: "GET",
  //     dataType: "JSON",
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8"
  //     }
  //   })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       this.setState({
  //         isLoaded: true,
  //         Edit_Selected: data
  //       });
  //     });
  // };

  render() {
    const { Product, sel_category_menu, selected_menu_item } = this.state;
    return (
      <div classNameName="Product">
        <Router>
          {/* header starts */}
          <Header />
          {/* header Ends */}

          {/* body content start */}
          <center>
            <h3 className="pro_lis">Products List</h3>
          </center>
          <Container-fluid>
            <Row>
              {sel_category_menu.map(pro => {
                return (
                  <Col md={3}>
                    <div className="product-grid2">
                      <div className="product-image2">
                        <Link
                          className="dropdown-item"
                          to={{ pathname: "/Single/" + pro.id }}
                        >
                          <img className="pic-1" src={pro.Image_one} alt="" />
                          <img className="pic-2" src={pro.Image_one} alt="" />
                        </Link>
                      </div>
                      <div className="product-content">
                        <h3 className="title">
                          <Link href="#">{pro.Product_Name}</Link>
                        </h3>
                        <span className="price">
                          RS. {pro.Unit_Price}+Shipping
                        </span>
                        <p>
                          <span>
                            <Button variant="primary" className="add_cart">
                              ADD TO CART
                            </Button>
                          </span>
                          <span>
                            <Button variant="primary">BUY NOW</Button>
                          </span>
                        </p>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container-fluid>

          {/* footer start */}
          <Footer />
          {/* footer End */}
        </Router>
      </div>
    );
  }
}

export default Product;
