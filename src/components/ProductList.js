import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../features/products/productsSlice";
import { deleteProduct } from "../services/api";

function ProductList() {

  const dispatch = useDispatch();

  const {
    products,
    loading,
    error,
    pagination,
  } = useSelector((state) => state.products);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts(page));
  }, [dispatch, page]);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);

      // Delete ke baad products reload
      dispatch(fetchProducts(page));

    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container">

      <h1 className="title">🛒 Product List</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <FaSearch className="search-icon" />
      </div>

      <div className="products-grid">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (

            <div
              className="card"
              key={product._id}
            >

              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              ) : (
                <img
                  src="https://via.placeholder.com/250x180?text=No+Image"
                  alt="No Image"
                  className="product-image"
                />
              )}

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
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>

            </div>

          ))

        ) : (

          <h2 className="no-product">
            ❌ No Products Found
          </h2>

        )}

      </div>

      <div className="pagination">

        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          ⬅ Previous
        </button>

        <span>
          Page {page} of {pagination?.totalPages || 1}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === pagination?.totalPages}
        >
          Next ➡
        </button>

      </div>

    </div>
  );
}

export default ProductList;