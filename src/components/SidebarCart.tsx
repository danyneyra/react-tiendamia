import styles from './SidebarCart.module.css'

export default function SidebarCart() {
  return (
    <>
        <div className={styles["overlay"]}></div>
        <div className={styles["menu-container"]}>
            <div className={styles["menu-title"]}>
                <span>CARRITO DE COMPRAS</span>
                <div className={styles["icon-close-cart"]}>&nbsp;</div>
            </div>
            <div className={styles["menu-line"]}></div>
            <div className={styles["cart__content"]}></div>
            <div className={styles["cart__subtotal-wrapper"]}>
                <div className={styles["cart__subtotal"]}>
                    <div className={styles["cart__subtotal-prices"]}>
                        <span>Subtotal:</span>
                        <span></span>
                    </div>
                    <a href="./cart.html" className={styles["btn-view-cart"]}>Ver Carrito</a>
                </div> 
            </div> 
        </div>
    </>
  )
}
