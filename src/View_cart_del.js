import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
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

class View_cart extends React.Component {
  componentDidMount() {
    Promise.all([fetch("http://127.0.0.1:8000/api/View_cart/")])
      .then(([res1]) => Promise.all([res1.json()]))
      .then(([data1]) =>
        this.setState({
          isLoaded: true,

          ViewCart: data1
        })
      );
    console.log(this.state);
    // .then(data => this.setState({ hits: data.hits } ));
  }
  constructor(props) {
    super(props);

    this.state = {
      qty: 1,
      ViewCart: [],

      show: true,

      isLoaded: false
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }
  add() {
    this.setState({
      qty: this.state.qty + 1
    });
  }

  subtract() {
    this.setState({
      qty: this.state.qty - 1
    });
  }

  // componentDidUpdate() {
  //   Promise.all([fetch("http://127.0.0.1:8000/api/View_cart/")])
  //     .then(([res1]) => Promise.all([res1.json()]))
  //     .then(([data1]) =>
  //       this.setState({
  //         isLoaded: true,

  //         ViewCart: data1
  //       })
  //     );
  //   console.log(this.state);
  //   // .then(data => this.setState({ hits: data.hits }));
  // }

  // for selecting particular user view cart start //

  // componentDidMount() {
  //   Promise.all([
  //     fetch(
  //       "http://127.0.0.1:8000/api/sel/get/Products/?q=" +
  //         this.props.match.params.Sub_Category_Name
  //     )
  //   ])
  //     .then(([res1]) => Promise.all([res1.json()]))
  //     .then(([data1]) =>
  //       this.setState({
  //         isLoaded: true,

  //         sel_category_menu: data1
  //       })
  //     );
  //   console.log(this.state);
  //   // .then(data => this.setState({ hits: data.hits }));
  // }
  // componentDidUpdate() {
  //   Promise.all([
  //     fetch(
  //       "http://127.0.0.1:8000/api/sel/get/Products/?q=" +
  //         this.props.match.params.Sub_Category_Name
  //     )
  //   ])
  //     .then(([res1]) => Promise.all([res1.json()]))
  //     .then(([data1]) =>
  //       this.setState({
  //         isLoaded: true,

  //         sel_category_menu: data1
  //       })
  //     );
  //   console.log(this.state);
  //   // .then(data => this.setState({ hits: data.hits }));
  // }

  // for selecting particular user view cart End //

  render() {
    const { ViewCart } = this.state;

    return (
      <div classNameName="Product">
        <Router>
          {/* header starts */}
          <Header />
          {/* header Ends */}

          {/* Viewcart content start */}

          <Container>
            <Row>
              <Col md={8}>
                <div className="card">
                  <Row>
                    <Col md={12}>
                      <h5 className="my_cart">My Cart</h5>
                      <hr />
                    </Col>
                  </Row>
                  {ViewCart.map(pro => {
                    return (
                      <Row className="cart_top">
                        <Col md={3}>
                          <img className="mar_top_image" src={pro.Image_one} />
                        </Col>
                        <Col md={5}>
                          <Row className="mar_top_name">
                            <center>
                              <h5>{pro.Product_Name}</h5>
                            </center>
                          </Row>
                          <Row className="mar_top_name">
                            <h5>{pro.Unit_Price}</h5>
                          </Row>
                          <Row className="mar_top_name">
                            <Col md={2}>
                              <Button
                                class="outline1"
                                onClick={this.subtract}
                                disabled={this.state.qty < 1}
                              >
                                -
                              </Button>
                            </Col>
                            <Col md={3}>
                              <Form.Control
                                type="text"
                                ref="myInput"
                                placeholder="1"
                                value={this.state.qty}
                              />
                            </Col>

                            <Col md={1}>
                              <Button class="outline1" onClick={this.add}>
                                +
                              </Button>
                            </Col>
                          </Row>
                          <Row className="mar_top_name">
                            <Col>
                              <Button
                                variant="outline-primary"
                                className="add_to_cart"
                              >
                                SAVE FOR LATER
                              </Button>
                              <Button variant="outline-primary">REMOVE</Button>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={4}>
                          <Row>
                            <p>Delivery in 3-4 days: ₹40</p>
                            <p>10 Days Replacement Policy</p>
                          </Row>
                          <Row>{/* <h6>10 Days Replacement Policy</h6> */}</Row>
                        </Col>
                      </Row>
                    );
                  })}
                </div>
              </Col>

              <Col md={4}>
                <div className="card">
                  <p className="text-center">Price Details</p>
                  <p>
                    <span className="price_align">Price (1 items)</span>
                    <span className="price_align_price">213</span>
                  </p>
                  <p>
                    <span className="price_align">Delivery Charges</span>
                    <span className="price_align_price">40</span>
                  </p>
                  <hr />
                  <p>
                    <span className="price_align">Amount Payable</span>
                    <span className="price_align_price">253</span>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>

          {/* Viewcart content start */}

          <Footer />
          {/* footer End */}
        </Router>
      </div>
    );
  }
}

export default View_cart;
