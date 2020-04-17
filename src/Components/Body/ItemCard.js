import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";
import { Link } from "react-router-dom";

import AddToCartModal from "../Cart/AddToCartModal";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { Modal } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const ItemCard = ({ item, addToCart }) => {
  const [liked, setLiked] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleLikeButton = () => setLiked(!liked);

  const handleSubmit = (item) => {
    if (item.type === "tshirt") {
      setModalShow(true);
    } else {
      addToCart(item);
    }
  };

  const open = Boolean(false);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Card style={{ maxWidth: "15rem", margin: "1rem 1rem 1rem 1rem" }} raised>
        <Link to={{ pathname: `/detail/${item.id}`, state: { item: item } }}>
          <div className="img-wrapper">
            <CardMedia
              className="img"
              component="img"
              src={item.image_url}
              title={item.name}
            />
          </div>
        </Link>
        <CardContent
          style={{ paddingBottom: "0.5rem", paddingRight: "0.5rem" }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <div className="name-field"> {item.name}</div>
            </Grid>
            <Grid item xs={6}>
              <div className="name-field"> {item.itemPrice} JOD</div>
            </Grid>

            <Grid item xs={3} style={{ textAlign: "right" }}>
              <Fab
                size="small"
                style={{ background: "white" }}
                color="inherit"
                onClick={() => handleLikeButton()}
              >
                {liked ? (
                  <Favorite style={{ color: "red" }} />
                ) : (
                  <FavoriteBorder />
                )}
              </Fab>
            </Grid>
            <Grid item xs={3} style={{ textAlign: "right" }}>
              <Fab
                size="small"
                style={{ background: "white" }}
                color="inherit"
                onClick={() => handleSubmit(item)}
              >
                <AddShoppingCartIcon />
              </Fab>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Modal
        show={modalShow}
        size="lg"
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <AddToCartModal item={item} id={id} />
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
