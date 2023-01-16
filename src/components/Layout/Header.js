import { Fragment } from "react";
import { Container, Navbar, Nav, Button, Card } from "react-bootstrap";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <Navbar expand="lg" className="text-white bg-dark">
        <Container>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Button onClick={props.onOpenCart}>Cart</Button>
        </Container>
      </Navbar>
      <Card>
        <Card.Title className={classes.bigblue}  style={{ height: "200px", fontSize:"100px"}}>
          The Generics
        </Card.Title>
      </Card>
    </Fragment>
  );
};

export default Header;
