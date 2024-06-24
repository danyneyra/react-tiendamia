import { useRef, useEffect, useState } from 'react'
import ProductCartMenu from './ProductCartMenu'
import { ProductCart } from '../interfaces/ProductCart'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../assets/baseConfig'
import { useDispatch } from "react-redux";
import { useAppSelector } from '../store/hooks'
import { hideSidebar, updateToCart } from '../store/slices/cart'

export default function SidebarCart() {
    /* Estados globales */
    const sidecartVisible = useAppSelector(store => store.cart.isVisible)
    const productsInCart = useAppSelector(store => store.cart.products)
    const quantityCart = useAppSelector(store => store.cart.quantity);
    const total = useAppSelector(store => store.cart.total);

    /*Estados Locales */
    const [heigthContent, setHeigthContent] = useState("450px")
    const [totalCart, setTotalCart] = useState(0)

    /* Referencias */ 
    const sidebarMenuCart = useRef<HTMLDivElement>(null)
    const overlay = useRef<HTMLDivElement>(null)
    const cartContent = useRef<HTMLDivElement>(null)

    /* Disparador */
    const dispatch = useDispatch();
    
    /* Funciones */
    const toggleSidebar = () => {
        //STYLES
        //Ocultar Sidebar
        if(sidebarMenuCart.current){
            sidebarMenuCart.current.style.right = "-350px"
        }
        //Ocultar Overlay
        if (overlay.current){
            overlay.current.style.display = "none"
        }
        //Mostrar Scroll Body
        document.body.style.overflow = 'auto'

        //DISPATCH
        //Ocultar Sidebar
        dispatch(hideSidebar())
    };

    useEffect(() => {
        
        const storedProducts = JSON.parse(localStorage.getItem('cart') || '[]') as ProductCart[];
        if (storedProducts.length > 0){
            const subtotals = storedProducts.map((each) => each.price * each.quantity);
            const total = subtotals.reduce((acc: number, val: number) => acc + val);
            setTotalCart(total) 
            dispatch(updateToCart(storedProducts))
        }
        //Asignando altura de Cart Content
        const heigthContentCart = (window.innerHeight || document.documentElement.clientHeight) - 166
        setHeigthContent(heigthContentCart.toString()+"px")
    }, [])

    /* UseEffect */
    useEffect(() => {
        //Comprobar si hay cambios en el carrito
        setTotalCart(total)
        console.log('Update Cart')
    }, [productsInCart])
    
    
  return (
    <>
        <div ref={overlay} onClick={toggleSidebar} style={{display: sidecartVisible ? 'block': 'none'}} className=" hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[998]"></div>
        <div ref={sidebarMenuCart} style={{right: sidecartVisible ? '0px': '-350px'}} className="bg-white fixed top-0 -righ-[350px] w-[350px] h-full transition-right duration-300 ease-ease z-[999]">
            <div className="flex justify-between p-4">
                <span>CARRITO DE COMPRAS</span>
                <div>&nbsp;</div>
            </div>
            <div className="border-[#e6e6e6] border-b-[1px]"></div>
            
            { quantityCart < 1 && (
                <div className='flex  flex-col items-center p-4 gap-2'>
                    <img className='w-20 h-20' src={BASE_URL + "cart-empty-dark.svg"} alt="" />
                    <p className='font-medium'>Tu carrito está vacío</p>
                </div>
            ) }
                
            <div ref={cartContent} style={{maxHeight: heigthContent}} className="flex flex-col p-2 gap-2 overflow-y-auto max-h-[450px]">
                {
                    productsInCart.map(product =>(
                        <ProductCartMenu key={product.id} product={product} />
                    ))
                }
            </div>
            <div className="fixed bottom-0 z-[1000] bg-white">
                <div className="flex flex-col p-5 gap-2 w-[350px] shadow-3xl">
                    <div className="flex justify-between font-semibold text-lg">
                        <span>Total:</span>
                        <span>S/{totalCart}</span>
                    </div>
                    <Link onClick={toggleSidebar} to={BASE_URL + "cart"} className="bg-[#ff3b3c] text-white border-0 p-2 text-center">Ver Carrito</Link>
                </div> 
            </div> 
        </div>
    </>
  )
}
