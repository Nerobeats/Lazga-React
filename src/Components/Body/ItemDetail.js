import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faRulerHorizontal,
} from "@fortawesome/free-solid-svg-icons";

const ItemDetail = () => {
  const [scroll, setScroll] = useState(0);
  const [size, setSize] = useState(null);
  const [printLocation, setPrintLocation] = useState(1);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 185;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  const item = useLocation().state.item;
  const sizes = ["S", "M", "L", "XL", "2XL"];
  const sizeButtons = sizes.map((s, index) => (
    <Button
      variant={size == index + 1 ? "dark" : "outline-dark "}
      onClick={() => setSize(index + 1)}
      style={{ width: "3.5vw" }}
    >
      {s}
    </Button>
  ));

  return (
    <div className="container-flex " style={{ backgroundColor: "#e8e8ec" }}>
      <div className="row mb-3">
        <div
          className="col-2 mr-0 mt-1"
          style={{ padding: "0rem 0rem 0rem 0rem" }}
        ></div>
        <div className="col-7 ml-0 mr-0 mt-2">
          <div className="row">
            <img src={item.image_url} className="img-detail-lg" />
          </div>
          <div className="row">
            {" "}
            <div className="col-8 ml-0">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              <br />
            </div>
          </div>
        </div>
        <div
          className={scroll ? "col-3 ml-0 mt-2" : "col-3 ml-0 mt-0 fixed-buy"}
        >
          <div className={scroll ? "card detail-buy" : "card detail-buy-fixed"}>
            <h4>{item.name}</h4>
            <h5 style={{ padding: "2rem 0rem 2rem 0rem" }}>$25.00</h5>
            <h6 style={{ padding: "2rem 0rem 0rem 0rem" }}>Size</h6>
            <ButtonGroup aria-label="Basic example">{sizeButtons}</ButtonGroup>

            <h6 style={{ padding: "2rem 0rem 0rem 0rem" }}>Print Location</h6>
            <ButtonGroup aria-label="Basic example">
              {" "}
              <Button
                variant={printLocation == 1 ? "dark" : "outline-dark "}
                onClick={() => setPrintLocation(1)}
                style={{ width: "4.5vw" }}
              >
                Front
              </Button>
              <Button
                variant={printLocation == 2 ? "dark" : "outline-dark "}
                onClick={() => setPrintLocation(2)}
                style={{ width: "4.5vw" }}
              >
                Back
              </Button>
            </ButtonGroup>
            <br></br>
            <br></br>
            <Button
              variant="primary"
              type="submit"
              style={{
                width: "8vw",
                padding: "0.5rem 1rem 0.5rem 1rem",
                borderRadius: "50rem",
              }}
            >
              <FontAwesomeIcon icon={faCartPlus} size="1x" />
              &nbsp; &nbsp;Add to cart
            </Button>
            <br></br>
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
              <h6>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
