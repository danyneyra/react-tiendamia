import { BASE_URL } from '../assets/baseConfig'
import { useState, useRef } from 'react'
import { ProductCart } from '../interfaces/ProductCart';
import { useDispatch } from 'react-redux';
import { addToCart, showSidebar, updateToCart } from '../store/slices/cart';
import { useAppSelector } from '../store/hooks';

export default function Checkout({product}) {

    /* Estados Globales */ 
    const productsInCart = useAppSelector(store => store.cart.products)
    const [quantity, setQuantity] = useState(1);
    const units = useRef<HTMLInputElement>(null);

    /* Disparador */
    const dispatch = useDispatch()

    /* Funciones */
    const manageCart = () => {
        const one = productsInCart.find(each => each.id === product.id);
        
        if (!one) {
            
            //Obteniendo datos de producto a guardar
            const productCart: ProductCart = {
                id: product.id,
                name: product.name,
                brand: product.brand,
                price: product.offert ? product.offert : product.price,
                image: product.images[0],
                color: product.colors[0],
                quantity: quantity
            }

            const updatedProducts = [...productsInCart, productCart];
            localStorage.setItem('cart', JSON.stringify(updatedProducts));

            dispatch(addToCart(productCart))
            dispatch(showSidebar())

        } else {

            const updatedProducts = productsInCart.map( item => {
                if (item.id  === product.id){
                    return {...item, quantity: item.quantity + quantity}
                }
                return item
            })
            localStorage.setItem('cart', JSON.stringify(updatedProducts));

            dispatch(updateToCart(updatedProducts))
            dispatch(showSidebar())
        }


    };

    
  return (
    <>
        <div className="flex p-2 sm:m-3 lg:w-[340px]">
            <div className="p-8 bg-[#ebebeb] sm:w-full">
            <span className="text-[#ff3b3c] text-lg font-medium">Total:</span>
            <h3 className="text-2xl font-semibold pt-3">S/{product.price}</h3>
            <p className="break-words">
                Incluye impuestos.
            </p>
            <ul className="mb-5">
                <li className='flex my-4'>
                    <span className="w-[80px]">
                        <img src={BASE_URL+"truck.png"} alt="Truck"
                    /></span>
                    <span>
                        Agrega el producto al carrito para conocer los costos de
                        envío
                    </span>
                </li>
                <li className='flex my-4'>
                <span className="w-[80px]"
                    ><img src={BASE_URL+"plane.png"} alt="Plane"
                /></span>
                <span>Recibí aproximadamente entre 10 y 15 días hábiles,
                    seleccionando envío normal</span>
                </li>
            </ul>
            <div className="gap-y-5">
                <div className="flex mb-3">
                <input
                    className='h-10 rounded-xl border-0 w-16 mr-2 p-2 box-border text-center'
                    type="number" 
                    min="1"
                    max={product.stock}
                    value={quantity}
                    ref={units}
                    onChange={() => {
                        if (units.current) {
                            const value = parseInt(units.current.value, 10);
                            setQuantity(isNaN(value) ? 0 : Number(value));
                        }
                    }
                        
                    }
                />
                <button 
                    type="button" 
                    className="w-full bg-[#ff3b3c] text-white font-normal border-0 h-10 rounded-xl cursor-pointer"
                    onClick={manageCart}
                >
                    Agregar a Carrito
                </button>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
