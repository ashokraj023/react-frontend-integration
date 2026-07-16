import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000"
});

// Automatically send JWT token with every request
API.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  console.log("========== Axios Interceptor ==========");
  console.log("Token:", token);

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  console.log("Final Headers:", config.headers);
  console.log("======================================");

  return config;

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