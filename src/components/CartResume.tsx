import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/hooks";
import Swal from 'sweetalert2'
import { updateToCart } from "../store/slices/cart";



export default function CartResume() {

  const total= useAppSelector((store) => store.cart.total)
  const dispatch = useDispatch()

  const showConfirmationAlert = () => {
    Swal.fire({
      title: '¿Deseas realizar la compra?',
      text: 'Acepta para procesar tu compra',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí'
    }).then((result) => {

      if (result.isConfirmed) {
        localStorage.clear()
        dispatch(updateToCart([]))
        
        Swal.fire(
          'Compra Realizado',
          'Gracias por realizar tu compra',
          'success'
        );
      }
    });
  };

  return (
    <div className="w-[340px] h-[220px] flex flex-col justify-between rounded-md p-[30px] m-[10px] bg-[#f2f2f2]">
      <div className="flex-grow flex flex-col justify-between">
        <h2 className="flex justify-between text-[20px] font-bold">
          <span>Resumen</span>
          <span>del</span>
          <span>pedido</span>
        </h2>
        <div className="flex justify-between items-center">
          <h3>Total</h3>
          <strong>S/ {total}</strong>
        </div>
        <small className="pb-[10px]">
          Incluye impuestos
        </small>
      </div>
      <button
        onClick={showConfirmationAlert}
        className="w-full h-[40px] bg-[#ff3b3c] text-white font-bold border-0 rounded-md"
        id="buy"
        type="button"
      >
        COMPRAR
      </button>
    </div>
  );
}
