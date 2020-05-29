import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const HomeHeader = () => {
  return (
    <Link to="/shop/5">
      <img
        style={{ width: "1500px" }}
        src="https://raw.githubusercontent.com/moe9195/lazga-photos/master/cover2.jpg"
      />
    </Link>
  );
};

export default HomeHeader;
