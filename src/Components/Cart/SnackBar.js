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
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        action={
          <React.Fragment>
            <Image src={item.image_url} width="84" height="70" alt="image" />
            <Grid style={{ padding: "0rem 3rem 0rem 3rem" }}>
              {" "}
              <h5 style={{ fontWeight: "550" }}>Added to Cart</h5>
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
