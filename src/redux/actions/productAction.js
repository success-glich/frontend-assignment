import { createAsyncThunk } from "@reduxjs/toolkit";
import { useQuery } from "react-query";
import axios from "axios";

// Fetch products using react-query's useQuery hook
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const { data } = await axios.get(process.env.REACT_APP_BASE_URL);
//     return data;
//   }
// );

// Fetch a single product by ID using react-query's useQuery hook
// export const fetchProductById = createAsyncThunk(
//   "products/fetchByIdStatus",
//   async (productId) => {
//     const response = await axios.get(
//       process.env.REACT_APP_BASE_URL + `/${productId}`
//     );
//     return response.data;
//   }
// );

// You can also use the useQuery hook directly in your components
export const useFetchProducts = () => {
  return useQuery("products", async () => {
    const { data } = await axios.get(process.env.REACT_APP_BASE_URL);
    return data;
  });
};
