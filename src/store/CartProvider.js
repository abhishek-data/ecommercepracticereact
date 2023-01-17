import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCartHandler = (item) => {
    
    const existingCartItemIndex = cartItem.findIndex((element) => element.title === item.title )
    const existingCartItem = cartItem[existingCartItemIndex]
    if(existingCartItem){
      const updatedCartItem = {...existingCartItem, quantity: existingCartItem.quantity+1}
      const updatedItem = [...cartItem]
      updatedItem[existingCartItemIndex] = updatedCartItem
      setCartItem(updatedItem)
    }
    else{
      setCartItem([...cartItem, item])
    }
    
  };

  const removeItemHandler = (id) => {
    setCartItem(
        cartItem.filter((item) => id !==item.title )
    )
  }
  const total = cartItem.reduce((total, item) => (total + item.price*item.quantity),0)
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
