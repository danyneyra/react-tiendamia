//import { useEffect, useState } from 'react';
import styles from "./Home.module.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard  from "./ProductCard";
import { products } from "../assets/products"
//import { useState } from "react";

function Home() {

  return (
    <>
      <NavBar />
      <Hero first="tecnología" second="renovada"/>
      <main>
        <div className="w-full inline-flex justify-end">
          <div className={styles["products-sort"]}>
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
