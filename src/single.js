import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import Header from "../src/Header";
import Footer from "../src/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { createHashHistory } from "history";

class Single extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Get_id: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    // this.fetchData();
    fetch(
      "http://127.0.0.1:8000/api/get/Products/" +
        this.props.match.params.id +
        "/"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          Get_id: data
        });
      });

    console.log(this.state);
    // .then(data => this.setState({ hits: data.hits }));
  }

  Select_Product = id => {
    var id = id;
    var Product_Name = this.refs.myInput_Product_Name.value;
    var Product_Id = this.refs.myInput_Product_Id.value;
    var detail_desc = this.refs.myInput_detail_desc.value;
    var Unit_Price = this.refs.myInput_Unit_Price.value;
    var Offer_Price = this.refs.myInput_Offer_Price.value;
    var Product_Quote = this.refs.myInput_Product_Quote.value;
    var Image_one = this.refs.myInput_Image_one.value;
    var SubCategory = this.refs.myInput_SubCategory.value;

    const url = "http://127.0.0.1:8000/api/View_cart/";
    var data = {
      Product_Name: Product_Name,
      Product_Id: Product_Id,
      Product_Detail_Description: detail_desc,
      Unit_Price: Unit_Price,
      Offer_Price: Offer_Price,
      Product_Quote: Product_Quote,
      Image_one: Image_one
    };

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
    // browserHistory.push("/todo");
    // window.location.reload();
    this.props.history.push("/Product/" + SubCategory);
  };

  render() {
    const history = createHashHistory();
    const owl_single = {
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
    const { Get_id } = this.state;
    return (
      <div className="Single">
        <Router>
          {/* Header Starts  */}
          <Header />
          {/* Header ends */}
          <Container className="card">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                {Get_id.Category_Id ? Get_id.Category_Id.CategoryName : ""}
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                {Get_id.Sub_Category_Id
                  ? Get_id.Sub_Category_Id.Sub_Category_Name
                  : ""}
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{Get_id.Product_Name}</Breadcrumb.Item>
            </Breadcrumb>

            <Row className="wrapper">
              {/* Single page page image End*/}
              <Col className="preview" md={6}>
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img className="pop" src={Get_id.Image_one} alt="" />
                  </div>
                  <div className="tab-pane" id="pic-2">
                    <img className="pop" src={Get_id.Image_two} alt="" />
                  </div>
                  <div className="tab-pane" id="pic-3">
                    <img className="pop" src={Get_id.Image_three} alt="" />
                  </div>
                  <div className="tab-pane" id="pic-4">
                    <img className="pop" src={Get_id.Image_four} alt="" />
                  </div>
                  <div className="tab-pane" id="pic-5">
                    <img className="pop" src={Get_id.Image_five} alt="" />
                  </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active">
                    <a data-target="#pic-1" href="" data-toggle="tab">
                      <img src={Get_id.Image_one} alt="" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-2" href="" data-toggle="tab">
                      <img src={Get_id.Image_two} alt="" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" href="" data-toggle="tab">
                      <img src={Get_id.Image_three} alt="" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-4" href="" data-toggle="tab">
                      <img src={Get_id.Image_four} alt="" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-5" href="" data-toggle="tab">
                      <img src={Get_id.Image_five} alt="" />
                    </a>
                  </li>
                </ul>
              </Col>
              {/* Single page page image End*/}

              {/* input hidden  start*/}
              <Form.Control
                type="hidden"
                ref="myInput_Product_Name"
                value={Get_id.Product_Name}
              />
              <Form.Control
                type="hidden"
                ref="myInput_SubCategory"
                value={Get_id.Category_Id ? Get_id.Sub_Category_Id.id : ""}
              />
              <Form.Control
                type="hidden"
                ref="myInput_Product_Id"
                value={Get_id.Product_Id}
              />
              <Form.Control
                type="hidden"
                ref="myInput_detail_desc"
                value={Get_id.Product_Detail_Description}
              />
              <Form.Control
                type="hidden"
                ref="myInput_Unit_Price"
                value={Get_id.Unit_Price}
              />
              <Form.Control
                type="hidden"
                ref="myInput_Offer_Price"
                value={Get_id.Offer_Price}
              />
              <Form.Control
                type="hidden"
                ref="myInput_Product_Quote"
                value={Get_id.Product_Quote}
              />

              <Form.Control
                type="hidden"
                ref="myInput_Image_one"
                value={Get_id.Image_one}
              />
              {/* input hidden  End*/}

              {/* product page details start*/}
              <Col md={6}>
                <h3>
                  <b>{Get_id.Product_Name}</b>
                </h3>
                <h3>Rs. {Get_id.Offer_Price} + shipping</h3>
                <p>{Get_id.Product_Quote}</p>
                <p>{Get_id.Product_Id}</p>
                <p>{Get_id.Product_Detail_Description}</p>
                <hr />
                <div className="product-add-to-cart">
                  <div className="add">
                    <button
                      type="submit"
                      className="add-to-cart ajax-spin-cart"
                      id="AddToCart"
                    >
                      <i className="ion-bag" />
                      <span
                        className="list-cart-title cart-title"
                        id="AddToCartText"
                        onClick={() => this.Select_Product(Get_id.id)}
                      >
                        Add to cart
                      </span>
                    </button>

                    <div className="single-product-wishlist">
                      <button
                        type="submit"
                        className="add-to-cart ajax-spin-cart"
                        id="AddToCart"
                      >
                        <i className="ion-bag" />
                        <span
                          className="list-cart-title cart-title"
                          id="AddToCartText"
                        >
                          Buy Now
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="card col-md-12 col-xs-12">
                  <h3>Customer Reviews</h3>
                  <p>
                    <span className="float-left">No Reiews Yet</span>
                    <sapn className="float-right">Write a Review</sapn>
                  </p>
                </div>
              </Col>
              {/* product page details End*/}
            </Row>
            <Row>
              <Col>
                <div className="single_text">
                  <h2>
                    <span className="span">Recommened For You</span>
                  </h2>
                </div>
                {/* <!-- Owl carousel Start --> */}
                <OwlCarousel
                  className="owl-theme"
                  margin={20}
                  items={4}
                  options={owl_single}
                  nav
                >
                  <div className="item single">
                    <img src="./images/one.jpg" alt="" />
                  </div>
                  <div className="item single">
                    <img src="./images/two.jpg" alt="" />
                  </div>
                  <div className="item single">
                    <img src="./images/three.jpg" alt="" />
                  </div>
                  <div className="item single">
                    <img src="./images/four.jpg" alt="" />
                  </div>
                  <div className="item single">
                    <img src="./images/five.jpg" alt="" />
                  </div>
                  <div className="item single">
                    <img src="./images/six.jpg" alt="" />
                  </div>
                  <div className="item single">
                    <img src="./images/seven.jpg" alt="" />
                  </div>
                </OwlCarousel>
                {/* <!-- Owl carousel End --> */}
              </Col>
            </Row>
          </Container>
          {/* footer start */}
          <Footer />
          {/* footer End */}
        </Router>
      </div>
    );
  }
}

export default Single;
