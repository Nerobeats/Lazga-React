import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Favorite from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchBar from "./SearchBar";

const HeaderMiddle = ({ orders, user }) => {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setData(orders);
  }, [orders]);

  const delayRedirect = (event) => {
    setTimeout(() => {
      console.log("this ran");
      history.push("/shop/5");
    }, 100);
  };

  let cartSize = 0;
  if (data.length > 0) {
    let currentData = data.find((order) => order.status === "NS");
    let total = 0;
    currentData.products.map(
      (order) => (total += order.item.itemPrice * order.quantity)
    );

    currentData.products.map((product) => (cartSize += product.quantity));

    return (
      <Navbar
        variant="light"
        bg="header-bottom"
        expand="lg"
        style={{ padding: "0.5rem 11% 0.5rem 11%" }}
      >
        <Navbar.Brand
          style={{
            padding: "0rem 0rem 0rem 0rem",
          }}
        >
          <div onClick={delayRedirect} style={{ cursor: "pointer" }}>
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
          </div>
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <div
            style={
              user
                ? { width: "100%", padding: "0 5% 0 10%" }
                : { width: "100%", padding: "0 10% 0 5%" }
            }
          >
            <SearchBar />
          </div>
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
                </Link>{" "}
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
            </Link>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else
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
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div style={{ width: "100%", padding: "0 10% 0 10%" }}>
          <SearchBar />
        </div>
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <Nav>
            {user ? (
              <>
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
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    user: state.user,
    orders: state.orders,
  };
};

export default connect(mapStateToProps, null)(HeaderMiddle);
