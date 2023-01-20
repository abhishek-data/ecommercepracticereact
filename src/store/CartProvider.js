import React, { useState } from "react";
import CartContext from "./cart-context";
import axios from "axios";

const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const [token, setToken] = useState(null);
  const [userEmail, setUserEmail] = useState('')

  const userIsLoggedIn = !!token;

  
  const userEmailHandler = (email) =>{
    const newUserEmail = email.replace('@', '').replace('.', '')
    setUserEmail(newUserEmail)
  }
  
  console.log(userEmail)
  const addToCartHandler = (item) => {
    // const existingCartItemIndex = cartItem.findIndex(
    //   (element) => element.title === item.title
    // );
    // const existingCartItem = cartItem[existingCartItemIndex];

    // let updatedItem;
    // if (existingCartItem) {
    //   const updatedCartItem = {
    //     ...existingCartItem,
    //     quantity: existingCartItem.quantity + 1,
    //   };
    //   updatedItem = [...cartItem];
    //   updatedItem[existingCartItemIndex] = updatedCartItem;
    //   setCartItem(updatedItem);
      
    // } else {
    //   updatedItem = [...cartItem, item];
    //   setCartItem(updatedItem);
    // }
    axios.post(`https://crudcrud.com/api/9a3f4c6afba34c0d852e88988f0af570/${userEmail}`,item)
  };

  const acessesCartHandler = () =>{
    axios.get(`https://crudcrud.com/api/9a3f4c6afba34c0d852e88988f0af570/${userEmail}`)
    .then(res => {
      setCartItem(res.data)
      console.log(res.data)

    })
  }


  const removeItemHandler = (id) => {
    setCartItem(cartItem.filter((item) => id !== item.title));
  };
  const total = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const loginHandler = (token) => {
    setToken(token);

    localStorage.setItem("token", token);
  };

  const contextData = {
    items: cartItem,
    totalAmount: total,
    addItem: addToCartHandler,
    removeItem: removeItemHandler,
    login: loginHandler,
    isLoggedIn: userIsLoggedIn,
    userIndentifier: userEmailHandler,
    cartAccess: acessesCartHandler
  };
  return (
    <CartContext.Provider value={contextData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
