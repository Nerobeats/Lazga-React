import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { setProducts } from "../../redux/actions";

const SearchBar = ({ products, setProducts }) => {
  const [query, setQuery] = useState("");

  const filterItems = () => {
    return products.filter((item) => {
      return `${item.tags} ${item.description}`.toLowerCase().includes(query);
    });
  };

  useEffect(() => {
    const filteredItems = filterItems();
    setProducts(filteredItems);
  }, [query]);

  return (
    <FormControl
      variant="outlined"
      fullWidth
      style={{ padding: "0rem 0rem 1rem 0rem" }}
    >
      <OutlinedInput
        onChange={(event) => setQuery(event.target.value)}
        className="search-bar"
        variant="outlined"
        id="search-bar"
        type="text"
        endAdornment={
          <InputAdornment position="end">
            <FontAwesomeIcon icon={faSearch} size="2x" swapOpacity />
          </InputAdornment>
        }
      />
    </FormControl>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
