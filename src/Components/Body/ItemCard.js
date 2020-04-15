import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";
import { Link } from "react-router-dom";
import { Card, Button, ButtonGroup, Modal } from "react-bootstrap";
import { Popover, Avatar } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import colorsOptions from "../../colors";

/**
 * This component is doing waaaaaaaaaaaaay too much
 */

const ItemCard = ({ item, addToCart }) => {
  const [heart, setHeart] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [size, setSize] = useState(1);
  const [color, setColor] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [printLocation, setPrintLocation] = useState(1);

  const handleSubmit = (item) => {
    if (item.type === "tshirt") {
      setModalShow(true);
    } else {
      addToCart(item);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorSwitch = (index) => {
    setColor(index + 1);
    setAnchorEl(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const sizes = ["S", "M", "L", "XL", "2XL"];
  const colors = ["Red", "Blue", "Green", "Yellow", "White", "Gray", "Black"];

  const sizeButtons = sizes.map((s, index) => (
    <Button
      variant={size == index + 1 ? "dark" : "outline-dark "}
      onClick={() => setSize(index + 1)}
      style={{
        width: "4rem",
        borderWidth: "2px",
      }}
    >
      <text style={{ fontSize: "1rem" }}>{s}</text>
    </Button>
  ));

  let colorArray = Object.keys(colorsOptions);
  const colorButtons = Object.keys(colorsOptions).map((key, index) => (
    <Button
      variant={color == index + 1 ? "dark" : "outline-dark "}
      onClick={() => handleColorSwitch(index)}
      data-toggle="tooltip"
      data-placement="top"
      title={key}
      style={{
        width: "25px",
        height: "25px",
        borderWidth: "1px",
        borderColor: "#e8e8ec",
        borderRadius: color === index + 1 ? "0.35rem" : "100rem",
        backgroundColor: colorsOptions[key],
        margin: "0.25rem 0.25rem 0.25rem 0.25rem",
      }}
    ></Button>
  ));

  return (
    <div>
      <Card
        style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
        className="img-wrapper"
      >
        {" "}
        <Link to={{ pathname: `/detail/${item.id}`, state: { item: item } }}>
          <div className="image">
            {" "}
            <img
              src={item.image_url}
              className="img img-responsive full-width"
              alt="shirt_img"
            />
          </div>
        </Link>
        <small className="favorite-item">
          <div
            className={heart ? "heart is-active" : "heart"}
            onClick={() => setHeart(!heart)}
          ></div>
        </small>
        <Card.Body style={{ padding: "0rem 2rem 1rem 2rem" }}>
          <Card.Footer
            style={{
              backgroundColor: "transparent",
              border: "hidden",
            }}
          >
            <div className="row name-row">
              <div className="col col-12 name-field" style={{ width: "10rem" }}>
                {item.name}
              </div>
            </div>
            <div className="bottom-left">$25.00</div>

            <Button
              variant="outline-light"
              className="circle-button-xsm bottom-right"
              onClick={() => handleSubmit(item)}
            >
              <FontAwesomeIcon
                icon={faCartPlus}
                size="1x"
                style={{ color: "#40354e" }}
              />
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>

      {/* own component */}
      <Modal
        show={modalShow}
        size="lg"
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <div
          className="container-fluid"
          style={{ padding: "0rem 0rem 0rem 0rem" }}
        >
          <div className="row">
            <div
              className="col col-6"
              style={{ padding: "1rem 1rem 1rem 2rem" }}
            >
              <div className="image">
                {" "}
                <img src={item.image_url} alt="shirt_img" />
              </div>
              <h2 style={{ padding: "1rem 1rem 0rem 1rem" }}>{item.name}</h2>
            </div>
            <div className="col col-6">
              <Modal.Body>
                <h4 style={{ padding: "1rem 1rem 1rem 1rem" }}>$25</h4>
                <h6 style={{ padding: "1rem 1rem 0rem 1rem" }}>Size</h6>
                <ButtonGroup
                  aria-label="size"
                  style={{ padding: "0rem 1rem 2rem 1rem" }}
                >
                  {sizeButtons}
                </ButtonGroup>
                <h6 style={{ padding: "1rem 1rem 0rem 1rem" }}>
                  Print Location
                </h6>
                <ButtonGroup
                  aria-label="location"
                  style={{ padding: "0rem 1rem 2rem 1rem" }}
                >
                  {" "}
                  <Button
                    variant={printLocation == 1 ? "dark" : "outline-dark "}
                    onClick={() => setPrintLocation(1)}
                    style={{ width: "4.5vw", borderWidth: "2px" }}
                  >
                    Front
                  </Button>
                  <Button
                    variant={printLocation == 2 ? "dark" : "outline-dark "}
                    onClick={() => setPrintLocation(2)}
                    style={{ width: "4.5vw", borderWidth: "2px" }}
                  >
                    Back
                  </Button>
                </ButtonGroup>
                <div className="ml-3 mb-5">
                  <Button
                    aria-describedby={id}
                    className="color-picker"
                    onClick={handleClick}
                  >
                    <div
                      class="color-circle"
                      style={{
                        backgroundColor: colorsOptions[colorArray[color - 1]],
                      }}
                    ></div>{" "}
                    <text className="color-text">{colorArray[color - 1]}</text>
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    {colorButtons}
                  </Popover>
                </div>{" "}
                <div className="ml-3 mb-4 mt-5">
                  <Button
                    variant="primary"
                    style={{
                      width: "8vw",
                      padding: "0.5rem 1rem 0.5rem 1rem",
                      borderRadius: "50rem",
                    }}
                    onClick={() =>
                      addToCart({ item, color, size, printLocation })
                    }
                  >
                    <FontAwesomeIcon icon={faCartPlus} size="1x" />
                    &nbsp; &nbsp;Add to cart
                  </Button>
                </div>
              </Modal.Body>
            </div>
          </div>{" "}
        </div>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(ItemCard);
