import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";

const CategoryDropdown = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <NavDropdown
      title="Category"
      id="basic-nav-dropdown"
      style={{ padding: "0vw 3vw 0vw 3vw" }}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      show={open}
    >
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
  );
};

export default CategoryDropdown;
