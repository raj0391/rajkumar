import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

class Dashborad_Admin extends Component {
  render() {
    return (
      <div className="Dashborad_Admin">
        <h1>
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
                <Col md={4}>
                  <div className="card card-1 cat">
                    <Link to="/Category_Master">
                      <p>Category Master</p>
                      <center>
                        <i className="fa fa-pencil-square-o" />
                      </center>
                    </Link>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="card card-1 sub_cat">
                    <Link to="/Sub_Category_Master">
                      <p>Sub Category Master</p>
                      <center>
                        <i className="fa fa-pencil-square-o" />
                      </center>
                    </Link>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="card card-1 child_cat">
                    <Link to="/Child_Category_Master">
                      <p>Child Category</p>
                      <center>
                        <i className="fa fa-pencil-square-o" />
                      </center>
                    </Link>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="card card-1 pro_mast">
                    <Link to="/Product_Master">
                      <p>Product Master</p>
                      <center>
                        <i className="fa fa-pencil-square-o" />
                      </center>
                    </Link>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="card card-1 fil_pro_mas">
                    <Link to="/Filter_Product_Master">
                      <p>Filter Product Master</p>
                      <center>
                        <i className="fa fa-pencil-square-o" />
                      </center>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </Router>
        </h1>
      </div>
    );
  }
}

export default Dashborad_Admin;
