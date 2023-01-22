import React from "react";
import { Col, Row } from "react-bootstrap";

import "./CartItem.css";

const CartItem = (props) => {
  const price = props.item.price.toFixed(2);
  console.log(props.item._id)
  console.log(props.item)
  console.log(props.item.title)
  return (
    <Row className="justify-content-between">
      <Col className="cartItem cartColumn">
        <img className="cartImg" src={props.item.imageUrl} alt="cartimage" />
      </Col>
      <Col className="cartPrice cartColumn">
        {price}
        <button className="button">{props.item.quantity}</button>
      </Col>
      <Col className="cartQuantity cartColumn">
        <button className="cartQuantityButton" onClick={() => props.onRemoveCart(props.item._id)}>remove</button>
      </Col>
    </Row>
  );
};

export default CartItem;
