import ProductProp from "./interfaces/ProductProp"
export default function Description(props: ProductProp) {
    const {product} = props
  return (
    <>
        <div className="flex-column p-2 sm:m-3 lg:w-[340px]">
            <h1 className="text-2xl font-semibold break-words">{product.name}</h1>
            <form className="pt-6">
            <fieldset>
                <label className="text-sm font-semibold" htmlFor="color">Color</label>
                <select
                    className="w-full h-[40px] p-2 my-2 border-solid border-[1px] border-[#eaeaea] rounded-lg box-border"
                >
                {
                    product.colors.map((color) => (
                        <option key={"color-" + color} value={color}>{color}</option>
                    ))
                }
                </select>
            </fieldset>
            </form>
            <div className="leading-5 mt-7">
                <span className="text-sm font-semibold">Descripción</span>
                <p>
                    {product.description}
                </p>
            </div>
        </div>
    </>
  )
}
