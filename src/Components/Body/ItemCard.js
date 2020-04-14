import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ItemCard = ({ item }) => {
  const [heart, setHeart] = useState(false);
  const handleClick = () => setHeart(!heart);

  return (
    <Link to={{ pathname: `/detail/${item.id}`, state: { item: item } }}>
      <Card
        style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
        className="img-wrapper"
      >
        <div className="image">
          {" "}
          <img
            src={item.image_url}
            className="img img-responsive full-width"
            alt="shirt_img"
          />
        </div>
        <small className="favorite-item">
          <div
            className={heart ? "heart is-active" : "heart"}
            onClick={handleClick}
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
    </Link>
  );
};

export default ItemCard;
