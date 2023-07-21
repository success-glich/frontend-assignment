import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

export const fetchProductById = async (productId) => {
  const { data } = await api.get(`/products/${productId}`);
  console.log(data);
  return data;
};
export const fetchProductsByCategory = async (category) => {
  const { data } = await api.get(`/products/category/${category}`);
  return data;
};
