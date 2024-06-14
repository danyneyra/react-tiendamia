import { Link } from 'react-router-dom'
import styles from './ProductCardMenu.module.css'
import { BASE_URL } from '../assets/baseConfig'
import { ProductCart } from './interfaces/ProductCart'
import { useRef } from 'react'

export default function ProductCartMenu({product}) {

  const contentProduct = useRef<HTMLDivElement>(null)

  const deleteProduct = () =>{
    const storedProducts = JSON.parse(localStorage.getItem('cart') || '[]') as ProductCart[]
    const updateStoredProducts = storedProducts.filter(item => item.id != product.id)
    localStorage.setItem('cart', JSON.stringify(updateStoredProducts))
    if (contentProduct.current){
      contentProduct.current.style.display = 'none'
      contentProduct.current.remove()
    }
  }

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
    <>
        <div ref={contentProduct} className={styles["cart-product"]}>
            <div className={styles["cart-product__image"]}>
              <Link to={BASE_URL + "product/"+ product.id}> 
                <img src={product.image} alt={product.name}/>
                </Link>
            </div>
            <div className={styles["cart-product__info"]}>
                <span className={styles["product__info-brand"]}>{product.brand }</span>
                <span className={styles["product__info-name"]}>{product.name }</span>
                <span className={styles["product__info-variant"]}>{product.color}</span>
                <span className={styles["product__info-price"]}>S/{product.price}</span>
                <div className={styles["product__info-quantity"]}>
                  <input ref={units} onChange={manageUnits} className={styles["inp-qty-cart"]} type="number" min="1" placeholder="1" value={product.quantity}></input>
                  <div onClick={deleteProduct} className={styles["icon-delete-cart"]} title="Eliminar">&nbsp;</div>
                </div>
                <div className={styles["product__info-options"]}>
                </div>
            </div>
        </div>
    </>
  )
}
