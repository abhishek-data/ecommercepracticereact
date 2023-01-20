import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import ProductDetail from "./components/pages/ProductDetail";
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
      <Switch>
        <Route path="/" exact>
          <Redirect to="/store"/>
        </Route>
        <Route path="/store" exact>
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
          <Contact />
        </Route>
        <Route path="/store/:productId">
          <ProductDetail />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </CartProvider>
  );
};

export default App;
