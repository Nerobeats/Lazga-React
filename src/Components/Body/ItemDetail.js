import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AddToCartDetail from "../Cart/AddToCartDetail";
import Image from "react-graceful-image";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const ItemDetail = () => {
  const [scroll, setScroll] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 173;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  useEffect(() => {
    scrollToTop();
  }, []);

  const item = useLocation().state.item;
  const imageUrlResized =
    item.image_url.substring(0, 64) +
    "large-" +
    item.image_url.substring(64, item.image_url.length - 4);

  return (
    <Grid container spacing={0} style={{ backgroundColor: "#e8e8ec" }}>
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
            width="1056"
            height="891"
            alt="large image"
            className="img-detail-lg"
          />
        </Paper>
        <Grid item xs={12}>
          abcabcabcabcabcabcabcabcabcabcabcabcabcabc abcabc<br></br>
          abcabcabcabcabcabcabcabcabcabcabcabcabcabc abcabc<br></br>
          abcabcabcabcabcabcabcabcabcabcabcabcabcabc abcabc<br></br>
          abcabcabcabcabcabcabcabcabcabcabcabcabcabc abcabc<br></br>
          abcabcabcabcabcabcabcabcabcabcabcabcabcabc abcabc<br></br>
          abcabcabcabcabcabcabcabcabcabcabcabcabcabc abcabc<br></br>
          abcabcabcabcabcabcabcabcabcabcabcabcabcabc abcabc<br></br>
          abcabcabcabcabcabcabcabcabcabcabcabcabcabc abcabc<br></br>
          abcabcabcabcabcabcabcabcabcabcabcabcabcabc abcabc<br></br>
          abcabcabcabcabcabcabcabcabcabcabcabcabcabc abcabc<br></br>
          abcabcabcabcabcabcabcabcabcabcabcabcabcabc abcabc<br></br>
          abcabcabcabcabcabcabcabcabcabcabcabcabcabc abcabc<br></br>
          abcabcabcabcabcabcabcabcabcabcabcabcabcabc abcabc<br></br>
          abcabcabcabcabcabcabcabcabcabcabcabcabcabc abcabc<br></br>
          abcabcabcabcabcabcabcabcabcabcabcabcabcabc abcabc<br></br>
        </Grid>
      </Grid>
      <Grid
        xs={3}
        style={{ padding: "1rem 0.5rem 1rem 1rem" }}
        className={scroll ? "not-fixed" : "fixed"}
      >
        <AddToCartDetail item={item} scroll={scroll} />
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
