import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Cart from "./views/Cart"
import Product from "./views/Product"
import OnSale from "./views/OnSale"
import NotFound from "./views/NotFound"
import { BASE_URL } from './assets/baseConfig'

function App() {
  const browserRouter = createBrowserRouter([
    {path: BASE_URL, element: <Home />},
    {path: BASE_URL+"product/:productId", element: <Product />},
    {path: BASE_URL+"cart", element: <Cart />},
    {path: BASE_URL+"black-friday", element: <OnSale />},
    {path: "/*", element: <NotFound />}
  ])
  return (
    <>
      <RouterProvider router={browserRouter}/>
    </>
  )
}

export default App
