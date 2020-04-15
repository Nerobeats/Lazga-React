import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import CategoryDropdown from "./CategoryDropdown";

const HeaderBottom = () => {
  const categories = [
    "CATEGORY 1",
    "CATEGORY 2",
    "CATEGORY 3",
    "CATEGORY 4",
    "CATEGORY 5",
    "CATEGORY 6",
    "CATEGORY 7",
  ];
  const menu = categories.map((category) => (
    <CategoryDropdown category={category} />
  ));
  return (
    <div className="container-flex categories">
      <Navbar variant="light" bg="header-bottom" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">{menu}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderBottom;
