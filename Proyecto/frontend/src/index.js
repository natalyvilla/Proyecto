import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./Context/ShopContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </Provider>
);
