import React from "react";
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
  const categoryButtons = categories.map((category, index) => (
    <Button
      key={index}
      variant="default"
      onClick={() => filterProducts(products, dict[category])}
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
