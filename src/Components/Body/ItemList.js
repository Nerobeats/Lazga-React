import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Paginator from "../HelperComponents/Paginator";
import { CardDeck } from "react-bootstrap";
import { CardContent, Grid, Card } from "@material-ui/core";
import { connect } from "react-redux";
import { setProducts } from "../../redux/actions";

const ItemList = ({ products, filteredProducts, profile }) => {
  const pageLimit = 30;

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  useEffect(() => {
    setProducts(products);
    setData(filteredProducts);
  }, [products, filteredProducts]);

  useEffect(() => {
    if (filteredProducts) {
      setCurrentData(filteredProducts.slice(offset, offset + pageLimit));
      scrollToTop();
    }
  }, [offset, filteredProducts, data]);

  var rows = currentData.map((item, index) => (
    <div>
      <ItemCard
        favorited={false}
        filteredProducts={filteredProducts}
        key={index}
        item={item}
      />
    </div>
  ));

  if (profile) {
    const favIDs = profile.favorites.map((item) => item.id);

    rows = currentData.map((item, index) => (
      <div>
        <ItemCard
          favorited={favIDs.includes(item.id)}
          filteredProducts={filteredProducts}
          key={index}
          item={item}
        />
      </div>
    ));
  }

  return (
    <div>
      <CardDeck className="card-deck" style={{ paddingLeft: "2rem" }}>
        {rows}
      </CardDeck>
      <Paginator
        totalRecords={data.length}
        pageLimit={pageLimit}
        pageNeighbours={1}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
    filteredProducts: state.filteredProducts,
    profile: state.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) => dispatch(setProducts(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
