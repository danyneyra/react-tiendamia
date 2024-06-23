import styles from './OnSale.module.css'
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import OnSaleCard from '../components/OnSaleCard';
import ScrollToTop from '../components/ScrollToTop';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Product } from '../interfaces/Product';

export default function OnSale() {
  
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    axios.get("products.json")
      .then((res) => {
        const products = res.data
        setProducts(products)
      })
      .catch((err) => console.log(err));
  }, [products]);

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main className={styles.onsale}>
        <div className={styles["product-container"]}>
          {
            products.map((product) =>(
              product.offert ?
              <OnSaleCard 
                key={product.id}
                name={product.name} 
                id={product.id} 
                price={product.price} 
                image={product.images[0]}
                color={product.colors[0]}
                url={product.url}
                offert={product.offert}
                discount={product.discount}
              />
              : ""
            ))
          } 
        </div>
      </main>
      <Footer />
    </>
  )
}
