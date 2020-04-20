import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actions";
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
import EditIcon from "@material-ui/icons/Edit";
import Image from "react-graceful-image";

// This component is not working yet! It's only here for testing purposes

const CartList = ({ orders }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(orders);
  }, [orders]);

  if (data.length > 0) {
    const rows = data[0].products.map((item, index) => (
      <TableRow key={index}>
        <TableCell align="center">
          {" "}
          <Image src={item.item.image_url} width="240" height="200" alt="img" />
        </TableCell>
        <TableCell align="center">{item.item.name}</TableCell>
        <TableCell align="center">{item.quantity}</TableCell>
        <TableCell align="center">
          ({item.quantity}* {item.item.itemPrice} JOD) =
          {item.item.itemPrice * item.quantity} JOD
        </TableCell>
        <TableCell align="center">
          <Button variant="outlined" className="circle-button-sm">
            <DeleteIcon onClick={() => alert("I DO NOTHING")} />
          </Button>
          <Button variant="outlined" className="circle-button-sm">
            <EditIcon onClick={() => alert("I DO NOTHING")} />
          </Button>
        </TableCell>
      </TableRow>
    ));
    return (
      <Grid container style={{ justifyContent: "center", minHeight: "2160px" }}>
        <TableContainer component={Paper} style={{ width: "60%" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Item</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">QTY</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Edit/Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{rows}</TableBody>
          </Table>
        </TableContainer>
      </Grid>
    );
  }
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(fetchOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
