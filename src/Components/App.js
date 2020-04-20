import React, { useEffect } from "react";
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

const App = ({ products, setProducts }) => {
  useEffect(() => {
    setProducts(products);
  }, [products, setProducts]);

  return (
    <Grid container>
      <Header />
      <Switch>
        <Route path="/shop/">
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
