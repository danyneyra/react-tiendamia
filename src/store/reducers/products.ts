import { createReducer } from "@reduxjs/toolkit";
import { captureText, calculateTotal, productsCart, isSidebarVisible } from "../actions/products";
import { ProductCart } from "../../interfaces/ProductCart";


interface ProductsState{
    text: string,
    total: number,
    productsCart: ProductCart[],
    isSidebarVisible: boolean
}

const initialState:ProductsState = { text: "", total: 0, productsCart: [], isSidebarVisible: false };

const productsReducer = createReducer(initialState, (build) =>
  build
    .addCase(captureText, (state, action) => {
      const newState = {
        ...state,
        text: action.payload.text,
      };
      return newState;
    })
    .addCase(calculateTotal, (state, action) => {
      const subtotals = action.payload.products.map((each) => each.price * each.quantity);
      const total = subtotals.reduce((acc: number, val: number) => acc + val);
      const newState = {
        ...state,
        total,
      };
      return newState;
    })
    .addCase(productsCart, (state, action) =>{
        const productsCart = action.payload.productsCart
        const newState = {
            ...state,
            productsCart,
        }
        return newState
    })
    .addCase(isSidebarVisible, (state, action) =>{
      const isSidebarVisible = action.payload.isSidebarVisible
      const newState = {
          ...state,
          isSidebarVisible,
      }

      // const toggleSidebar = () => {
      //   setIsSidebarVisible((prev) => !prev);
      //   if (isSidebarVisible){
      //     document.body.style.overflow = 'auto'
      //   }else{
      //     document.body.style.overflow = 'hidden'
      //   }
      // }

      return newState
  })
);

export default productsReducer;
