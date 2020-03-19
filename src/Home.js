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
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
class Home extends Component {
  render() {
    const owl_home = {
      nav: true,
      navText: [
        "<div className='nav-btn prev-slide'></div>",
        "<div className='nav-btn next-slide'></div>"
      ],
      rewind: false,
      autoplay: false,
      slideBy: 1,
      dots: true,
      dotsEach: true,
      dotData: true
    };

    return (
      <div className="Home">
        <Router>
          <Header />
          {/* <!-- carousel start --> */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/saree_banner.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/saree_banner_1.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/saree_banner_2.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          {/* <!-- carousel End --> */}

          {/* <!-- NEW & NOTE WORTHY start --> */}
          <div className="carousel_bot">
            <h2>
              <span className="span">NEW & NOTE WORTHY</span>
            </h2>
          </div>

          {/* <!-- Owl carousel Start --> */}
          <OwlCarousel
            className="owl-theme"
            margin={20}
            items={4}
            options={owl_home}
            nav
          >
            <div className="item">
              <img src="./images/one.jpg" alt="" />
            </div>
            <div className="item">
              <img src="./images/two.jpg" alt="" />
            </div>
            <div className="item">
              <img src="./images/three.jpg" alt="" />
            </div>
            <div className="item">
              <img src="./images/four.jpg" alt="" />
            </div>
            <div className="item">
              <img src="./images/five.jpg" alt="" />
            </div>
            <div className="item">
              <img src="./images/six.jpg" alt="" />
            </div>
            <div className="item">
              <img src="./images/seven.jpg" alt="" />
            </div>
          </OwlCarousel>
          {/* <!-- Owl carousel End --> */}
          {/* <!-- NEW & NOTE WORTHY end --> */}

          {/* <!-- shop by category start --> */}

          <Container-fluid>
            <Row>
              <Col className="carousel_bot1">
                <h2>
                  <span className="span">SHOP BY CATEGORY</span>
                </h2>
              </Col>
            </Row>
            <Row>
              <Col md={3} className="image-grid-item">
                <div className="image-grid-cover container_img">
                  <img
                    src="./images/one.jpg"
                    alt="img"
                    width="100%"
                    height="519px"
                  />
                  <div class="centered">Centered</div>
                  {/* <Link to="" className="image-grid-clickbox" />
                  <Link to="" className="cover-wrapper">
                    Etkinlikler
                  </Link> */}
                </div>
              </Col>
              <Col md={3} className="image-grid-item">
                <div className="image-grid-cover container_img">
                  <img
                    src="./images/two.jpg"
                    alt="img"
                    width="100%"
                    height="519px"
                  />
                  <div class="centered">Centered</div>
                </div>
              </Col>
              <Col md={3} className="image-grid-item">
                <div className="image-grid-cover container_img">
                  <img
                    src="./images/three.jpg"
                    alt="img"
                    width="100%"
                    height="519px"
                  />
                  <div class="centered">Centered</div>
                </div>
              </Col>
              <Col md={3} className="image-grid-item">
                <div className="image-grid-cover container_img">
                  <img
                    src="./images/four.jpg"
                    alt="img"
                    width="100%"
                    height="519px"
                  />
                  <div class="centered">Centered</div>
                </div>
              </Col>
            </Row>

            {/* <!-- shop by category end --> */}
            {/* <!-- womens fashion start --> */}
            <Row />

            <div className="titile_bot ">
              <h2>
                <span className="span">WOMENS FASHION</span>
              </h2>
            </div>
            <Row>
              <Col md={12}>
                <Row>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <div className="image-grid-cover1 container_img">
                          <img
                            src="./images/three.jpg"
                            alt="img"
                            width="100%"
                            height="350px"
                          />
                          <div class="centered">Centered</div>
                        </div>
                        <div className="image-grid-cover1 container_img">
                          <img
                            src="./images/five.jpg"
                            alt="img"
                            width="100%"
                            height="350px"
                          />
                          <div class="centered">Centered</div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="image-grid-cover1 container_img">
                          <img
                            src="./images/four.jpg"
                            alt="img"
                            width="100%"
                            height="350px"
                          />
                          <div class="centered">Centered</div>
                        </div>
                        <div className="image-grid-cover1 container_img">
                          <img
                            src="./images/six.jpg"
                            alt="img"
                            width="100%"
                            height="350px"
                          />
                          <div class="centered">Centered</div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <div className="image-grid-cover2 container_img">
                      <img
                        src="./images/Surat_Sarees.jpg"
                        alt="img"
                        width="100%"
                        height="730px"
                      />
                      <div class="centered">Centered</div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* <!-- womens fashion end -->

          <!-- mens fashion start --> */}
            <div className="titile_bot">
              <h2>
                <span className="span">KIDS FASHION</span>
              </h2>
            </div>
            <Row>
              <Col md={12}>
                <Row>
                  <Col md={6}>
                    <div className="image-grid-cover1 container_img">
                      <img
                        src="./images/kids_1.jpg"
                        alt="img"
                        width="100%"
                        height="730px"
                      />
                      <div class="centered">Centered</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <div className="image-grid-cover1 container_img">
                          <img
                            src="./images/four.jpg"
                            alt="img"
                            width="100%"
                            height="350px"
                          />
                          <div class="centered">Centered</div>
                        </div>
                        <div className="image-grid-cover1 container_img">
                          <img
                            src="./images/five.jpg"
                            alt="img"
                            width="100%"
                            height="350px"
                          />
                          <div class="centered">Centered</div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="image-grid-cover1 container_img">
                          <img
                            src="./images/six.jpg"
                            alt="img"
                            width="100%"
                            height="350px"
                          />
                          <div class="centered">Centered</div>
                        </div>
                        <div className="image-grid-cover1 container_img">
                          <img
                            src="./images/one.jpg"
                            alt="img"
                            width="100%"
                            height="350px"
                          />
                          <div class="centered">Centered</div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* footer start */}
            <Footer />
            {/* footer End */}
          </Container-fluid>
        </Router>
      </div>
    );
  }
}

export default Home;
