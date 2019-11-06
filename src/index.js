import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import store from "./store/configureStore";
import { Provider } from "react-redux";
import { localeSet } from './store/actions/locale'

if(localStorage.alhubLang) {
  store.dispatch(localeSet(localStorage.alhubLang));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();