import { useRef } from "react"
import { ProductCart } from "./interfaces/ProductCart";

export default function CartCard({product}) {

  const units = useRef<HTMLInputElement>(null);
  const manageUnits = () => {
    let productsOnCart = JSON.parse(localStorage.getItem('cart') || '[]') as ProductCart[]
    const one = productsOnCart.find((each) => each.id === product.id)
    if (one != null && units.current != null){
      one.quantity = Number(units.current.value);
      localStorage.setItem("cart", JSON.stringify(productsOnCart));
    }
  };


  return (
    <article className="w-[340px] lg:w-[680px] md:h-[220px] flex justify-between items-center rounded-md px-[30px] py-[15px] lg:py-[30px] m-[10px] bg-[#f2f2f2]">
      <img
        className="hidden lg:inline-block w-[140px] h-[140px] rounded-md object-center"
        src={product.image}
        alt="ipad"
      />
      <div className="flex justify-center flex-grow items-center p-2">
        <div className="lg:h-[120px] flex flex-col gap-1 grow p-[10px]">
          <span className="font-semibold text-[16px]">{product.name}</span>
          <span className="text-[12px]">Color: {product.color}</span>
          <input
            className="w-[70px] rounded-lg border-[1px] border-[#cecece] p-[5px] pl-[15px] text-[14px]"
            type="number"
            name="quantity"
            defaultValue={product.quantity}
            min="1"
            ref={units}
            onChange={manageUnits}
            id={product.id}
          />
        </div>
        <strong className="font-semibold text-start lg:text-end text-[16px] px-[10px]">S/{product.price}</strong>
      </div>
    </article>
  );
}
