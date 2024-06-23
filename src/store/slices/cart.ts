import { createSlice } from "@reduxjs/toolkit";
import { ProductCart } from "../../interfaces/ProductCart";

interface CartState {
  products: ProductCart[];
  isVisible: boolean;
  total: number,
  quantity: number
}

const initialState: CartState = {
  products: [],
  isVisible: false,
  total: 0,
  quantity: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{
    addToCart: (state, action) => {
      state.products.push(action.payload)
      const subtotals = state.products.map((each) => each.price * each.quantity);
      const total = subtotals.reduce((acc: number, val: number) => acc + val);
      state.total = total
      state.quantity = state.products.reduce((total, product) => total + product.quantity, 0)
    },
    updateToCart: (state, action) => {
      const products = action.payload
      const subtotals = products.map((each) => each.price * each.quantity);
      if (subtotals.length > 0){
        const total = subtotals.reduce((acc: number, val: number) => acc + val);
        state.total = total
      }else{
        state.total = 0
      }
      state.products = products
      state.quantity = state.products.reduce((total, product) => total + product.quantity, 0)
    },
    showSidebar: (state) => {
      state.isVisible = true;
    },
    hideSidebar: (state) => {
      state.isVisible = false;
    },
  }
})

export const { addToCart, updateToCart, showSidebar, hideSidebar } = cartSlice.actions;
export default cartSlice.reducer;