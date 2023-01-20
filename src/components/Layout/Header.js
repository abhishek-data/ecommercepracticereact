import { useContext } from "react";
import { Container, Navbar, Button, Card } from "react-bootstrap";
import classes from "./Header.module.css";
import CartContext from "../../store/cart-context";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const ctx = useContext(CartContext);
  return (
    <div>
      <Navbar expand="lg" className={classes.header} fixed="top">
        <Container>
          <NavLink activeClassName={classes.active} to="/home">
            Home
          </NavLink>
          <NavLink activeClassName={classes.active} to="/store">
            Store
          </NavLink>
          <NavLink activeClassName={classes.active} to="/about">
            About
          </NavLink>
          <NavLink activeClassName={classes.active} to="/login">
            Login
          </NavLink>
          <NavLink activeClassName={classes.active} to="/contact">
            Contact us
          </NavLink>
          <Button onClick={props.onOpenCart}>
            Cart<sup>{ctx.items.length > 0?ctx.items.length:''}</sup>
          </Button>
        </Container>
      </Navbar>
      <div className="container">
        <Card className="mt-3">
          <Card.Title
            className={classes.bigblue}
            style={{ height: "150px", fontSize: "100px" }}
          >
            Indian Ocean
          </Card.Title>
        </Card>
      </div>
    </div>
  );
};

export default Header;
