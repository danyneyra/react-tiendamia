import styles from './Thumbs.module.css'

export default function Thumbs(props) {
    const {product} = props
  return (
    <>
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
    </>
  )
}
