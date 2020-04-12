import React from "react";
import { Navbar, NavDropdown, Form, Nav } from "react-bootstrap";

const HeaderBottom = () => {
  return (
    <div className="container-flex categories">
      <Navbar variant="light" bg="header-bottom" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {/* drop down */}
            <NavDropdown
              title="Category"
              id="basic-nav-dropdown"
              style={{ padding: "0vw 3vw 0vw 3vw" }}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>{" "}
            {/* drop down */}
            <NavDropdown
              title="Category"
              id="basic-nav-dropdown"
              style={{ padding: "0vw 3vw 0vw 3vw" }}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>{" "}
            {/* drop down */}
            <NavDropdown
              title="Category"
              id="basic-nav-dropdown"
              style={{ padding: "0vw 3vw 0vw 3vw" }}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>{" "}
            {/* drop down */}
            <NavDropdown
              title="Category"
              id="basic-nav-dropdown"
              style={{ padding: "0vw 3vw 0vw 3vw" }}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>{" "}
            {/* drop down */}
            <NavDropdown
              title="Category"
              id="basic-nav-dropdown"
              style={{ padding: "0vw 3vw 0vw 3vw" }}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>{" "}
            {/* drop down */}
            <NavDropdown
              title="Category"
              id="basic-nav-dropdown"
              style={{ padding: "0vw 2vw 0vw 2vw" }}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>{" "}
          </Nav>{" "}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderBottom;
