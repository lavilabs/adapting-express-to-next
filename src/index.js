import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./SignInComponent/serviceWorker";
import WebAuthProvider from "./SignInComponent/WebAuthProvider.js";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
// we updated the auth0 with react version

import configureStore from "./store.js";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider
    domain={process.env.AUTH_ZERO_DOMAIN}
    clientId={process.env.AUTH_ZERO_CLIENT_ID}
    redirectUri={"http://localhost:3000/Home"}
  >
        <App />
        </Auth0Provider>,
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
