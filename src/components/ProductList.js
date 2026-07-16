import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchProducts,
  deleteProduct
} from "../services/api";

function ProductList() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadProducts = async () => {

      try {

        const res = await fetchProducts();

        setProducts(res.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    loadProducts();

  }, []);

  const handleDelete = async (id) => {

    try {

      await deleteProduct(id);

      setProducts(
        products.filter(
          (product) => product._id !== id
        )
      );

    } catch (error) {

      console.log(error);

    }

  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">

      <h1 className="title">🛒 Product List</h1>

      <div className="products-grid">

        {products.map((product) => (

          <div
            className="card"
            key={product._id}
          >

            <h3>
              <Link to={`/product/${product._id}`}>
                {product.name}
              </Link>
            </h3>
  

            <p>₹{product.price}</p>

            <Link to={`/edit/${product._id}`}>
  <button className="edit-btn">
    Edit
  </button>
</Link>

            <button
              className="delete-btn"
              onClick={() =>
                handleDelete(product._id)
              }
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ProductList;