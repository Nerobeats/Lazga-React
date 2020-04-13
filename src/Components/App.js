import React from "react";

import HeaderTop from "./Headers/HeaderTop";
import HeaderBottom from "./Headers/HeaderBottom";
import HeaderMiddle from "./Headers/HeaderMiddle";

import CategoryButtons from "./Body/CategoryButtons";
import Home from "./Body/Home";
import ItemDetail from "./Body/ItemDetail";

import SideNav from "./SideNav/SideNav";

const App = () => {
  return (
    <div className="container-fluid ">
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

      {/* <div className="container-flex">
        <div className="row ml-3 mr-5">
          <div className="col-lg-2 mb-2 mt-5 ">
            <SideNav />
          </div>

          <div className="col-lg-10 mb-5 mt-5">
            <CategoryButtons />
            <Home />
          </div>
        </div>
      </div> */}

      <div className="container-flex">
        <ItemDetail />
      </div>
    </div>
  );
};

export default App;