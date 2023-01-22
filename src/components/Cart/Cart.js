import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { CloseButton, Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./CartItem.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);


  return (
    <Modal>
      <CloseButton onClick={props.onCloseCart} />
      <h5 className="heading">CART</h5>
      <div className="cart-row">
        <span className="cart-item cart-header cart-column">ITEM</span>
        <span className="cart-price cart-header cart-column">PRICE</span>
        <span className="cart-quantity cart-header cart-column">QUANTITY</span>
      </div>
      <div>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item._id}
            item={item}
            onRemoveCart={cartCtx.removeItem}
          />
        ))}
      </div>
      <div className="cartTotal">
        <span>
          <span className="totalTitle">
            <strong>Total</strong>
          </span>
          ₹<span>{cartCtx.totalAmount}</span>
        </span>
      </div>
      <Button>Purchase</Button>
    </Modal>
  );
};

export default Cart;
