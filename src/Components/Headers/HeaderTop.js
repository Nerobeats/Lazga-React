import React, { useState, useEffect } from "react";
import { Navbar, Nav, Modal } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { resetErrors, logout } from "../../redux/actions";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";

const HeaderTop = ({ user, logout, resetErrors }) => {
  // Modal Handling
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    resetErrors();
  }, [showLogin, showSignup]);

  useEffect(() => {
    setShowLogin(false);
    setShowSignup(false);
  }, [user]);

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
              <Nav.Link onClick={() => setShowLogin(true)}>Login</Nav.Link>
              <Nav.Link onClick={() => setShowSignup(true)}>Signup</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          )}
        </Nav>
      </Navbar>

      <Modal show={showLogin} onHide={() => setShowLogin(false)}>
        <div>
          <Modal.Header style={{ borderBottom: "hidden" }}>
            <Paper
              elevation={3}
              style={{ padding: 16, flex: "auto", textAlign: "center" }}
            >
              <h3>Log In</h3>
            </Paper>{" "}
          </Modal.Header>
        </div>
        <Modal.Body>
          <Paper
            elevation={3}
            style={{ padding: 16, flex: "auto", textAlign: "center" }}
          >
            <Login />
          </Paper>
        </Modal.Body>
      </Modal>

      <Modal show={showSignup} onHide={() => setShowSignup(false)}>
        <div>
          <Modal.Header style={{ borderBottom: "hidden" }}>
            <Paper
              elevation={3}
              style={{ padding: 16, flex: "auto", textAlign: "center" }}
            >
              <h3>Sign Up</h3>
            </Paper>{" "}
          </Modal.Header>
        </div>
        <Modal.Body>
          <Paper
            elevation={3}
            style={{ padding: 16, flex: "auto", textAlign: "center" }}
          >
            <Signup />
          </Paper>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    resetErrors: () => dispatch(resetErrors()),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop);
