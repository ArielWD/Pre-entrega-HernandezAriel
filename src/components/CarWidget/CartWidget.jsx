
import './carrito.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"

function CartWidget() {
  const { count } = useContext(CartContext)

  const totalQuantity = count.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <>
    <div className='cart'>
        <i className="fa-solid fa-cart-shopping" style={{color : '#e9eaed'}}></i>
        <p>{totalQuantity}</p>
        <Link to={"/cart"}>Ir a Comprar</Link>
    </div>
    </>
  )
}

export default CartWidget