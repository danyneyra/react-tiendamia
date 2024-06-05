import { Link } from 'react-router-dom'
import styles from './OnSaleCard.module.css'
import { BASE_URL } from '../assets/baseConfig'

export default function OnSaleCard(props) {
    const {name, price, image, url, offert, discount} = props
  return (
    <>
        <Link className={styles["sale-card-conatiner"]} to={BASE_URL + "product/"+ url}>
           
            <img className={styles["card_images"]}src={image} alt="" />
            <div className={styles.line}></div>
            <div className={styles["card-info"]}>
                <span className={styles["card-info_name"]}>{name}</span>
                <span className={styles["card-info_offert"]}>Antes S/{price}</span>
                <div className={styles.prices}>
                    <h2 className={styles["card-info_price"]}>S/ {offert ? offert: price}</h2>
                    <span className={styles["card-info_discount"]}>{discount}% OFF</span>
                </div>
                <span className={styles["card-info_text"]}>¡Compra y paga en soles!</span>
            </div>
        </Link>
    </>
  )
}
