import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
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
      <ProductList />
      <Footer />
      {openCart && <Cart onCloseCart={closeCartHandler} />}
    </CartProvider>
  );
};

export default App;
