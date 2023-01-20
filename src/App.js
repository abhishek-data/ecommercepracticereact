import React, { Fragment, useContext, useState } from "react";
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
import CartContext from "./store/cart-context";


const App = () => {
  const [openCart, setOpenCart] = useState(false);

  const cartCtx = useContext(CartContext);
  
  const openCartHandler = () => {
    setOpenCart(true);
  };
  const closeCartHandler = () => {
    setOpenCart(false);
  };
  return (
    <Fragment>
      <Header onOpenCart={openCartHandler} />
      {openCart && <Cart onCloseCart={closeCartHandler} />}
      <Switch>
        <Route path="/store">
          {cartCtx.isLoggedIn && <ProductList />}
          {!cartCtx.isLoggedIn && <Redirect to="/login" />}
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
        {!cartCtx.isLoggedIn && (
          <Route path="/login">
            <Login />
          </Route>
        )}
        <Route path="*" exact>
          <Redirect to="/login" />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
