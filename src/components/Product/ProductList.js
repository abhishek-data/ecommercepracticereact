import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";

const ProductList = (props) => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const ctx = useContext(CartContext);

  return (
    <div>
      {productsArr.map((item, index) => {
        return (
          <div className="text-center mx-auto" key={index}>
            <p>Album {index + 1}</p>
            <Link to='/store/p1'>
              <img src={item.imageUrl} alt="productImage" />
            </Link>

            <p>{`₹${item.price}`}</p>
            <Button onClick={() => ctx.addItem({ ...item, quantity: 1 })}>
              Add To Cart
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
