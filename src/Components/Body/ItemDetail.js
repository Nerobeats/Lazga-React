import React, { useState, useEffect } from "react";

const ItemDetail = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 175;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  console.log(scroll);
  return (
    <div className="container-flex " style={{ backgroundColor: "#e8e8ec" }}>
      <div className="row mb-3">
        <div
          className="col-2 mr-0 mt-1"
          style={{ padding: "0rem 0rem 0rem 0rem" }}
        ></div>
        <div className="col-7 ml-0 mr-0 mt-2">
          <img
            src="https://raw.githubusercontent.com/Nerobeats/Lazga-React/master/public/images/2.jpg"
            className="img-detail-lg"
          />
        </div>
        <div className="col-3 ml-0 mt-2">
          <div
            className={!scroll ? "card detail-buy-fixed" : "card detail-buy"}
          >
            TEST
          </div>
        </div>
      </div>
      <div className="row">
        {" "}
        <div className="col-1 mr-0"></div>
        <div className="col-8 ml-0 mr-0"></div>
        <div className="col-3 ml-0"></div>
      </div>
    </div>
  );
};

export default ItemDetail;
