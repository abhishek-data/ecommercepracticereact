import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";
import axios from "axios";

const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);

  const [userEmail, setUserEmail] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const APIKEY = "9b9eae3fb3d54e9180908a1395e3cc2c";

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

  const addToCartHandler = async (item) => {
    // console.log(item, item['_id'])
    const existingCartItemIndex = cartItem.findIndex(
      (element) => element.title === item.title
    );

    if (existingCartItemIndex >= 0) {
      const existingCartItem = cartItem[existingCartItemIndex];
      const id = existingCartItem._id;
      const updatedCart = { ...item, quantity: existingCartItem.quantity + 1 };
      await axios.put(
        `https://crudcrud.com/api/${APIKEY}/${userEmail}/${id}`,
        updatedCart
      );
    } else {
      await axios.post(`https://crudcrud.com/api/${APIKEY}/${userEmail}`, item);
    }
    acessesCartHandler();
  };

  const acessesCartHandler = async () => {
    const response = await axios.get(
      `https://crudcrud.com/api/${APIKEY}/${userEmail}`
    );
    const data = await response.data;
    setCartItem(data);
  };

  const removeItemHandler = (id) => {
    setCartItem(cartItem.filter((item) => id !== item._id));
    axios.delete(`https://crudcrud.com/api/${APIKEY}/${userEmail}/${id}`);
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
    setCartItem([]);
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
