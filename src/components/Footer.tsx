import { Link } from "react-router-dom";
import { BASE_URL } from "../assets/baseConfig";

export default function Footer() {
  return (
    <>
    <footer className="w-full h-min-[250px] bg-[#7525a7] flex flex-col items-center pt-6">
        <div id="footer" className="flex flex-wrap justify-between px-4">
          <ul className="w-[170px] list-none p-[10px]">
            <li className="font-bold pb-[20px] sm:text-start">
              <Link className="text-white no-underline" to={BASE_URL+"black-friday"}>
                Ofertas
              </Link>
            </li>
            <li className="py-[5px] px-0 sm:text-start">
              <a className="text-white no-underline" href="./index.html">
                Laptops
              </a>
            </li>
            <li className="py-[5px] px-0 sm:text-start">
              <a className="text-white no-underline" href="./index.html">
                Audio
              </a>
            </li>
            <li className="py-[5px] px-0 sm:text-start">
              <a className="text-white no-underline" href="./index.html">
                Auriculares
              </a>
            </li>
          </ul>
          <ul className="w-[170px] list-none p-[10px]">
            <li className="font-bold pb-[20px] sm:text-start">
              <a className="text-white no-underline" href="./index.html">
                Cómo comprar
              </a>
            </li>
            <li className="py-[5px] px-0 sm:text-start">
              <a className="text-white no-underline" href="./index.html">
                Formas de pago
              </a>
            </li>
            <li className="py-[5px] px-0 sm:text-start">
              <a className="text-white no-underline" href="./index.html">
                Envios
              </a>
            </li>
            <li className="py-[5px] px-0 sm:text-start">
              <a className="text-white no-underline" href="./index.html">
                Devoluciones
              </a>
            </li>
          </ul>
          <ul className="w-[170px] list-none p-[10px]">
            <li className="font-bold pb-[20px] sm:text-start">
              <a className="text-white no-underline" href="./index.html">
                Costos y tarifas
              </a>
            </li>
            <li className="py-[5px] px-0 sm:text-start">
              <a className="text-white no-underline" href="./index.html">
                Impuestos
              </a>
            </li>
            <li className="py-[5px] px-0 sm:text-start">
              <a className="text-white no-underline" href="./index.html">
                Facturación
              </a>
            </li>
          </ul>
          <ul className="w-[170px] list-none p-[10px]">
            <li className="font-bold pb-[20px] sm:text-start">
              <a className="text-white no-underline" href="./index.html">
                Mis pedidos
              </a>
            </li>
            <li className="py-[5px] px-0 sm:text-start">
              <a className="text-white no-underline" href="./index.html">
                Pedir nuevamente
              </a>
            </li>
            <li className="py-[5px] px-0 sm:text-start">
              <a className="text-white no-underline" href="./index.html">
                Lista de deseos
              </a>
            </li>
          </ul>
          <ul className="w-[170px] list-none p-[10px]">
            <li className="font-bold pb-[20px] sm:text-start">
              <a className="text-white no-underline" href="./index.html">
                Garantía
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full text-center text-white font-bold py-[30px] px-0 border-t-[1px] border-t-[#ba53fb]">
          Curso de HTML + CSS 2023
        </div>
      </footer>
    </>
  );
}
