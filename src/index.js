import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

/*
    React Bootstrap Configuration
*/
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import CartProvider from "./store/CartProvider";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </CartProvider>
);
