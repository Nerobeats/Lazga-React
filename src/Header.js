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

const Header = () => {
  return (
    <div>
      {" "}
      <Navbar
        variant="light"
        bg="header-top"
        expand="lg"
        style={{ textAlign: "right" }}
      >
        <Nav className="ml-auto">
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#signup">Signup</Nav.Link>
        </Nav>
      </Navbar>
      <Navbar
        variant="light"
        bg="header-bottom"
        expand="lg"
        style={{ paddingTop: "1rem" }}
      >
        <Navbar.Brand href="#home">Lazga</Navbar.Brand>
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
                  padding: "1.75rem 35rem 1.75rem 1rem",
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
    </div>
  );
};

export default Header;
