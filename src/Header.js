import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
// import Header from "../src/Header";
// import Route from "react-router-dom/Route";
// import Product from "../src/Product";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      selected_menu_item: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    Promise.all([fetch("http://127.0.0.1:8000/api/Sub_Category/")])
      .then(([res1]) => Promise.all([res1.json()]))
      .then(([data1, data2]) =>
        this.setState({
          isLoaded: true,
          items: data1
        })
      );
  }

  render() {
    const { isLoaded, items, category, selected_menu_item } = this.state;
    // const { hits } = this.state;
    if (!isLoaded) {
      return <div>Not Loaded</div>;
    } else {
      return (
        <div classNameName="Header">
          <Router>
            <div className="top_menu">
              <p>
                <span className="log-txt">LOGIN</span> / <span>JOIN </span> /
                <span>
                  <input type="search" placeholder="Search" />
                </span>
                /<span> HELPLINE</span>/<span> ENQUIRY</span>
                <span> / BECOME A RESELLER</span>
                <span className="float-right1">
                  0 /Rs 0.00{" "}
                  <i className="fa fa-shopping-cart" aria-hidden="true" />
                </span>
                <span className="float-right1">
                  <i className="fa fa-pinterest-square" aria-hidden="true" />
                </span>
                <span className="float-right1">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </span>
                <span className="float-right1">
                  <i className="fa fa-facebook-official" aria-hidden="true" />
                </span>
              </p>
            </div>
            <div className="text-center">
              <Link className="navbar-brand" to="/sreethaa_2/public/">
                <img src="images/logo2.png" width="275px;" alt="" />
              </Link>
            </div>
            {/* navigation menu starts */}
            <Navbar bg="light" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <NavDropdown title="Sarees" id="basic-nav-dropdown">
                    <Container>
                      <Row>
                        <Col xs={12} sm={4} md={4} lg={4}>
                          {items.map(item => (
                            <NavDropdown.Item>
                              <Link
                                to={{
                                  pathname: "/Product/" + item.id
                                }}

                                // onClick={() => this.Select_menu_cat(item.id)}
                              >
                                {item.Sub_Category_Name}
                              </Link>
                            </NavDropdown.Item>
                          ))}
                        </Col>

                        <Col xs={12} sm={4} md={4} lg={4}>
                          <NavDropdown.Item>
                            <Link to="/Product">New Arrival</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <Link to="/Product">Bagru Sarees</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <Link to="/Product">Banaras Silk sarees</Link>
                          </NavDropdown.Item>
                          {/* <NavDropdown.Divider /> */}
                          <NavDropdown.Item>
                            <Link to="/Product">Separated link</Link>
                          </NavDropdown.Item>
                        </Col>

                        <Col xs={12} sm={4} md={4} lg={4}>
                          <img
                            className="d-block w-100"
                            src="./images/one.jpg"
                            alt="First slide"
                          />
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown>

                  <NavDropdown title="Salwar sarees" id="basic-nav-dropdown">
                    <Container>
                      <Row>
                        <Col xs={12} sm={4} md={4} lg={4}>
                          <NavDropdown.Item>
                            <Link to="/Product">New Arrival</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <Link to="/Product">Bagru Sarees</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <Link to="/Product">Banaras Silk sarees</Link>
                          </NavDropdown.Item>
                          {/* <NavDropdown.Divider /> */}
                          <NavDropdown.Item>
                            <Link to="/Product">Separated link</Link>
                          </NavDropdown.Item>
                        </Col>

                        <Col xs={12} sm={4} md={4} lg={4}>
                          <NavDropdown.Item>
                            <Link to="/Product">New Arrival</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <Link to="/Product">Bagru Sarees</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <Link to="/Product">Banaras Silk sarees</Link>
                          </NavDropdown.Item>
                          {/* <NavDropdown.Divider /> */}
                          <NavDropdown.Item>
                            <Link to="/Product">Separated link</Link>
                          </NavDropdown.Item>
                        </Col>

                        <Col xs={12} sm={4} md={4} lg={4}>
                          <img
                            className="d-block w-100"
                            src="./images/one.jpg"
                            alt="First slide"
                          />
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown>
                  <NavDropdown title="Kids Wear" id="basic-nav-dropdown">
                    <Container>
                      <Row>
                        <Col xs={12} sm={4} md={4} lg={4}>
                          <NavDropdown.Item>
                            <Link to="/Product">New Arrival</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <Link to="/Product">Bagru Sarees</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <Link to="/Product">Banaras Silk sarees</Link>
                          </NavDropdown.Item>
                          {/* <NavDropdown.Divider /> */}
                          <NavDropdown.Item>
                            <Link to="/Product">Separated link</Link>
                          </NavDropdown.Item>
                        </Col>

                        <Col xs={12} sm={4} md={4} lg={4}>
                          <NavDropdown.Item>
                            <Link to="/Product">New Arrival</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <Link to="/Product">Bagru Sarees</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <Link to="/Product">Banaras Silk sarees</Link>
                          </NavDropdown.Item>
                          {/* <NavDropdown.Divider /> */}
                          <NavDropdown.Item>
                            <Link to="/Product">Separated link</Link>
                          </NavDropdown.Item>
                        </Col>

                        <Col xs={12} sm={4} md={4} lg={4}>
                          <img
                            className="d-block w-100"
                            src="./images/one.jpg"
                            alt="First slide"
                          />
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            {/* 
        <!-- navigation menu ends --> */}
          </Router>
        </div>
      );
    }
  }
}

export default Header;
