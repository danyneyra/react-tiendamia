import { createAction } from "@reduxjs/toolkit";

const captureText = createAction(
  "captureText",
  (obj) => ({ payload: { text: obj.text } })
);

const calculateTotal = createAction(
  "calculateTotal",
  (obj) => ({ payload: { products: obj.products } })
);

const productsCart = createAction(
  "productsCart",
  (obj) => ({ payload: { productsCart: obj.productsCart}})
)

const isSidebarVisible = createAction(
  "isSidebarVisible",
  (obj) => ({ payload: { isSidebarVisible: obj.isSidebarVisible}})
)

export { captureText, calculateTotal, productsCart, isSidebarVisible };
