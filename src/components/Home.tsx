//import { useEffect, useState } from 'react';
import styles from "./Home.module.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard  from "./ProductCard";
import { products } from "../assets/products"

function Home() {
  return (
    <>
      <NavBar />
      <Hero first="tecnología" second="renovada"/>
      <main>
        <div className={styles["product-container"]} id="products">
          {
            products.map((product) =>(
              <ProductCard 
                name={product.name} 
                id={product.id} 
                price={product.price} 
                image={product.images[0]} 
                color={product.colors[0]}
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
