import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Adm_ind extends Component {
  render() {
    return (
      <div className="Adm_ind">
        <h1>
          <Router>
            {/* <Link to="/admin">Adm_dfind</Link> */}
            <div id="LoginForm">
              <div className="container">
                <h1 className="form-heading">login Form</h1>
                <div className="login-form">
                  <div className="main-div">
                    <div className="panel">
                      <center>
                        <img src="./images/logo2.png" width="275px;" alt="" />
                      </center>
                    </div>
                    <form id="Login">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail"
                          placeholder="Email Address"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <div className="forgot">
                        <a href="reset.html">Forgot password?</a>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </form>
                  </div>
                  <p className="botto-text"> Designed by Sunil Rajput</p>
                </div>
              </div>
            </div>
          </Router>
        </h1>
      </div>
    );
  }
}

export default Adm_ind;
