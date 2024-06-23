import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./views/Home"
import Cart from "./views/Cart"
import Product from "./views/Product"
import OnSale from "./views/OnSale"
import NotFound from "./views/NotFound"
import { BASE_URL } from './assets/baseConfig'
import { Provider } from "react-redux"
import { store } from "./store"

function App() {
  const browserRouter = createBrowserRouter([
    {path: BASE_URL, element: <Home />},
    {path: BASE_URL+"product/:productId", element: <Product />},
    {path: BASE_URL+"cart", element: <Cart />},
    {path: BASE_URL+"black-friday", element: <OnSale />},
    {path: "/*", element: <NotFound />}
  ])
  return (
    <Provider store={store}>
      <RouterProvider router={browserRouter}/>
    </Provider>
  )
}

export default App
