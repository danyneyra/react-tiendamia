import ProductProp from "../interfaces/ProductProp"

export default function Thumbs(props: ProductProp) {
    const {product} = props
  return (
    <>
        <section className="flex p-2 sm:m-3 sm:justify-around lg:w-[340px]">
            <div>
                {
                    product.images.map((image)=>(
                       
                        <div key={"thumb-" + image} className="w-[40px] h-[40px] max-w-full border-2 border-[#eaeaea] m-1 overflow-hidden flex hover:border-[#ff3b3c] hover:shadow-md hover:shadow-red-500">
                            <img
                                className=" w-[40px] h-[40px] object-cover"
                                src={image}
                                alt={product.name}
                            />
                        </div>
                    ))
                }
                
            </div>
            <img
                className="w-[320px] object-cover sm:w-[420px] lg:w-[280px] lg:h-[280px]"
                src={product.images[0]}
                alt={product.name}
            />
        </section>
    </>
  )
}
