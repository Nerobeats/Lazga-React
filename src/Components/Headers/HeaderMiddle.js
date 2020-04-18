import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Navbar, Nav } from "react-bootstrap";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Favorite from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const HeaderMiddle = ({ cart }) => {
  let cartSize = 0;
  cart.map((item) => (cartSize += item.quantity));

  return (
    <Navbar variant="light" bg="header-bottom" expand="lg">
      <Navbar.Brand
        href="/shop" // change to home later
        style={{
          padding: "0rem 0rem 0rem 0rem",
        }}
      >
        <img
          src={
            "https://raw.githubusercontent.com/Nerobeats/Lazga-React/master/public/images/logo-name.png"
          }
          style={{
            width: "8.5rem",
            height: "3.5rem",
            padding: "0rem 0rem 0rem 0rem",
          }}
          alt="logo-name"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <SearchBar />
        <Nav>
          <Button variant="outlined" className="circle-button-sm">
            <Badge color="primary">
              <Favorite style={{ fontSize: 40 }} />
            </Badge>
          </Button>

          <Link to={{ pathname: `/cart` }}>
            <Button variant="outlined" className="circle-button-sm">
              <Badge badgeContent={cartSize} color="primary">
                <ShoppingCartIcon style={{ fontSize: 40 }} />
              </Badge>
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(HeaderMiddle);
