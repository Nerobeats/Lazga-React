import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setProducts } from "../redux/actions";
import Grid from "@material-ui/core/Grid";
import Header from "./Headers/Header";
import Footer from "./Footer/Footer";
import Shop from "./Body/Shop";
import ItemDetail from "./Body/ItemDetail";
import CartList from "./Cart/CartList";
import Profile from "./Profile/Profile";
import Favorites from "./Profile/Favorites";
import LoginPage from "./Authentication/LoginPage";
import SignupPage from "./Authentication/SignupPage";
import Loading from "./Loading";

var pathToRegexp = require("path-to-regexp");

var re = pathToRegexp("/shop*");

const App = ({ products, setProducts }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(products);
  }, [products, setProducts]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <Grid container>
      <Header />
      <Grid style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Switch>
          <Route path={re}>
            <Shop />
          </Route>
          <Route path="/detail/:itemID">
            <ItemDetail />
          </Route>
          <Route path="/cart">
            <CartList />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Redirect exact from="/" to="/shop" />
        </Switch>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) => dispatch(setProducts(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
