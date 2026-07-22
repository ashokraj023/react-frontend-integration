import { useState } from "react";
import { createProduct } from "../services/api";

function AddProduct() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const formData = new FormData();

      formData.append("name", name);
      formData.append("price", price);

      if (image) {
        formData.append("image", image);
      }

      await createProduct(formData);

      alert("Product Added Successfully");

      setName("");
      setPrice("");
      setImage(null);
      setPreview("");

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
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {

            const file = e.target.files[0];

            setImage(file);

            if (file) {
              setPreview(URL.createObjectURL(file));
            }

          }}
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="preview-image"
          />
        )}

        <button type="submit">
          Add Product
        </button>

      </form>

    </div>

  );

}

export default AddProduct;