import styles from './OnSale.module.css'
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import OnSaleCard from '../components/OnSaleCard';
import { products } from "../assets/products"
import ScrollToTop from '../components/ScrollToTop';

export default function OnSale() {
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
