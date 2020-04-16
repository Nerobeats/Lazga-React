import React, { useState, useEffect, useRef } from "react";
import ListRow from "./ListRow";
import Loading from "../Loading";
import { connect } from "react-redux";

const ItemList = ({ products }) => {
  let i,
    j,
    temparray,
    cols = 5,
    rows = [];

  for (i = 0, j = products.length; i < j; i += cols) {
    temparray = products.slice(i, i + cols);
    rows.push(
      <div key={i} className="row mb-3 ">
        <ListRow rowProducts={temparray} />
      </div>
    );
  }
  return (
    <div className="row mb-3 home-list">
      <div className="container-flex ">{rows}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ItemList);
