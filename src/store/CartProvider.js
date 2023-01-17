import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCartHandler = (item) => {
    
    setCartItem([...cartItem, item]);
  };

  const removeItemHandler = (id) => {
    setCartItem(
        cartItem.filter((item) => id !==item.title )
    )
  }
  const total = cartItem.reduce((total, item) => (total + item.price),0)
  const cartContext = {
    items: cartItem,
    totalAmount: total,
    addItem: addToCartHandler,
    removeItem: removeItemHandler
  }
  return (
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
