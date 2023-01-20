import { useParams } from "react-router-dom";
import album1 from '../../Image/Album1.png'
import album2 from '../../Image/Album2.png'

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId);
  return (
    <div className="text-center mx-auto">
      <h1>Product Detail</h1>
      <ul>
        <li>
          <img
            src={album1}
            alt="product"
          />

          <p>Music</p>
        </li>
        <li>
          <img
            src={album2}
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
