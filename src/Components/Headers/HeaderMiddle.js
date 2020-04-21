import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Favorite from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const HeaderMiddle = ({ orders, user }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(orders);
  }, [orders]);

  let cartSize = 0;
  if (data.length > 0 && data[data.length - 1]) {
    data[data.length - 1].products.map(
      (product) => (cartSize += product.quantity)
    );

    return (
      <Navbar
        variant="light"
        bg="header-bottom"
        expand="lg"
        style={{ padding: "0.5rem 5rem 0.5rem 5rem" }}
      >
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
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <Nav>
            {user ? (
              <>
                <Link to={{ pathname: "/profile" }}>
                  <Button variant="outlined" className="circle-button-sm">
                    <Badge color="primary">
                      <AccountCircleIcon style={{ fontSize: 40 }} />
                    </Badge>
                  </Button>
                </Link>
                <Link to={{ pathname: "/favorites" }}>
                  <Button variant="outlined" className="circle-button-sm">
                    <Badge color="primary">
                      <Favorite style={{ fontSize: 40 }} />
                    </Badge>
                  </Button>
                </Link>
              </>
            ) : (
              <></>
            )}
            <Link to={{ pathname: "/cart" }}>
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
  } else
    return (
      <Navbar
        variant="light"
        bg="header-bottom"
        expand="lg"
        style={{ padding: "0.5rem 5rem 0.5rem 5rem" }}
      >
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
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <Nav>
            <Button variant="outlined" className="circle-button-sm">
              <Badge color="primary">
                <AccountCircleIcon style={{ fontSize: 40 }} />
              </Badge>
            </Button>

            <Button variant="outlined" className="circle-button-sm">
              <Badge color="primary">
                <Favorite style={{ fontSize: 40 }} />
              </Badge>
            </Button>

            <Link to={{ pathname: "/cart" }}>
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
    user: state.user,
    orders: state.orders,
  };
};

export default connect(mapStateToProps, null)(HeaderMiddle);
