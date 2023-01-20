import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    login: () => {},
    isLoggedIn: false
})

export default CartContext