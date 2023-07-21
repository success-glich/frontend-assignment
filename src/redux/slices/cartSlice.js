import { createSlice } from "@reduxjs/toolkit";
import { addToCard } from "../actions/cartAction";
const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: addToCard,
  },
});

export default cartSlice.reducer;
export const { addItem } = cartSlice.actions;
