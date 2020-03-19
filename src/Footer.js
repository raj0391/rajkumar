import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class Footer extends Component {
  render() {
    return (
      <div classNameName="Footer">
        <Router>
          {/* footer starts */}
          <div className="col-md-12 col-sm-12 col-md-12 mt-2 mt-sm-2">
            <p className="foot_top">
              PLEASE NOTE THAT, THIS +91-9884636673 ( MON-FRI. 10 AM. TO 6 PM.)
              IS OUR OFFICIAL CUSTOMER CARE NUMBER FOR ANY QUERIES OR ISSUES
              RELATED TO SREETHAACREATION.COM . IF ANYONE CALLS YOU BESIDES THIS
              NUMBER AND TRYING TO BE PRETENDED AS A EXECUTIVE HE OR SHE IS FROM
              SREETHAACREATION.COM THEN IGNORE AND REPORT US.PLEASE DO NOT SHARE
              ANY PERSONAL INFORMATION OR CREDIT / DEBIT CARD NUMBER OR ANY
              OTP.OUR CALL EXECUTIVES NEVER DEMAND FOR OTP OR ANY CREDIT DEBIT
              CARD DETAILS.
            </p>
          </div>
          <hr />
          <div className="col-md-12 col-sm-12 col-md-12 mt-2 mt-sm-2">
            <p>
              <input
                type="email"
                placeholder="Enter your Email Id"
                className="email"
              />
              <span>
                <button className="but_hov">Subscribe</button>
              </span>
              <span className="float-right1">
                <i className="fa fa-facebook-official" aria-hidden="true" />
              </span>
              <span className="float-right1">
                <i className="fa fa-instagram" aria-hidden="true" />
              </span>
              <span className="float-right1">
                <i className="fa fa-pinterest-square" aria-hidden="true" />
              </span>
            </p>
          </div>
          <div className="col-md-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center">
            <span>Home</span>
            <span className="line_all">|</span>
            <span>Social Reviews</span>
            <span className="line_all">|</span>
            <span>Shipping</span>
            <span className="line_all">|</span>
            <span>Returns & cancellations </span>
            <span className="line_all">|</span>
            <span>International orders </span>
            <span className="line_all">|</span>
            <span>Privacy policy </span>
            <span className="line_all">|</span>
            <span>Term of use</span>
          </div>
          {/* footer top End */}
          {/* footer Bottom start */}
          <section id="footer_bot">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                  <p className="h6">
                    &copy All right Reversed.
                    <Link className="text-green ml-2" to="/" target="_blank">
                      Compunet connections
                    </Link>
                  </p>
                </div>
                <hr />
              </div>
            </div>
          </section>
          {/* footer Bottom End */}
          {/* footer Ends */}
        </Router>
      </div>
    );
  }
}

export default Footer;
