import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
    height: "auto",
    width: "100vw",
    marginBottom: "5rem",
  },
}));

const HomeHeader = () => {
  const classes = useStyles();
  return (
    <Link to="/shop/5">
      <img
        className={classes.img}
        src="https://raw.githubusercontent.com/moe9195/lazga-photos/master/cover2.jpg"
      />
    </Link>
  );
};

export default HomeHeader;
