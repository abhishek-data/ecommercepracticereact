import { useContext } from "react";
import { Container, Navbar, Nav, Button, Card } from "react-bootstrap";
import classes from "./Header.module.css";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const ctx = useContext(CartContext);
  return (
    <div>
      <Navbar expand="lg" className="text-white bg-dark" fixed="top">
        <Container>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
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
