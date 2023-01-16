import React from "react";

import "./CartItem.css";

const CartItem = (props) => {
  const price = props.item.price.toFixed(2);
  return (
    <div className="cartRow">
      <span className="cartItem cartColumn">
        <img className="cartImg" src={props.item.imageUrl} alt="cartimage" />
      </span>
      <span className="cartPrice cartColumn">
        {price}
        <button className="button">{props.item.quantity}</button>
      </span>
      <span className="cartQuantity cartColumn">
        <button className="cartQuantityButton" onClick={() => props.onRemoveCart(props.item.title)}>remove</button>
      </span>
    </div>
  );
};

export default CartItem;
