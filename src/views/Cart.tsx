import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import { useState, useEffect } from "react";
import { ProductCart } from "../components/interfaces/ProductCart";


export default function Cart() {
    const [productsInStorage, setProductsInStorage] = useState<ProductCart[]>([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('cart') || '[]') as ProductCart[];
        setProductsInStorage(storedProducts)

    }, []);

  return (
    <>
      <NavBar />
      <Hero first="my" second="cart" />
      <main className="w-full flex flex-col items-start md:flex-row p-[20px]">
        <div className="flex flex-col">
            {
                productsInStorage.map((product) =>(
                    <CartCard key={product.id} product={product} />
                ))
            }
        </div>
        
        <CartResume total={"1500"} />
      </main>
      <Footer />
    </>
  );
}
