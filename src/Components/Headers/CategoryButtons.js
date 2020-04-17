import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { filterProducts, setProducts } from "../../redux/actions";

// Temporary mock categories until the categories are implemented in the back-end
const categories = [
  "All Items",
  "T-Shirts",
  "Mugs",
  "Stickers",
  "Hoodies",
  "Posters",
  "Pins",
  "Pop Sockets",
];

const dict = {
  "All Items": "all",
  "T-Shirts": "tshirt",
  Mugs: "mug",
  Stickers: "sticker",
  Hoodies: "hoodie",
  Posters: "poster",
  Pins: "pin",
  "Pop Sockets": "pop socket",
};

const CategoryButtons = ({ products, filterProducts }) => {
  const [categoryType, setCategoryType] = useState("All Items");

  const handleClick = (products, category) => {
    setCategoryType(category);
    filterProducts(products, dict[category]);
  };

  const categoryButtons = categories.map((category, index) => (
    <Button
      key={index}
      variant="contained"
      disabled={categoryType === category ? true : false}
      onClick={() => handleClick(products, category)}
      style={{
        margin: "1rem 1rem 1rem 1rem",
      }}
    >
      {category}
    </Button>
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
