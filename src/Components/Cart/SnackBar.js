import React from "react";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import Image from "react-graceful-image";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";

const SnackBar = ({ openSnackbar, handleCloseSnackbar, item }) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={openSnackbar}
        autoHideDuration={6000000}
        onClose={handleCloseSnackbar}
        action={
          <React.Fragment>
            <Image src={item.image_url} width="240" height="200" alt="image" />
            <Grid style={{ padding: "3rem 3rem 3rem 3rem" }}>
              {" "}
              <h4>Added to Cart</h4>
              <text>{item.name}</text>
              <br></br> <br></br>
              <Link to={{ pathname: "/cart" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="sm"
                  style={{
                    borderRadius: "50rem",
                  }}
                >
                  <ShoppingCartIcon />
                  <text>&nbsp;View Cart</text>
                </Button>
              </Link>
            </Grid>

            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};
export default SnackBar;
