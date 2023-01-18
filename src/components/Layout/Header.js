import { useContext } from "react";
import { Container, Navbar, Button, Card } from "react-bootstrap";
import classes from "./Header.module.css";
import CartContext from "../../store/cart-context";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const ctx = useContext(CartContext);
  return (
    <div>
      <Navbar expand="lg" className="text-white bg-dark justify-content-center" fixed="top">
        <Container>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
          <Button onClick={props.onOpenCart}>Cart</Button>
          <span>{ctx.items.length}</span>
        </Container>
      </Navbar>
      <div className="container">
        <Card className="mt-3">
          <Card.Title
            className={classes.bigblue}
            style={{ height: "150px", fontSize: "100px" }}
          >
            The Generics
          </Card.Title>
        </Card>
      </div>
    </div>
  );
};

export default Header;
