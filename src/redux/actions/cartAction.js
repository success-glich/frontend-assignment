export const addToCard = (state, action) => {
  const newItem = action.payload;
  const existingItem = state.cartItems.find((item) => item.id === newItem.id);
  state.totalQuantity++;

  if (!existingItem) {
    state.cartItems.push({
      id: newItem.id,
      productName: newItem.productName,
      imgUrl: newItem.imgUrl,
      price: newItem.price,
      quantity: 1,
    });
  } else {
    existingItem.quantity++;
    existingItem.totalPrice =
      Number(existingItem.totalPrice) + Number(newItem.price);
  }
  state.totalAmount = state.cartItems.reduce((total, item) => {
    total += Number(item.quantity) * Number(item.price);
    return total;
  }, 0);
  localStorage.setItem("cart", JSON.stringify(state));
};

// export const