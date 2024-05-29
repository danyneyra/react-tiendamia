import { useParams } from 'react-router-dom'
import styles from './Details.module.css'
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { products, Product } from '../assets/products'
import ScrollToTop from "../components/ScrollToTop"
import NotFound from './NotFound'


function Details(){
    const {productId} = useParams()
    let index:number = products.findIndex( item => item.id == productId)
    let product:Product = products[index]

    if (index < 0){
        return (
            <>
                <NotFound />
            </>
        )
    }

    return (
        <>
        <ScrollToTop />
        <NavBar/>
        <main>
            <div className={styles["details-container"]}>
                <div id="details" className={styles["columns-container"]}>
                <section className={styles["product-images-block"]}>
                    <div className={styles["product-images"]}>
                        {
                            product.images.map((image)=>(
                                <div className={styles["product-images-thumbail"]}>
                                    <img
                                        className={styles["mini-img"]}
                                        src={image}
                                        alt={product.name}
                                    />
                                </div>
                            ))
                        }
                        
                    </div>
                    <img
                        className={styles["big-img"]}
                        id="big-img"
                        src={product.images[0]}
                        alt={product.name}
                    />
                </section>
                <div className={styles["product-description-block"]}>
                    <h1 className={styles["product-title"]}>{product.name}</h1>
                    <form className={styles["product-selector"]}>
                    <fieldset className={styles["product-fieldset"]}>
                        <label className={styles["product-label"]} htmlFor="color">Color</label>
                        <select
                        className={styles["product-select"]}
                        id="color"
                        >
                        {
                            product.colors.map((color) => (
                                <option value={color}>{color}</option>
                            ))
                        }
                        </select>
                    </fieldset>
                    </form>
                    <div className={styles["product-description"]}>
                    <span className={styles["product-label"]}>Descripción</span>
                    <p>
                        {product.description}
                    </p>
                    </div>
                </div>
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
                            ><img src="/truck.png" alt="Truck"
                        /></span>
                        <span className={styles["policy-desc"]}>
                            Agrega el producto al carrito para conocer los costos de
                            envío
                        </span>
                        </li>
                        <li>
                        <span className={styles["policy-icon"]}
                            ><img src="/plane.png" alt="Plane"
                        /></span>
                        <span className={styles["policy-desc"]}>Recibí aproximadamente entre 10 y 15 días hábiles,
                            seleccionando envío normal</span>
                        </li>
                    </ul>
                    <div className={styles["checkout-process"]}>
                        <div className={styles["top"]}>
                        <input type="number" min="1" value="1" />
                        <button type="button" className={styles["cart-btn"]}>
                            Añadir al Carrito
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    )
}

export default Details