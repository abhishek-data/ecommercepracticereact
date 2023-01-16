import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import ProductList from "./components/Product/ProductList";

const App = () => {
  const [openCart, setOpenCart] = useState(false)

  const openCartHandler = () => {
    setOpenCart(true)
  }
  const closeCartHandler = () => {
    setOpenCart(false)
  }
  return (
    <>
      <Header onOpenCart={openCartHandler}/>
      <ProductList />
      <Footer/>
      {openCart && <Cart onCloseCart={closeCartHandler}/>}
    </>
  );
};

export default App;
