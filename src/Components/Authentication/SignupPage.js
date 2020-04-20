import React from "react";
import Signup from "./Signup";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        flex: "auto",
        margin: "5rem 25rem 5rem 25rem",
        minHeight: "1080px",
      }}
    >
      <h3>Sign Up</h3>
      <div style={{ padding: "0rem 1rem 1rem 1rem" }}>
        Already have an account?{" "}
        <Link to={{ pathname: `/login` }}>
          <strong>Log In</strong>
        </Link>
      </div>
      <Signup />
    </div>
  );
};

export default SignupPage;
