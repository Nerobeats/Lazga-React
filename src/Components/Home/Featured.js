import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Button } from "antd";
import { Link } from "react-router-dom";
import ItemsCarousel from "react-items-carousel";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Fab from "@material-ui/core/Fab";

const noOfCards = 6;
const chevronWidth = 60;

const Wrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const Featured = ({ products }) => {
  const featuredProducts = products.filter((product) => product.featured);

  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  shuffleArray(featuredProducts);

  const carouselItems = featuredProducts.map((item) => (
    <Card style={{ maxWidth: "15rem", margin: "1rem 0rem 1rem 0rem" }} raised>
      <Link
        to={{
          pathname: `/detail/${item.id}`,
          state: { item: item },
        }}
      >
        <div className="img-wrapper">
          <img
            src={item.image_url}
            width="240"
            height="200"
            alt="My awesome image"
          />
        </div>
      </Link>
      <CardContent style={{ paddingBottom: "0" }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <div className="name-field"> {item.name}</div>
          </Grid>
          <Grid item xs={6}>
            <div className="name-field"> {item.itemPrice} JOD</div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  ));

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <Wrapper>
      <h3
        style={{ paddingTop: "5rem", paddingLeft: "0.5rem", fontWeight: "600" }}
      >
        Featured products
      </h3>
      <ItemsCarousel
        infiniteLoop
        gutter={12}
        numberOfCards={noOfCards}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={setActiveItemIndex}
        slidesToScroll={noOfCards}
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
        children={carouselItems}
      />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(Featured);
