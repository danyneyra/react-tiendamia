import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Cart from "./views/Cart"
import Product from "./views/Details"
import NotFound from "./views/NotFound"

function App() {

  const browserRouter = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/details/:productId", element: <Product />},
    {path: "/cart", element: <Cart />},
    {path: "/*", element: <NotFound />}
  ])
  return (
    <>
      <RouterProvider router={browserRouter}/>
    </>
  )
}

export default App
