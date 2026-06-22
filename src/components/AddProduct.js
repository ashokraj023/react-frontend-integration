import { useState } from "react";
import { createProduct } from "../services/api";

function AddProduct() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await createProduct({
        name,
        price
      });

      alert("Product Added Successfully");

      setName("");
      setPrice("");

    } catch (error) {

      console.log(error);

    }
  };

  return (

  <div className="form-container">

    <h1>Add Product</h1>

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
        required
      />

      <button type="submit">
        Add Product
      </button>

    </form>

  </div>

);
}

export default AddProduct;