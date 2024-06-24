import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard  from "../components/ProductCard";
import { Product } from "../interfaces/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";


function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const text = useAppSelector(store => store.products.textFind)

  useEffect(() => {
    axios.get("products.json")
      .then((res) => {
        const filterProducts = res.data.filter((each:Product )=> each.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
        setProducts(filterProducts)
      })
      .catch((err) => console.log(err));
  }, [text]);

  return (
    <>
      <NavBar />
      <Hero first="tecnología" second="renovada" visible={1}/>
      <main className="w-full flex flex-col justify-center items-center p-5">

        <div className="w-full inline-flex justify-end">
          <div className="flex justify-end p-2 gap-2 items-center">
            <span>Ordenar por:</span>
            <select name="filter-sort" title="Ordernar productos">
              <option value="default">-</option>
              <option value="ascendente">Nombre ascendente</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 justify-center pb-2 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:gap-6">
          {
            products.map((product) =>(
              <ProductCard 
                key={product.id}
                name={product.name} 
                id={product.id} 
                price={product.price} 
                image={product.images[0]}
                color={product.colors[0]}
                url={product.url}
                discount={product.discount}
                offert={product.offert}
              />
            ))
          } 
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
