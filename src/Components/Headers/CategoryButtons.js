import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { filterProducts, setProducts } from "../../redux/actions";

const CategoryButtons = ({ products, filterProducts, types, isHome }) => {
  const [categoryType, setCategoryType] = useState(5);

  const handleClick = (products, category) => {
    setCategoryType(category);
    filterProducts(products, category);
  };

  let categoryButtons = types.map((type, index) => (
    <Link to={`/shop/${type.id}`}>
      <Button
        key={index}
        variant="contained"
        disabled={categoryType === type.id && !isHome ? true : false}
        onClick={() => handleClick(products, type.id)}
        style={{
          margin: "1rem 1rem 1rem 1rem",
        }}
      >
        <Typography style={{ fontWeight: "1000" }}>{type.type}</Typography>
      </Button>
    </Link>
  ));
  return (
    <div className="row mb-3  category-buttons">
      <div className="scrollmenu">{categoryButtons}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    types: state.types,
    filteredProducts: state.filteredProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterProducts: (products, type) =>
      dispatch(filterProducts(products, type)),
    setProducts: (products) => dispatch(setProducts(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryButtons);
