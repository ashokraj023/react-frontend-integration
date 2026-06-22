import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000"
});

export const fetchProducts = () =>
  API.get("/products");

export const createProduct = (product) =>
  API.post("/products", product);

export const deleteProduct = (id) =>
  API.delete(`/products/${id}`);

export const updateProduct = (id, product) =>
  API.put(`/products/${id}`, product);

export const getProductById = (id) =>
  API.get(`/products/${id}`);

export default API;