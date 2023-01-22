import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";
import axios from "axios";

const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);

  const [userEmail, setUserEmail] = useState("");
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const APIKEY = '952af32feda64b4cb69b4128d047bc1c'

  useEffect(() => {
    const loginToken = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (loginToken && email) {
      setIsLoggedIn(true);
      setUserEmail(email);
    }
  }, [isLoggedIn, userEmail]);

  const userEmailHandler = (email) => {
    const newUserEmail = email.replace("@", "").replace(".", "");
    setUserEmail(newUserEmail);
    localStorage.setItem("email", newUserEmail);
  };

  console.log(userEmail);

  const addToCartHandler = async(item) => {
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
    await axios.post(
      `https://crudcrud.com/api/${APIKEY}/${userEmail}`,
      item
    );
    acessesCartHandler()  
  };

  const acessesCartHandler = async() => {
    const response = await axios
      .get(
        `https://crudcrud.com/api/${APIKEY}/${userEmail}`
      )
    const data = await response.data  
    setCartItem(data);
    console.log(data);
      
  };

  
  const removeItemHandler = (id) => {
    setCartItem(cartItem.filter((item) => id !== item._id));
    axios.delete(
      `https://crudcrud.com/api/${APIKEY}/${userEmail}/${id}`
    );
  };
  const total = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const loginHandler = (token) => {
    setIsLoggedIn(true);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setCartItem([])
    setIsLoggedIn(false);
  };

  const contextData = {
    items: cartItem,
    totalAmount: total,
    addItem: addToCartHandler,
    removeItem: removeItemHandler,
    login: loginHandler,
    isLoggedIn: isLoggedIn,
    userIndentifier: userEmailHandler,
    cartAccess: acessesCartHandler,
    logout: logoutHandler,
  };
  return (
    <CartContext.Provider value={contextData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
