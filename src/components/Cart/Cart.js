import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { CloseButton, Button } from "react-bootstrap";
import { useState } from "react";

const Cart = (props) => {
  
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  const [filteredItem, setFilteredItem] = useState(cartElements)
  const removeItemHandler = (id) => {
    setFilteredItem(
      cartElements.filter((item) => item.title != id)
    )
    
  }
  const total = cartElements.reduce((total, item) => (total + item.price*item.quantity), 0)

  return (
    <Modal>
      <CloseButton onClick={props.onCloseCart} />
      <h5 className="heading">CART</h5>
      <div className="cartHeader cartRow">
        <span className="cartItem cartColumn">ITEM</span>
        <span className="cartPrice cartColumn">PRICE</span>
        <span className="cartQuantity cartColumn">QUANTITY</span>
      </div>
      <div>
        {filteredItem.map((item) => (
          <CartItem key={item.title} item={item} onRemoveCart={removeItemHandler}/>
        ))}
      </div>
      <div className="cartTotal">
        <span>
          <span className="totalTitle">
            <strong>Total</strong>
          </span>
          $<span>{total}</span>
        </span>
      </div>
      <Button>Purchase</Button>
    </Modal>
  );
};

export default Cart;
