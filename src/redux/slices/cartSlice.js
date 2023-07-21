import { createSlice } from "@reduxjs/toolkit";
import {
  addToCard,
  getItemFromLocalStorage,
  removeFromCard,
} from "../actions/cartAction";
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
    removeItem: removeFromCard,
    getItem: getItemFromLocalStorage,
  },
});

export default cartSlice.reducer;
export const { addItem, getItem, removeItem } = cartSlice.actions;
