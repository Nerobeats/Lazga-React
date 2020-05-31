import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import CategoryButtons from "./CategoryButtons";

const HeaderBottom = ({ isHome }) => {
  return (
    <div
      className="container-flex categories"
      style={{ padding: "0rem 0rem 0rem 2rem" }}
    >
      <Navbar
        variant="light"
        bg="header-bottom"
        expand="lg"
        style={{
          justifyContent: "flex-end",
          paddingRight: "11.5%",
          paddingLeft: "11.5%",
        }}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <CategoryButtons isHome={isHome} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderBottom;
