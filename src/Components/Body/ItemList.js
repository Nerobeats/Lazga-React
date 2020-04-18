import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Paginator from "../HelperComponents/Paginator";
import { CardDeck } from "react-bootstrap";
import { connect } from "react-redux";
import { setProducts } from "../../redux/actions";

const ItemList = ({ products, filterProducts }) => {
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
    setData(filterProducts);
  }, [products, filterProducts]);

  useEffect(() => {
    if (filterProducts) {
      setCurrentData(filterProducts.slice(offset, offset + pageLimit));
      scrollToTop();
    }
  }, [offset, filterProducts, data]);

  const rows = currentData.map((item, index) => (
    <div>
      {" "}
      <ItemCard key={index} item={item} />
    </div>
  ));

  return (
    <div>
      <CardDeck style={{ paddingLeft: "2rem" }}>{rows}</CardDeck>
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
    filterProducts: state.filterProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) => dispatch(setProducts(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
