import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { CloseButton, Button } from "react-bootstrap";
import { useContext} from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext)

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
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.title}
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
          $<span>{cartCtx.totalAmount}</span>
        </span>
      </div>
      <Button>Purchase</Button>
    </Modal>
  );
};

export default Cart;
