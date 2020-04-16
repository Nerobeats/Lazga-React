import React from "react";
import ListRow from "./ListRow";
import ItemCard from "./ItemCard";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { connect } from "react-redux";

const ItemList = ({ products }) => {
  let i,
    j,
    temparray,
    cols = products.length,
    rows = [];

  for (i = 0, j = products.length; i < j; i += cols) {
    temparray = products.slice(i, i + cols);
    rows.push(
      <div key={i} className="row mb-3 ">
        <ListRow rowProducts={temparray} />
      </div>
    );
  }

  return <Grid style={{}}>{rows}</Grid>;
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ItemList);
