import React from "react";
import CategoryButtons from "../Body/CategoryButtons";
import ItemList from "../Body/ItemList";
import SideNav from "../SideNav/SideNav";

const Shop = () => {
  return (
    <div className="container-flex">
      <div className="row ml-3 mr-5">
        <div className="col-lg-2 mb-2 mt-5 ">
          <SideNav />
        </div>
        <div className="col-lg-10 mb-5 mt-5">
          <CategoryButtons />
          <ItemList />
        </div>
      </div>
    </div>
  );
};

export default Shop;
