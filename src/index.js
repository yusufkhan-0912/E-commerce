import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import { AppProvider } from "./context/Productcontext.js";
import { FilterContextProvider } from "./context/filter_context.js";
import { CartProvider } from "./context/cart_context.js";

ReactDOM.render(
  <>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </>,
  document.getElementById("root")
);
