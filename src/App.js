import React, { Component, Fragment } from "react";
import "./App.css";
//  User side path location Starts//

import Home from "../src/Home";
import Product from "../src/Product";
import Single from "../src/single";
import Adm_ind from "../src/admin/Index";
import View_cart from "../src/View_cart";
//  User side path location Ends//

//  Admin side path location starts//
import Dashborad_Admin from "../src/admin/Dashboard";
import Category_Master from "../src/admin/Category";
import Sub_Category_Master from "../src/admin/Sub_category";
import Child_Category_Master from "../src/admin/Child_category";
import Product_Master from "../src/admin/Product_Master";
import Product_Master_Edit from "../src/admin/Product_Master_Edit";
import Filter_Product_Master from "../src/admin/Filter_Product_Master";
import Register_Login from "../src/admin/Register_Login";
//  Admin side path location Ends//

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
class App extends Component {
  render() {
    console.log(process.env.REACT_APP_URL);
    return (
      <div className="App">
        {/* header starts */}
        {/* <Header /> */}
        {/* header Ends */}
        <Router basename={process.env.REACT_APP_URL || ""}>
          <Switch>
            {/* User side path location*/}
            <Route exact path="/" component={Home} />
            <Route exact path="/Product" component={Product} />
            <Route exact path="/Single" component={Single} />
            <Route exact path="/View_cart" component={View_cart} />
            {/* Admin side path location*/}
            <Route exact path="/Admin" component={Adm_ind} />
            <Route exact path="/Dashboard_Admin" component={Dashborad_Admin} />
            <Route exact path="/Register_Login" component={Register_Login} />
            <Route exact path="/Category_Master" component={Category_Master} />
            <Route
              exact
              path="/Sub_Category_Master"
              component={Sub_Category_Master}
            />
            <Route
              exact
              path="/Child_Category_Master"
              component={Child_Category_Master}
            />
            <Route exact path="/Product_Master" component={Product_Master} />
            <Route
              exact
              path="/Filter_Product_Master"
              component={Filter_Product_Master}
            />
            <Route
              exact
              path="/Product_Master_Edit/:id"
              component={Product_Master_Edit}
            />
            <Route exact path="/Single/:id" component={Single} />
            <Route
              exact
              path="/Product/:Sub_Category_Name"
              component={Product}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
