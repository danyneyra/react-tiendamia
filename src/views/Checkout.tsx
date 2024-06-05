import styles from './Checkout.module.css'
import { BASE_URL } from '../assets/baseConfig'
import { useState, useEffect, useRef } from 'react'

interface ProductCart {
    id:string, 
    name:string, 
    brand: string,
    price:string,
    quantity:number, 
    image:string, 
    color:string,
  }
export default function Checkout({product}) {

    const [quantity, setQuantity] = useState(1);
    const units = useRef<HTMLInputElement>(null);
    const [productsInStorage, setProductsInStorage] = useState<ProductCart[]>([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('cart') || '[]') as ProductCart[];
        setProductsInStorage(storedProducts)
    },[product.id]);

    const manageCart = () => {
        const one = productsInStorage.find(each => each.id === product.id);
        
        if (!one) {
            
            //Obteniendo datos de producto a guardar
            const productCart: ProductCart = {
                id: product.id,
                name: product.name,
                brand: product.brand,
                price: product.offert ? product.offert : product.price,
                image: product.images[0],
                color: product.colors[0],
                quantity: quantity
            }

            const updatedProducts = [...productsInStorage, productCart];
            setProductsInStorage(updatedProducts);
            localStorage.setItem('cart', JSON.stringify(updatedProducts));
        } else {

            //const updatedProducts = productsInStorage.filter(each => each.id == product.id);
            const updatedProducts = productsInStorage.map( item => {
                if (item.id  === product.id){
                    return {...item, quantity: item.quantity + quantity}
                }
                return item
            })
            setProductsInStorage(updatedProducts);
            localStorage.setItem('cart', JSON.stringify(updatedProducts));
        }
    };

    
  return (
    <>
        <div className={styles["product-checkout-block"]}>
            <div className={styles["checkout-container"]}>
            <span className={styles["checkout-total-label"]}>Total:</span>
            <h3 id="price" className={styles["checkout-total-price"]}>S/{product.price}</h3>
            <p className={styles["checkout-description"]}>
                Incluye impuestos.
            </p>
            <ul className={styles["checkout-policy-list"]}>
                <li>
                <span className={styles["policy-icon"]}
                    ><img src={BASE_URL+"truck.png"} alt="Truck"
                /></span>
                <span className={styles["policy-desc"]}>
                    Agrega el producto al carrito para conocer los costos de
                    envío
                </span>
                </li>
                <li>
                <span className={styles["policy-icon"]}
                    ><img src={BASE_URL+"plane.png"} alt="Plane"
                /></span>
                <span className={styles["policy-desc"]}>Recibí aproximadamente entre 10 y 15 días hábiles,
                    seleccionando envío normal</span>
                </li>
            </ul>
            <div className={styles["checkout-process"]}>
                <div className={styles["top"]}>
                <input 
                    id="input-quantity"
                    type="number" 
                    min="1"
                    max={product.stock}
                    value={quantity}
                    ref={units}
                    onChange={() => {
                        if (units.current) {
                            const value = parseInt(units.current.value, 10);
                            setQuantity(isNaN(value) ? 0 : Number(value));
                        }
                    }
                        
                    }
                />
                <button 
                    type="button" 
                    className={styles["cart-btn"]}
                    onClick={manageCart}
                >
                    Agregar a Carrito
                </button>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
