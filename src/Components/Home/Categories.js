import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ItemsCarousel from "react-items-carousel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "inline-block",
    margin: "1rem",
    position: "relative",
  },
  image: {
    borderRadius: "0.5rem",
    width: "330px",
    display: "block",
    position: "relative",
    width: "100%",
  },
  buttonwrapper: {
    position: "absolute",
    left: "0",
    bottom: "0",
    marginBottom: "1rem",
    textAlign: "center",
  },
  button: {
    borderRadius: "10rem",
    backgroundColor: "white",
    "pointer-events": "none",
    "box-shadow":
      "0px 3px 1px -2px rgba(0,0,0,0.3), 0px 2px 2px 0px rgba(0,0,0,0.24), 0px 1px 5px 0px rgba(0,0,0,0)",
  },
  title: {
    fontWeight: "600",
    fontSize: "24px",
    paddingLeft: "1.5rem",
  },
}));

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const Categories = ({ products, types }) => {
  const noOfCards = 4;
  const chevronWidth = 60;

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  useInterval(() => {
    setActiveItemIndex(activeItemIndex + 1);
  }, 3000);

  const classes = useStyles();

  let categories = [];
  for (let i = 0; i < types.length; i++) {
    let type = types[i];
    for (let j = 0; j < products.length; j++) {
      let product = products[j];
      if (product.type === type.id) {
        let obj = { photo: product.image_url, type: type.type, id: type.id };
        categories.push(obj);
        break;
      }
    }
  }

  const cards = categories.map((category) => (
    <div className={classes.card}>
      <img className={classes.image} src={category.photo} />
      <div className={classes.buttonwrapper} style={{ width: "100%" }}>
        <Link to={"/shop/" + category.id}>
          <Button variant="contained" className={classes.button}>
            <Typography style={{ fontWeight: "600" }}>
              Shop {category.type}
            </Typography>
          </Button>
        </Link>
      </div>
    </div>
  ));

  return (
    <div
      style={{ maxWidth: "1500px", marginBottom: "0rem", marginTop: "5rem" }}
    >
      <Typography className={classes.title}>Shop by Category</Typography>
      <ItemsCarousel
        infiniteLoop
        gutter={12}
        numberOfCards={noOfCards}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={setActiveItemIndex}
        slidesToScroll={1}
        rightChevron={
          <Fab color="light" size="small" aria-label="edit">
            <ChevronRightIcon />
          </Fab>
        }
        leftChevron={
          <Fab color="light" size="small" aria-label="edit">
            <ChevronLeftIcon />
          </Fab>
        }
        chevronWidth={chevronWidth}
        children={cards}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    types: state.types,
  };
};

export default connect(mapStateToProps, null)(Categories);
