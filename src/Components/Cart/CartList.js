import React from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actions";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Drawer from "@material-ui/core/Drawer";

// This component is not working yet! It's only here for testing purposes

const CartList = ({ orders, fetchOrders }) => {
  return (
    <Grid container style={{ justifyContent: "center", minHeight: "2160px" }}>
      <TableContainer component={Paper} style={{ width: "50%" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">QTY</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={1}>
              <TableCell component="th" scope="row">
                Image
              </TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">QTY</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
            <TableRow key={2}>
              <TableCell component="th" scope="row">
                Image
              </TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">QTY</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
            <TableRow key={3}>
              <TableCell component="th" scope="row">
                Image
              </TableCell>

              <TableCell align="right">Name</TableCell>
              <TableCell align="right">QTY</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
