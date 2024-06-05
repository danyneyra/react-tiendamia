import { useParams } from 'react-router-dom'
import styles from './Product.module.css'
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { products, Product } from '../assets/products'
import ScrollToTop from "../components/ScrollToTop"
import Thumbs from '../components/Thumbs'
import Description from '../components/Description'
import Checkout from './Checkout'
import NotFound from './NotFound'

function Details(){
    const {productId} = useParams()
    let index:number = products.findIndex( item => item.id == productId || item.url == productId)
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
                    <Thumbs product={product}/>
                    <Description product={product}/>
                    <Checkout product={product} />
                </div>
            </div>
        </main>
        <Footer/>
        </>
    )
}

export default Details