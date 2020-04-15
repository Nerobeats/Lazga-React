import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";

import SizeButtons from "./SizeButtons";
import ColorButtons from "./ColorButtons";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import Paper from "@material-ui/core/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faRulerHorizontal,
} from "@fortawesome/free-solid-svg-icons";

export const AddToCartDetail = ({ item, addToCart, id }) => {
  const [heart, setHeart] = useState(false);
  const [size, setSize] = useState(1);
  const [color, setColor] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Paper
        style={{
          backgroundColor: "#e8e8ec",
          padding: "1rem 1rem 1rem 1rem",
        }}
        className="fixed-right"
      >
        <h4>{item.name}</h4>
        <h5 style={{ padding: "2rem 0rem 2rem 0rem" }}>{item.itemPrice} JOD</h5>
        <ButtonGroup aria-label="size">
          <SizeButtons
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            size={size}
            setSize={setSize}
            id={id}
          />
        </ButtonGroup>
        <br></br>
        <br></br>
        <ColorButtons
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          color={color}
          setColor={setColor}
          id={id}
          handleClose={handleClose}
        />{" "}
        <br></br>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          style={{
            padding: "0.5rem 1rem 0.5rem 1rem",
            borderRadius: "50rem",
          }}
          onClick={() => addToCart({ item, color, size })}
        >
          <FontAwesomeIcon icon={faCartPlus} size="1x" />
          <text style={{ padding: "0.25rem 1rem 0.25rem 1rem" }}>
            Add to cart
          </text>
        </Button>
        <br></br>
        <br></br>
        <div
          className="row"
          style={{
            borderTop: "solid thin #e8e8ec",
            borderBottom: "solid thin #e8e8ec",
          }}
        >
          {" "}
          <h6 style={{ margin: "0rem 0rem 0rem 0rem" }}>
            {" "}
            <FontAwesomeIcon
              icon={faRulerHorizontal}
              size="2x"
              text="hello"
              style={{
                verticalAlign: "middle",
                margin: "2rem 1rem 2rem 1rem",
              }}
            />
            View size guide
          </h6>
        </div>
        <br></br>
        <div style={{ margin: "0rem 0rem 0rem 0rem" }}>
          <h6>
            <img
              src="https://raw.githubusercontent.com/Nerobeats/Lazga-React/master/public/images/jordan-flag-icon.png"
              alt="flag-jo"
              style={{
                width: "2.4rem",
                height: "1.75rem",
                marginRight: "1rem",
              }}
            />
            Delivery
          </h6>
        </div>
        <div style={{ margin: "0rem 0rem 0rem 3.4rem" }}>
          <text style={{ opacity: "0.75", fontSize: "14px" }}>1 to 3 days</text>
        </div>
      </Paper>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(AddToCartDetail);
