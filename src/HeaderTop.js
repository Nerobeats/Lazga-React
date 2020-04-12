import React, { useState } from "react";
import { Navbar, Nav, Modal, Button } from "react-bootstrap";

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
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLoginClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLoginClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSignup} onHide={handleSignupClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSignupClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignupClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HeaderTop;
