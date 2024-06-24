import { Link, useLocation } from "react-router-dom";
import NavButton from "./NavButton";
import SidebarCart from "./SidebarCart";
import { BASE_URL } from '../assets/baseConfig'
import { useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { showSidebar } from "../store/slices/cart";
import { textFind } from "../store/slices/products";

export default function NavBar() {

  //Comprobar ruta de web
  const location = useLocation();
  const pathname = location.pathname;

  /* Estados globales */

  //Visibilidad de Sidebar
  const sidecartVisible = useAppSelector(store => store.cart.isVisible)
  //Total de Productos en carrito
  const quantityCart = useAppSelector(store => store.cart.quantity)
  //Texto de búsqueda
  const textStore = useAppSelector(store => store.products.textFind)

  /* Estados Locales */

  const textSearch = useRef<HTMLInputElement>(null)

  /* Disparador */
  const dispatch = useAppDispatch()

  /* Funciones */
  const openSidebar = () => {
    dispatch(showSidebar())
  }

  const searchProduct = () =>{
    dispatch(textFind(textSearch.current?.value))
  }

  /* UseEffect */
  //Mostrar u Ocultar Sidebar
  useEffect(()=>{
    if (sidecartVisible){
      console.log('Show Cart')
      //Ocultar Scroll body
      document.body.style.overflow = 'hidden'
    }else{
      console.log('Hidden Cart')
      //Mostrar Scroll body
      document.body.style.overflow = 'auto'
    }

  }, [sidecartVisible])

  return (
    <>
      <header className="bg-[#ff3b3c] p-2">
        <div className="flex flex-col gap-4 pt-6">
          <div className="grid grid-cols-3 items-center justify-items-center gap-3">
            <div id="headerMenuMobile" className="text-white font-bold text-2xl lg:hidden">
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="flex justify-between items-start">
              <Link to={BASE_URL}>
                <img
                  className="h-10"
                  src={BASE_URL+"tiendamia-logo.svg"}
                  alt="Logo store"
                />
              </Link>
            </div>
            <div className="hidden lg:flex">
              <form>
                {
                  pathname === BASE_URL  && (
                    <input
                      className="w-[300px] h-[50px] rounded-3xl text-center"
                      defaultValue={textStore}
                      type="text" 
                      placeholder="Search" 
                      id="search"
                      ref={textSearch}
                      onChange={searchProduct}/>
                  )
                }
              </form>
            </div>
            <div className="flex gap-3">
              <div className="hidden lg:flex lg:gap-3">
                <img className="h-[38px] cursor-pointer lg:h-8" src={BASE_URL + "facebook.png"} alt="" />
                <img className="h-[38px] cursor-pointer lg:h-8" src={BASE_URL + "instagram.png"} alt="" />
              </div>
              <div id="my-account" className="relative">
                <img className="h-[38px] lg:h-8 cursor-pointer" src={BASE_URL + "user.png"} alt="" />
                <div id="login-submenu" className="hidden flex-col p-2 absolute top-11 right-[-40px] bg-white min-w-[200px] rounded-md border-[1px] box-border">
                  <span className="absolute w-0 h-0 border-transparent border-solid -top-2.5 right-[45px] border-b-white border-t-0 border-r-[10px] border-b-[10px] border-l-[10px]"></span>
                  <a id="login-submenu_login" className="text-center rounded-xl p-2 bg-red-500 text-white" href="./login.html">Ingresar</a>
                  <ul id="login-submenu_nav" className="flex flex-col text-left gap-2 p-3">
                    <li>Mis Favoritos</li>
                    <li id="logout-user">Salir</li>
                  </ul>
                </div>
              </div>
              <a className="flex" onClick={openSidebar}>
                <div className="relative">
                  {
                    quantityCart > 0 && (
                      <span className="absolute left-4 -top-2 bg-white p-0 rounded-[50%] h-5 w-5 text-center">{quantityCart}</span>
                    )      
                  }
                  <img className="h-[38px] cursor-pointer lg:h-8" src={BASE_URL + "shopping-cart.png"} alt="" />
                </div>
              </a>
            </div>
          </div>
          <nav className="hidden lg:flex lg:justify-around lg:p-4">
            <ul className="flex gap-4">
              <NavButton title="Ofertas" link={BASE_URL+'black-friday'} />
              <NavButton title="Cómo comprar" link="#" />
              <NavButton title="Costos y tarifas" link="#" />
              <NavButton title="Mis pedidos" link="#" />
              <NavButton title="Garantía" link="#" />
            </ul>
          </nav>
        </div>
      </header>
      <SidebarCart/>

    </>
    
    
  );
}
