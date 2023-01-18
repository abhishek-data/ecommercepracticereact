import React, { useState } from "react";
import { Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import ProductList from "./components/Product/ProductList";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [openCart, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart(true);
  };
  const closeCartHandler = () => {
    setOpenCart(false);
  };
  return (
    <CartProvider>
      <Header onOpenCart={openCartHandler} />

      <Route path="/store">
        <ProductList />
        <Footer />
        {openCart && <Cart onCloseCart={closeCartHandler} />}
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
    </CartProvider>
  );
};

export default App;
