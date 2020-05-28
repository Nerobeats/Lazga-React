import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  addFavorite,
  removeFavorite,
  fetchProfile,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import AddToCartModal from "../Cart/AddToCartModal";
import SnackBar from "../Cart/SnackBar";
import Image from "react-graceful-image";
import { Modal } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const ItemCard = ({
  item,
  types,
  user,
  addFavorite,
  removeFavorite,
  fetchProfile,
  favorited,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleLikeButton = () => {
    if (user) {
      if (favorited) {
        removeFavorite(item);
      } else {
        addFavorite(item);
      }
      favorited = !favorited;
      setTimeout(() => {
        fetchProfile();
      }, 50);
    } else {
      alert("Please Log In");
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  let hasProps = {};
  hasProps = types.map(
    (type) => (hasProps[type.id] = type.color || type.size || type.magic)
  );

  const handleSubmit = (item) => {
    // if (hasProps[item.type - types[0].id]) {
    if (user) {
      setModalShow(true);
    } else {
      alert("Please Log In");
    }
  };

  const open = Boolean(false);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Card style={{ maxWidth: "15rem", margin: "1rem 1rem 1rem 1rem" }} raised>
        <Link
          to={{
            pathname: `/detail/${item.id}`,
            state: { item: item },
          }}
        >
          <div className="img-wrapper">
            <img
              src={item.image_url}
              width="240"
              height="200"
              alt="My awesome image"
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
                {favorited ? (
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
        <AddToCartModal
          item={item}
          id={id}
          setModalShow={setModalShow}
          setOpenSnackbar={setOpenSnackbar}
        />
      </Modal>
      <SnackBar
        openSnackbar={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
        item={item}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    addFavorite: (item) => dispatch(addFavorite(item)),
    removeFavorite: (item) => dispatch(removeFavorite(item)),
    fetchProfile: () => dispatch(fetchProfile()),
  };
};
const mapStateToProps = (state) => {
  return {
    types: state.types,
    user: state.user,
    profile: state.profile,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
