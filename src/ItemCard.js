import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const ItemCard = () => {
  const [heart, setHeart] = useState(false);
  const handleClick = () => setHeart(!heart);

  return (
    <Card
      style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
      className="img-wrapper"
    >
      <div class="image">
        {" "}
        <img
          src={
            "https://raw.githubusercontent.com/Nerobeats/Lazga-React/master/public/images/stock-image.jpg"
          }
          class="img img-responsive full-width"
        />
      </div>
      <small className="favorite-item">
        {/* <Button variant="outline-light shadow" className="fav-button-xsm ">
            <FontAwesomeIcon
              icon={faHeart}
              size="1x"
              style={{ color: "#40354e" }}
            />
          </Button> */}
        <div
          className={heart ? "heart is-active" : "heart"}
          onClick={handleClick}
        ></div>
      </small>
      <Card.Body>
        <Card.Footer
          style={{
            backgroundColor: "transparent",
            border: "hidden",
          }}
        >
          <div className="row">Insert Title Here</div>
          <div className="row">
            <div className="col col-9">
              <div className="row">$2.5</div>
              <div className="row">
                <small>$1.25 when you buy 10+</small>
              </div>
            </div>
            <div className="col col-3 ml-0 mr-0 my-auto">
              {" "}
              <Button variant="outline-light" className="circle-button-xsm">
                <FontAwesomeIcon
                  icon={faCartPlus}
                  size="1x"
                  style={{ color: "#40354e" }}
                />
              </Button>
            </div>
          </div>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
