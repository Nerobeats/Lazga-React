import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart, postOrder } from "../../redux/actions";
import { Modal } from "react-bootstrap";
import ColorButtons from "./ColorButtons";
import SizeButtons from "./SizeButtons";
import QuantityInput from "./QuantityInput";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

const AddToCartModal = ({
  item,
  id,
  setModalShow,
  setOpenSnackbar,
  postOrder,
}) => {
  const [size, setSize] = useState(1);
  const [color, setColor] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [magic, setMagic] = useState(false);

  const addItem = (item, color, size, quantity) => {
    postOrder(item, quantity, color, size);
    setModalShow(false);
    setOpenSnackbar(true);
  };

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
              {item.type === 6 ? (
                <div style={{ padding: "0rem 1rem 0rem 1rem" }}>
                  {" "}
                  <SizeButtons
                    anchorEl={anchorEl}
                    setAnchorEl={setAnchorEl}
                    size={size}
                    setSize={setSize}
                    id={id}
                  />
                </div>
              ) : (
                <></>
              )}
              <div style={{ padding: "0rem 1rem 2rem 1rem" }}>
                <QuantityInput quantity={quantity} setQuantity={setQuantity} />
              </div>
              {item.type === 6 ? (
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
              ) : (
                <></>
              )}
              {item.type === 7 ? (
                <div style={{ padding: "0rem 1rem 2rem 1rem" }}>
                  <h6 style={{ padding: "1rem 1rem 0rem 1rem" }}>
                    Magic Mug:{" "}
                    <Checkbox
                      checked={magic}
                      color="primary"
                      onChange={(event) => setMagic(event.target.checked)}
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  </h6>
                </div>
              ) : (
                <></>
              )}
              <div className="ml-3 mb-3 mt-3">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    padding: "0.5rem 1rem 0.5rem 1rem",
                    borderRadius: "50rem",
                  }}
                  onClick={() =>
                    addItem({ item, color, size, magic, quantity })
                  }
                >
                  <AddShoppingCartIcon />
                  <text style={{ padding: "0rem 1rem 0rem 1rem" }}>
                    Add to cart
                  </text>
                </Button>
              </div>{" "}
            </div>
          </Modal.Body>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    postOrder: (order) => dispatch(postOrder(order)),
  };
};

export default connect(null, mapDispatchToProps)(AddToCartModal);
