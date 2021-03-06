import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login, resetErrors, fetchOrders } from "../../redux/actions";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

const Login = ({ login, history, user, errors, fetchOrders }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username: values.username, password: values.password }, history);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    fetchOrders();
  }, [user]);

  return (
    <div>
      {user ? (
        <Redirect to="/home" />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} style={{ paddingTop: "2rem" }}>
            {!!errors.length && (
              <div className="alert alert-danger" role="alert">
                {errors.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            )}
            <FormControl fullWidth>
              <TextField
                label="Username"
                id="username"
                value={values.username}
                onChange={handleChange("username")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: "2rem" }}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} style={{ padding: "2.5rem 0rem 2.5rem 0rem" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: "20rem", width: "50%" }}
              onClick={(e) => handleSubmit(e)}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userData, history) => dispatch(login(userData, history)),
    resetErrors: () => dispatch(resetErrors()),
    fetchOrders: () => dispatch(fetchOrders()),
  };
};

const mapStateToProps = (state) => {
  return {
    errors: state.errorsState.errors,
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
