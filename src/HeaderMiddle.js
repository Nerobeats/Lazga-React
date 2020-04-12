import React from "react";
import {
  Navbar,
  InputGroup,
  Form,
  FormControl,
  Nav,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const HeaderMiddle = () => {
  return (
    <Navbar
      variant="light"
      bg="header-bottom"
      expand="lg"
      style={{ padding: "1vh 7vw 1vh 7vw" }}
    >
      <Navbar.Brand
        href="#home"
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
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="mx-auto">
          <InputGroup className="mb-12">
            <FormControl
              placeholder="Search Designs and Products..."
              aria-label="search"
              aria-describedby="search"
              size="lg"
              style={{
                padding: "1.25vw 35vw 1.25vw 1vw",
                borderColor: "#e8e8ec",
                backgroundColor: "#e8e8ec",
              }}
            />
            <InputGroup.Append>
              <InputGroup.Text id="search">
                <FontAwesomeIcon
                  icon={faSearch}
                  size="2x"
                  style={{ color: "#40354e" }}
                />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <Nav>
          <Button variant="outline-light" className="circle-button-sm">
            <FontAwesomeIcon icon={faHeart} size="2x" swapOpacity />
          </Button>
          <Button variant="outline-light" className="circle-button-sm">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderMiddle;
