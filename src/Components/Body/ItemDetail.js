import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import AddToCartDetail from "../Cart/AddToCartDetail";
import Image from "react-graceful-image";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const ItemDetail = ({ types, products }) => {
  const [scroll, setScroll] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 140;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  useEffect(() => {
    scrollToTop();
  }, []);

  const itemID = useParams().itemID;
  const item = products.find((element) => element.id == itemID);
  console.log(item);

  let dict = {};
  types.map((type) => (dict[type.id] = type.type));

  const imageUrlResized =
    dict[item.type] === "Tee's"
      ? item.image_url.substring(0, 64) +
        "large-" +
        item.image_url.substring(64, item.image_url.length - 4)
      : item.image_url.substring(0, 64) +
        `${dict[item.type]}/` +
        "large-" +
        item.image_url.substring(
          65 + `${dict[item.type]}`.length,
          item.image_url.length - 5
        );

  return (
    <Grid
      container
      spacing={0}
      style={{ backgroundColor: "#e8e8ec", minHeight: "1440px" }}
    >
      <Grid item xs={2}></Grid>
      <Grid item xs={7} style={{ padding: "1rem 1rem 1rem 0rem" }}>
        <Paper
          style={{
            backgroundColor: "#e8e8ec",
            padding: "0rem 0rem 0rem 0rem",
            borderRadius: "1rem",
          }}
          elevation={5}
        >
          <Image
            src={imageUrlResized}
            width="826"
            height="700"
            alt="large image"
            className="img-detail-lg"
          />
        </Paper>
        <Grid item xs={12}></Grid>
      </Grid>
      <Grid
        xs={3}
        style={{ padding: "1rem 1rem 1rem 1rem", width: "720px" }}
        // className={scroll ? "not-fixed" : "fixed"}
        className="not-fixed"
      >
        <AddToCartDetail item={item} scroll={scroll} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    types: state.types,
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ItemDetail);
