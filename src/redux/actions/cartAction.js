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

export const removeFromCard = (state, action) => {
  const id = action.payload;
  const existingItem = state.cartItems.find((item) => item.id === id);
  if (existingItem) {
    state.cartItems = state.cartItems.filter((item) => item.id !== id);
    state.totalQuantity -= 1;
    state.totalAmount -= existingItem.price * existingItem.quantity;
  }
  localStorage.setItem("cart", JSON.stringify(state));
};

export const getItemFromLocalStorage = (state) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    state.totalAmount = cart.totalAmount;
    state.totalQuantity = cart.totalQuantity;
    cart.cartItems.forEach((item) => {
      state.cartItems.push(item);
    });
  }
};
