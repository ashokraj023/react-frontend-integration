import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProductById,
  updateProduct
} from "../services/api";

function EditProduct() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {

    const loadProduct = async () => {

      try {

        const res = await getProductById(id);

        setName(res.data.name);
        setPrice(res.data.price);

      } catch (error) {

        console.log(error);

      }

    };

    loadProduct();

  }, [id]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await updateProduct(id, {
        name,
        price
      });

      alert("Product Updated Successfully");

      navigate("/");

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="form-container">

      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">
          Update Product
        </button>

      </form>

    </div>

  );

}

export default EditProduct;