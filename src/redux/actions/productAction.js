import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductById = createAsyncThunk(
  "products/fetchByIdStatus",
  async (productId) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);
