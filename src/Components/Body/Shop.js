import React, { useState, useEffect } from "react";
import ListRow from "./ListRow";
import Loading from "../Loading";
import { connect } from "react-redux";
import { setTshirts } from "../../redux/actions";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://lazga-api.herokuapp.com",
});

const Shop = ({ products, setTshirts }) => {
  const [loading, setLoading] = useState(true);

  // function to fetch tshirts from API
  async function fetchTshirts() {
    try {
      const res = await instance.get("/list/");
      const tshirts = res.data;
      setTshirts(tshirts);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  // run function when component mounts
  useEffect(() => {
    fetchTshirts();
  }, []);

  if (!loading) {
    let i,
      j,
      temparray,
      cols = 5,
      rows = [];

    for (i = 0, j = products.tshirts.length; i < j; i += cols) {
      temparray = products.tshirts.slice(i, i + cols);
      rows.push(
        <div key={i} className="row mb-3 ">
          <ListRow rowProducts={temparray} />
        </div>
      );
    }
    return (
      <div className="row mb-3 home-list">
        <div className="container-flex ">{rows}</div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTshirts: (tshirts) => dispatch(setTshirts(tshirts)),
  };
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
