import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
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
import Home from "./Home/Home";
import NotFound from "./NotFound";

var pathToRegexp = require("path-to-regexp");

var re = pathToRegexp("/shop*");

const App = ({ products, setProducts }) => {
  const [loading, setLoading] = useState(true);
  let location = useLocation();

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
      {location.pathname === "/404" ? <></> : <Header />}
      <Grid style={{ marginLeft: "10%", marginRight: "10%", flex: "auto" }}>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
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
          <Redirect exact from="/" to="/home" />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Grid>
      <Grid item xs={12}>
        {location.pathname === "/404" ? <></> : <Footer />}
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
