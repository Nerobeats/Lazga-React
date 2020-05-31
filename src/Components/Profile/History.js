import React from "react";
import { connect } from "react-redux";

const History = ({ orders }) => {
  let rows = [];

  let itemHistory = orders.filter((order) => order.status !== "NS");

  for (let i = 0; i < itemHistory.length; i++) {
    let batch = itemHistory[i].products;
    for (let j = 0; j < batch.length; j++) {
      let item = batch[j];
      rows.push(<li>{item.item.name}</li>);
    }
  }

  console.log(rows);
  return (
    <div>
      <ul style={{ display: "block" }}>{rows}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps, null)(History);
