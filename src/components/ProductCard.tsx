import styles from './ProductCard.module.css'
import { Link } from "react-router-dom";

function ProductCard(props){
    return (
        <>
            <Link className={styles["product-card"]} to={"/details/"+props.id}>
            <img
              className={styles["product-img"]}
              src={props.image}
              alt={props.name}
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>{props.name}</span>
              <span className={styles["product-description"]}>{props.color}</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>{props.price}</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </Link>
        </>
    )
}

export default ProductCard