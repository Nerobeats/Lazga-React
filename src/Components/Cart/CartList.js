import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchOrders, deleteOrder, submitOrder } from "../../redux/actions";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import Image from "react-graceful-image";
import colorsOptions from "../../colors";

var _ = require("lodash");

const CartList = ({ orders, deleteOrder, fetchOrders, submitOrder }) => {
  const [data, setData] = useState([]);

  const makeUnique = (products) => {
    let result = [];
    let objs = [];
    for (let i = 0; i < products.length; i++) {
      let count = 0;
      for (let j = 0; j < products.length; j++) {
        if (_.isEqual(_.omit(products[i], "id"), _.omit(products[j], "id"))) {
          let obj = products[j];
          count++;
          obj["count"] = count;
          objs.push(obj);
          products.splice(j, 1);
        }
      }
    }
    return objs;
  };

  const handleDelete = (order) => {
    deleteOrder(order);
    fetchOrders();
    setData(orders);
  };

  const submitOrderHandler = (order) => {
    submitOrder(order);
    fetchOrders();
    setData(orders);
    fetchOrders();
    setData(orders);
  };

  useEffect(() => {
    setData(orders);
  }, [orders]);

  let colorArray = Object.keys(colorsOptions);
  let sizeArray = ["S", "M", "L", "XL", "2XL"];

  if (data.length > 0) {
    let currentData = data.find((order) => order.status === "NS");
    console.log("HERE");

    const unique = makeUnique(currentData.products);
    console.log(unique);
    let total = 0;
    currentData.products.map(
      (order) => (total += order.item.itemPrice * order.quantity)
    );
    const rows = currentData.products.map((order, index) => (
      <TableRow key={index}>
        <TableCell align="right">
          {" "}
          <Image
            style={{ borderRadius: "0.25rem" }}
            src={order.item.image_url}
            width="100"
            height="85"
            alt="img"
          />
        </TableCell>
        <TableCell align="left">
          {order.item.name}
          <br />
          {colorArray[order.color - 1]}
          <br />
          {sizeArray[order.size - 1]}
          <br />
        </TableCell>
        <TableCell align="center">{order.quantity}</TableCell>
        <TableCell align="center">
          {order.item.itemPrice * order.quantity} JOD
        </TableCell>
        <TableCell align="center">
          <Button variant="outlined" className="circle-button-sm">
            <DeleteIcon onClick={() => handleDelete(order.id)} />
          </Button>
        </TableCell>
      </TableRow>
    ));

    if (rows.length > 0) {
      return (
        <Grid
          container
          style={{
            justifyContent: "center",
            width: "100%",
            minHeight: "2160px",
            textAlign: "center",
          }}
        >
          <TableContainer
            component={Paper}
            style={{
              width: "50rem",
              minHeight: "1080px",
              padding: "1rem 0rem 5rem 0rem",
            }}
          >
            {" "}
            <h3 style={{ paddingBottom: "1rem" }}>Your shopping cart</h3>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    ITEM
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ fontWeight: "bold" }}
                  ></TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    QTY
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    PRICE
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bold" }}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows}
                <TableRow key={33}>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>{" "}
                  <TableCell align="center"></TableCell>
                  <TableCell align="right">
                    <h5>
                      Total Price: {total} JOD &nbsp;&nbsp;&nbsp;
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ padding: "1rem 1rem 1rem 1rem" }}
                        onClick={() =>
                          submitOrderHandler({
                            status: "PR",
                            totalPrice: total,
                          })
                        }
                      >
                        CHECKOUT
                      </Button>
                    </h5>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      );
    }
  }
  return (
    <Grid
      container
      style={{
        justifyContent: "center",
        width: "100%",
        minHeight: "2160px",
        paddingTop: "5rem",
        textAlign: "center",
      }}
    >
      <div>
        <h3>Your shopping cart</h3>
        <br></br>
        <small>You have no items in your cart!</small>
        <br></br>

        <Image
          src="https://raw.githubusercontent.com/Nerobeats/Lazga-React/master/public/images/empty-cart.gif"
          width="500"
          height="550"
          alt="img"
          style={{ paddingTop: "5rem" }}
        />
      </div>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(fetchOrders()),
    deleteOrder: (id) => dispatch(deleteOrder(id)),
    submitOrder: (order) => dispatch(submitOrder(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
