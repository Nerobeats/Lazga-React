import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import CategoryButtons from "./CategoryButtons";

const HeaderBottom = () => {
  return (
    <div className="container-flex categories">
      <Navbar variant="light" bg="header-bottom" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <CategoryButtons />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderBottom;
