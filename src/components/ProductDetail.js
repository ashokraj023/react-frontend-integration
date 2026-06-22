import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";

function ProductDetail() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    const loadProduct = async () => {

      try {

        const res = await getProductById(id);

        setProduct(res.data);

      } catch (error) {

        console.log(error);

      }

    };

    loadProduct();

  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
  <div className="detail-card">

    <h1>{product.name}</h1>

    <h3>Price: ₹{product.price}</h3>

    <p>
      <strong>In Stock:</strong>{" "}
      {product.inStock ? "Yes ✅" : "No ❌"}
    </p>

  </div>
);
}

export default ProductDetail;