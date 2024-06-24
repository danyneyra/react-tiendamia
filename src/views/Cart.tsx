import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import { useAppSelector } from "../store/hooks";
import { BASE_URL } from "../assets/baseConfig";


export default function Cart() {
    const productsInCart = useAppSelector(store => store.cart.products)
    const quantityCart = useAppSelector(store => store.cart.quantity)

  return (
    <>
      <NavBar />
      <Hero first="mi" second="Carrito" visible={1} />
      <main className="w-full flex flex-col items-start md:flex-row p-[20px]">
        <div className="flex flex-col">
            { quantityCart < 1 && (
                    <div className='className="w-[340px] lg:w-[680px] md:h-[220px] flex flex-col justify-between items-center rounded-md px-[30px] py-[15px] lg:py-[30px] m-[10px] bg-[#f2f2f2]'>
                        <img className='w-20 h-20' src={BASE_URL + "cart-empty-dark.svg"} alt="" />
                        <p className='font-semibold'>Tu carrito está vacío</p>
                    </div>
                ) }
            {
                productsInCart.map((product) =>(
                    <CartCard key={product.id} product={product} />
                ))
            }
        </div>
        
        <CartResume />
      </main>
      <Footer />
    </>
  );
}
