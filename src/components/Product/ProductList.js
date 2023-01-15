
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

  return (
    <div>
      {productsArr.map((item) => {
        return (
          <div>
            <p>{item.title}</p>
            <img src={item.imageUrl} alt="productImage" />
            <p>{`$${item.price}`}</p>
            <button>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
