import React, { Fragment, useCallback, useContext, useEffect, useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
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
  const history = useHistory()
  const {isLoggedIn, cartAccess} = useContext(CartContext);
  console.log(isLoggedIn)
  
  const openCartHandler = useCallback(() => {
    if(isLoggedIn){
    cartAccess()
    setOpenCart(true)};
  },[cartAccess, isLoggedIn]);

  const closeCartHandler = () => {
    setOpenCart(false);
  };
  useEffect(() => {
    if(!isLoggedIn){
      setOpenCart(false)
    }
  },[isLoggedIn])

  useEffect(() => {
    if(isLoggedIn){
      history.replace('/store')
    }
  },[isLoggedIn, history])

  return (
    <Fragment>
      <Header onOpenCart={openCartHandler} />
      {openCart && <Cart onCloseCart={closeCartHandler} />}
      <Switch>
        <Route path="/store">
          {isLoggedIn && <ProductList />}
          {!isLoggedIn && <Redirect to="/login" />}
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
        {!isLoggedIn && (
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
