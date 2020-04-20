import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        flex: "auto",
        margin: "5rem 25rem 5rem 25rem",
        minHeight: "1080px",
      }}
    >
      <h3>Log In</h3>
      <div style={{ padding: "0rem 1rem 1rem 1rem" }}>
        Need an account?{" "}
        <Link to={{ pathname: `/signup` }}>
          <strong>Sign Up</strong>
        </Link>
      </div>
      <Login />
    </div>
  );
};

export default LoginPage;
