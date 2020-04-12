import React, { useState } from "react";
import { Navbar, Nav, Modal, Button, Form } from "react-bootstrap";

const HeaderTop = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleSignupClose = () => setShowSignup(false);
  const handleSignupShow = () => setShowSignup(true);

  return (
    <div>
      <Navbar
        variant="light"
        bg="header-top"
        expand="lg"
        style={{ textAlign: "right" }}
      >
        <Nav className="ml-auto">
          <Nav.Link onClick={handleLoginShow}>Login</Nav.Link>
          <Nav.Link onClick={handleSignupShow}>Signup</Nav.Link>
        </Nav>
      </Navbar>

      <Modal show={showLogin} onHide={handleLoginClose}>
        <Modal.Header closeButton style={{ borderBottom: "hidden" }}>
          <Modal.Title>
            {" "}
            <img
              src={
                "https://raw.githubusercontent.com/Nerobeats/Lazga-React/master/public/images/logo.png"
              }
              style={{
                width: "5rem",
                height: "7rem",
                padding: "0rem 0rem 1rem 0rem",
              }}
            />
            <h3>Log In</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Username or Email"
                style={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                style={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
              />
            </Form.Group>
            <div
              className="row"
              style={{
                justifyContent: "center",
                paddingTop: "5rem",
                paddingBottom: "5rem",
              }}
            >
              <Button
                variant="primary"
                type="submit"
                style={{
                  paddingRight: "10rem",
                  paddingLeft: "10rem",
                  borderRadius: "50rem",
                }}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showSignup} onHide={handleSignupClose}>
        <Modal.Header closeButton style={{ borderBottom: "hidden" }}>
          <Modal.Title>
            {" "}
            <img
              src={
                "https://raw.githubusercontent.com/Nerobeats/Lazga-React/master/public/images/logo.png"
              }
              style={{
                width: "5rem",
                height: "7rem",
                padding: "0rem 0rem 1rem 0rem",
              }}
            />
            <h3>Sign Up</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="email"
                placeholder="e.g. lazgarocks"
                style={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="You email address"
                style={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                style={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                style={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Choose a password"
                style={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
              />
            </Form.Group>
            <div
              className="row"
              style={{
                justifyContent: "center",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <Button
                variant="primary"
                type="submit"
                style={{
                  paddingRight: "10rem",
                  paddingLeft: "10rem",
                  borderRadius: "50rem",
                }}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HeaderTop;
