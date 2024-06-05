import styles from './ProductCard.module.css'
import { Link } from "react-router-dom";
import { BASE_URL } from '../assets/baseConfig';

function ProductCard(props){
  const {name, color, price, image, url, discount, offert}= props

    return (
        <>
            <Link className={styles["product-card"]} to={BASE_URL + "product/"+ url}>
            <img
              className={styles["product-img"]}
              src={image}
              alt={name}
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>{name}</span>
              <span className={styles["product-description"]}>{color}</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>S/{offert ? offert : price}</span>
                <span className={styles["product-discount"]}>{offert ? discount+"% OFF": ""}</span>
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