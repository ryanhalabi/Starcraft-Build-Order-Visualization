import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { combineReducers } from "redux";
import { buildOrderState, metaState } from "./reducers";
import { initialState } from "./components/State";

const reducers = combineReducers({
  buildOrderState,
  metaState,
});

const store = createStore(reducers, initialState);

// // Dispatch some actions
// store.dispatch(INCREMENT_BUILDING("command_center", 2));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
