import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import css
import "./assets/css/main.css";
import "./assets/css/user.css";
import "./assets/css/header-website.css";
import "./assets/css/header-admin.css";
import "./assets/css/sidebar-admin.css";
import "./assets/css/service.css";
import "./assets/css/booking-admin.css";

import "./assets/css/service.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

// setup store and redux-devtools redux
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
