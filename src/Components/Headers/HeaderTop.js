import React, { useState, useEffect } from "react";
import { Navbar, Nav, Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { login, resetErrors, signup, logout } from "../../redux/actions";

const HeaderTop = ({ login, history, user, logout, signup }) => {
  // Modal Handling
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleSignupClose = () => setShowSignup(false);
  const handleSignupShow = () => setShowSignup(true);

  // User Handling
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    login({ username: username, password: password }, history);
  };

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    signup(
      {
        username: username,
        password: password,
        first_name: firstName,
        last_name: lastName,
        email: email,
      },
      history
    );
  };

  useEffect(() => {
    setShowLogin(false);
    setUsername("");
    setPassword("");
  }, [user]);

  useEffect(() => {
    setUsername("");
    setPassword("");
  }, [showLogin]);

  return (
    <div>
      <Navbar
        variant="light"
        bg="header-top"
        expand="lg"
        style={{ textAlign: "right" }}
      >
        <Nav className="ml-auto">
          {!user ? (
            <>
              <Nav.Link onClick={handleLoginShow}>Login</Nav.Link>
              <Nav.Link onClick={handleSignupShow}>Signup</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          )}
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
              alt="img"
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
          <Form onSubmit={(e) => handleSubmitLogin(e)}>
            <Form.Group controlId="formBasicUsername1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                style={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                style={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div
              className="row"
              style={{
                justifyContent: "center",
                paddingTop: "3rem",
                paddingBottom: "3rem",
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
              alt="logo"
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
          <Form onSubmit={(e) => handleSubmitSignup(e)}>
            <Form.Group controlId="formBasicUsername2">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. lazgarocks"
                style={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="You email address"
                style={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                style={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                style={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Choose a password"
                style={{ padding: "1.5rem 1.5rem 1.5rem 1.5rem" }}
                onChange={(e) => setPassword(e.target.value)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userData, history) => dispatch(login(userData, history)),
    signup: (userData, history) => dispatch(signup(userData, history)),
    logout: () => dispatch(logout()),
    resetErrors: () => dispatch(resetErrors()),
  };
};

const mapStateToProps = (state) => {
  return {
    errors: state.errorsState.errors,
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop);
