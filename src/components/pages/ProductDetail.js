import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId);
  return (
    <div className="text-center mx-auto">
      <h1>Product Detail</h1>
      <ul>
        <li>
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
            alt="product"
          />

          <p>Music</p>
        </li>
        <li>
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
            alt="product"
          />
        </li>
      </ul>
      <section>
        <h6>Product Review</h6>
        <p>**** Awosome Music</p>
      </section>
    </div>
  );
};

export default ProductDetail;
