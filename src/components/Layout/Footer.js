import { Card } from "react-bootstrap";

const Footer = (props) => {
  return (
    <footer>
      <Card>
        <Card.Title
          className="bg-primary text-white"
          style={{ height: "100px", fontSize: "50px" }}
        >
          The Generics
        </Card.Title>
      </Card>
    </footer>
  );
};

export default Footer;
