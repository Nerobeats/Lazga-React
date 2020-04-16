import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

import HeaderTop from "./Headers/HeaderTop";
import HeaderBottom from "./Headers/HeaderBottom";
import HeaderMiddle from "./Headers/HeaderMiddle";
import Shop from "./Body/Shop";

import ItemDetail from "./Body/ItemDetail";

const App = () => {
  return (
    <Grid container>
      <Grid item xs={12} className="header-col">
        <HeaderTop />
      </Grid>

      <Grid item xs={12} className="header-col">
        <HeaderMiddle />
      </Grid>

      <Grid item xs={12} className="header-col">
        <HeaderBottom />
      </Grid>

      <Switch>
        <Route path="/shop/">
          <Shop />
        </Route>
        <Route path="/detail/:itemID">
          <ItemDetail />
        </Route>
        <Redirect exact from="/" to="/shop" />
      </Switch>
    </Grid>
  );
};

export default App;
