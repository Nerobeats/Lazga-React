import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HeaderTop from "./Headers/HeaderTop";
import HeaderBottom from "./Headers/HeaderBottom";
import HeaderMiddle from "./Headers/HeaderMiddle";
import Shop from "./Body/Shop";

import ItemDetail from "./Body/ItemDetail";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col col-12 header-col">
          <HeaderTop />
        </div>
      </div>
      <div className="col col-12 header-col">
        <HeaderMiddle />
      </div>
      <div className="col col-12 header-col">
        <HeaderBottom />
      </div>
      <Switch>
        <Route path="/shop/">
          <Shop />
        </Route>
        <Route path="/detail/:itemID">
          <ItemDetail />
        </Route>
        <Redirect exact from="/" to="/shop" />
      </Switch>
    </div>
  );
};

export default App;
