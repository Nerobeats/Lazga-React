import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";

import Button from "@material-ui/core/Button";
import { Modal } from "react-bootstrap";

import ColorButtons from "./ColorButtons";
import SizeButtons from "./SizeButtons";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const AddToCartModal = ({ item, addToCart, id }) => {
  const [size, setSize] = useState(1);
  const [color, setColor] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="container-fluid" style={{ padding: "0rem 0rem 0rem 0rem" }}>
      <div className="row">
        <div className="col col-6" style={{ padding: "1rem 1rem 1rem 2rem" }}>
          <div className="image">
            {" "}
            <img src={item.image_url} alt="shirt_img" />
          </div>
          <h2 style={{ padding: "1rem 1rem 0rem 1rem" }}>{item.name}</h2>
        </div>
        <div className="col col-6">
          <Modal.Body>
            {" "}
            <div>
              <h4 style={{ padding: "1rem 1rem 1rem 1rem" }}>
                Price: {item.itemPrice} JOD
              </h4>
              <div style={{ padding: "1rem 1rem 1rem 1rem" }}>
                {" "}
                <SizeButtons
                  anchorEl={anchorEl}
                  setAnchorEl={setAnchorEl}
                  size={size}
                  setSize={setSize}
                  id={id}
                />
              </div>
              <div className="ml-3 mb-5">
                <ColorButtons
                  anchorEl={anchorEl}
                  setAnchorEl={setAnchorEl}
                  color={color}
                  setColor={setColor}
                  id={id}
                  handleClose={handleClose}
                />
              </div>
              <div className="ml-3 mb-4 mt-5">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    padding: "0.5rem 1rem 0.5rem 1rem",
                    borderRadius: "50rem",
                  }}
                  onClick={() => addToCart({ item, color, size })}
                >
                  <AddShoppingCartIcon />
                  <text style={{ padding: "0.25rem 1rem 0.25rem 1rem" }}>
                    Add to cart
                  </text>
                </Button>
              </div>{" "}
            </div>
          </Modal.Body>
        </div>{" "}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(AddToCartModal);
