import { Link } from "react-router-dom";
import { BASE_URL } from "../assets/baseConfig";
import { ProductCart } from "../interfaces/ProductCart";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateToCart } from "../store/slices/cart";

export default function ProductCartMenu({ product }) {

  /* Referencias */
  const units = useRef<HTMLInputElement>(null);
  const contentProduct = useRef<HTMLDivElement>(null);

  /* Disparador */
  const dispatch = useDispatch()

  /* Funciones */

  //Eliminar Producto
  const deleteProduct = () => {
    const storedProducts = JSON.parse(localStorage.getItem("cart") || "[]") as ProductCart[]
    const updateStoredProducts = storedProducts.filter(
      (item) => item.id != product.id
    );
    localStorage.setItem("cart", JSON.stringify(updateStoredProducts));
    if (contentProduct.current) {
      contentProduct.current.style.display = "none";
    }
    dispatch(updateToCart(updateStoredProducts))
  }

  //Cambiar cantidad
  const manageUnits = () => {
    let productsOnCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as ProductCart[];
    const one = productsOnCart.find((each) => each.id === product.id);
    if (one != null && units.current != null) {
      one.quantity = Number(units.current.value);
      localStorage.setItem("cart", JSON.stringify(productsOnCart));
      dispatch(updateToCart(productsOnCart))
    }
  }
  

  return (
    <>
      <div ref={contentProduct} className="flex">
        <div className="w-[120px] h-[120px]">
          <Link to={BASE_URL + "product/" + product.id}>
            <img src={product.image} alt={product.name} />
          </Link>
        </div>
        <div className="flex flex-col">
          <span className="text-[#878787] text-xs">{product.brand}</span>
          <span className="text-[#222] text-sm">{product.name}</span>
          <span className="text-[#878787] text-xs">
            {product.color}
          </span>
          <span className="text-sm">
            S/{product.price}
          </span>
          <div className="flex items-center gap-2">
            <input
              autoComplete="off"
              className="bg-[#fdfdfd] border-[1px] border-[#898989] rounded-xl text-center max-w-[50px]"
              min="1"
              name="quantity"
              onChange={manageUnits}
              ref={units}
              type="number"
              value={product.quantity}
            ></input>
            <div
              onClick={deleteProduct}
              className="w-5 h-5 cursor-pointer"
              title="Eliminar"
            >
              <img src={BASE_URL + "icon-delete-cart.svg"} alt="" />
            </div>
          </div>
          <div className="flex gap-2"></div>
        </div>
      </div>
    </>
  );
}
