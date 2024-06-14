import { useParams } from 'react-router-dom'
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { products } from '../assets/products'
import { Product } from '../components/interfaces/Product'
import ScrollToTop from "../components/ScrollToTop"
import Thumbs from '../components/Thumbs'
import Description from '../components/Description'
import Checkout from './Checkout'
import NotFound from './NotFound'

export default function Details(){
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
            <div className="flex">
                <div className="flex-column lg:flex">
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