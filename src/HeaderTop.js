import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const HeaderTop = () => {
  return (
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
  );
};

export default HeaderTop;
