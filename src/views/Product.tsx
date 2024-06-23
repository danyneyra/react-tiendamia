import { useParams } from 'react-router-dom'
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { Product } from '../interfaces/Product'
import ScrollToTop from "../components/ScrollToTop"
import Thumbs from '../components/Thumbs'
import Description from '../components/Description'
import Checkout from '../components/Checkout'
import NotFound from './NotFound'
import axios from "axios";
import { useEffect, useState } from "react";

export default function Details(){
    const {productId} = useParams()

    const [product, setProduct] = useState<Product>({
        id: "",
        name: "",
        brand: "",
        description: "",
        price: 0,
        stock: 0,
        images: [],
        colors: [],
      });
    
    useEffect(() => {
        axios.get("../products.json")
            .then((res) =>{
                const products: Array<Product> = res.data
                const detailProduct: Product | undefined = products.find(
                    (item) => item.id == productId || item.url == productId
                )
                detailProduct && setProduct(detailProduct)
            })
            .catch((err) => {
                console.log(err)
                
            });
    }, [productId]);

    if (product.id == ""){
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