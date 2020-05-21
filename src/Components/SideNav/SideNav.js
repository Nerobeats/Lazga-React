import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setProducts } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const SideNav = ({ products, setProducts, types }) => {
  const [value, setValue] = useState("");

  let location = useLocation();

  const handleChangeFirst = (event) => {
    setValue(event.target.value);
  };

  const filterItems = () => {
    return products.filter((item) => {
      let itemType = location.pathname.substring(6, location.pathname.length);
      return (
        `${item.tags} ${item.description}`.toLowerCase().includes(value) &&
        (itemType == 5 || item.type == itemType)
      );
    });
  };

  useEffect(() => {
    setValue("");
  }, [location]);

  useEffect(() => {
    const filteredItems = filterItems();
    setProducts(filteredItems);
  }, [value]);

  return (
    <div className="sidenav" style={{ paddingTop: "1rem" }}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Themes
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl component="fieldset">
            {/* <FormLabel component="legend">Themes</FormLabel> */}
            <RadioGroup
              aria-label="themes"
              name="themes"
              value={value}
              onChange={handleChangeFirst}
            >
              <FormControlLabel value="" control={<Radio />} label="All" />
              <FormControlLabel
                value="anime"
                control={<Radio />}
                label="Anime"
              />

              <FormControlLabel
                value="arabic"
                control={<Radio />}
                label="Arabic"
              />
              <FormControlLabel
                value="calligraphy"
                control={<Radio />}
                label="Calligraphy"
              />
              <FormControlLabel
                value="movie"
                control={<Radio />}
                label="Movies"
              />
              <FormControlLabel
                value="random"
                control={<Radio />}
                label="Random"
              />
              <FormControlLabel
                value="super"
                control={<Radio />}
                label="Superheroes"
              />
              <FormControlLabel
                value="tv"
                control={<Radio />}
                label="TV Shows"
              />

              <FormControlLabel
                value="games"
                control={<Radio />}
                label="Video Games"
              />
            </RadioGroup>
          </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    filteredProducts: state.filteredProducts,
    types: state.types,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) => dispatch(setProducts(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
