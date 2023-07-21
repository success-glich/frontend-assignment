import { useQuery } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchProductById,
  fetchProductsByCategory,
} from "../api";

export const useProducts = () => {
  return useQuery("products", fetchProducts);
};

export const userProductById = (productId) => {
  return useQuery(["products", productId], () => fetchProductById(productId));
};

export const useProductsByCategory = (category) => {
  return useQuery(["products", category], () =>
    fetchProductsByCategory(category)
  );
};
