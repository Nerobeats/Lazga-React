import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ItemsCarousel from "react-items-carousel";
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

const Featured = ({ products }) => {
  const noOfCards = 4;
  const chevronWidth = 60;

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  // const shuffleArray = (array) => {
  //   for (var i = array.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random() * (i + 1));
  //     var temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  // };

  //  shuffleArray(featuredProducts);

  let featuredProducts = products.filter((product) => product.featured);

  useInterval(() => {
    setActiveItemIndex(activeItemIndex + 1);
  }, 3000);

  const classes = useStyles();

  const cards = featuredProducts.map((item) => (
    <Link
      to={{
        pathname: `/detail/${item.id}`,
        state: { item: item },
      }}
    >
      <div className={classes.card}>
        <img className={classes.image} src={item.image_url} />
        <div className={classes.buttonwrapper} style={{ width: "100%" }}></div>
      </div>
    </Link>
  ));

  return (
    <div style={{ maxWidth: "80vw", marginBottom: "5rem", marginTop: "5rem" }}>
      <Typography className={classes.title}>Featured Products</Typography>

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

export default connect(mapStateToProps, null)(Featured);
