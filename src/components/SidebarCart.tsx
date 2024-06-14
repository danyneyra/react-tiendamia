import { useRef, useEffect, useState } from 'react'
import styles from './SidebarCart.module.css'
import ProductCartMenu from './ProductCartMenu'
import { ProductCart } from './interfaces/ProductCart'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../assets/baseConfig'
//import { useState } from 'react'

interface SidebarCartProps{
    isVisible: boolean
    //update: number
    toggleVisibility: () => void
}

export default function SidebarCart({isVisible, toggleVisibility}: SidebarCartProps) {
    const sidebarMenuCart = useRef<HTMLDivElement>(null)
    const overlay = useRef<HTMLDivElement>(null)
    const cartContent = useRef<HTMLDivElement>(null)
    const [productsInStorage, setProductsInStorage] = useState<ProductCart[]>([]);
    const [heigthContent, setHeigthContent] = useState("450px")

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('cart') || '[]') as ProductCart[];
        setProductsInStorage(storedProducts)

    }, []);

    useEffect(() => {
        //Asignando altura de Cart Content
        const heigthContentCart = (window.innerHeight || document.documentElement.clientHeight) - 166
        setHeigthContent(heigthContentCart.toString()+"px")
    }, [])

    const toggleSidebar = () => {
        if(sidebarMenuCart.current){
            sidebarMenuCart.current.style.right = "-350px"
        }
        if (overlay.current){
            overlay.current.style.display = "none"
        }
        toggleVisibility()
    };
    
  return (
    <>
        <div ref={overlay} onClick={toggleSidebar} style={{display: isVisible ? 'block': 'none'}} className={styles["overlay"]}></div>
        <div ref={sidebarMenuCart} style={{right: isVisible ? '0px': '-350px'}} className={styles["menu-container"]}>
            <div className={styles["menu-title"]}>
                <span>CARRITO DE COMPRAS</span>
                <div className={styles["icon-close-cart"]}>&nbsp;</div>
            </div>
            <div className={styles["menu-line"]}></div>
            <div ref={cartContent} style={{maxHeight: heigthContent}} className={styles["cart__content"]}>
                {
                    productsInStorage.map((product) =>(
                        <ProductCartMenu key={product.id} product={product} />
                    ))
                }
            </div>
            <div className={styles["cart__subtotal-wrapper"]}>
                <div className={styles["cart__subtotal"]}>
                    <div className={styles["cart__subtotal-prices"]}>
                        <span>Subtotal:</span>
                        <span></span>
                    </div>
                    <Link to={BASE_URL + "cart"} className={styles["btn-view-cart"]}>Ver Carrito</Link>
                </div> 
            </div> 
        </div>
    </>
  )
}
