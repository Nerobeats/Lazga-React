import React, { useState, useEffect, useCallback } from "react";
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

// This component is not working yet! It's only here for testing purposes

const CartList = ({ orders, deleteOrder, fetchOrders, submitOrder }) => {
  const [data, setData] = useState([]);

  const handleDelete = (order) => {
    deleteOrder(order);
    fetchOrders();
    setData(orders);
  };

  useEffect(() => {
    setData(orders);
  }, [orders]);

  let colorArray = Object.keys(colorsOptions);
  let sizeArray = ["S", "M", "L", "XL", "2XL"];

  if (data.length > 0) {
    const rows = data[data.length - 1].products.map((order, index) => (
      <TableRow key={index}>
        <TableCell align="right">
          {" "}
          <Image
            src={order.item.image_url}
            width="200"
            height="170"
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
              width: "60rem",
              minHeight: "1080px",
              padding: "1rem 0rem 5rem 0rem",
            }}
          >
            {" "}
            <h3>Your shopping cart</h3>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">ITEM</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="center">QTY</TableCell>
                  <TableCell align="center">PRICE</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows}
                <TableRow key={33}>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>{" "}
                  <TableCell align="center"></TableCell>
                  <TableCell align="right">
                    {" "}
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ padding: "1rem 1rem 1rem 1rem" }}
                      onClick={() =>
                        submitOrder({ status: "PR", totalPrice: 350 })
                      }
                    >
                      CHECKOUT
                    </Button>
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
      }}
    ></Grid>
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
