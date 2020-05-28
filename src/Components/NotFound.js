import React from "react";
import { Link } from "react-router-dom";
import { Box } from "rebass/styled-components";
import Button from "@material-ui/core/Button";

const NotFound = () => {
  return (
    <div id="404" className="error-page">
      <Box width={[320, 400, 600]} m="auto" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "10rem" }}>404</h1>
        <h1 style={{ fontSize: "2rem" }}>There isn&apos;t anything here </h1>
        <Link to="/home">
          <Button
            variant="contained"
            color="primary"
            style={{
              borderRadius: "3rem",
              padding: "1rem 1rem .5rem 1rem",
              marginTop: "2rem",
            }}
          >
            <h1 style={{ fontSize: "2rem" }}>Home Page</h1>
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default NotFound;
