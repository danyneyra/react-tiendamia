import { createSlice } from "@reduxjs/toolkit";

interface ProdutcsState {
  textFind: string
}

const initialState: ProdutcsState = {
  textFind: ""
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers:{
    textFind: (state, action) => {
      state.textFind = action.payload;
    },
  }
})

export const { textFind} = productsSlice.actions;
export default productsSlice.reducer;