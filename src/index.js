import "./index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { Provider } from "react-redux";

import store from "./redux";

const THEME = createMuiTheme({
  typography: {
    fontFamily: `Montserrat`,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={THEME}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
