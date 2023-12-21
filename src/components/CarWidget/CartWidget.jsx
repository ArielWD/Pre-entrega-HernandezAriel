
import './carrito.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function CartWidget() {
  const { count } = useContext(CartContext)

  return (
    <div className='cart'>
        <i className="fa-solid fa-cart-shopping" style={{color : '#e9eaed'}}></i>
        <p>{count}</p>
    </div>
  )
}

export default CartWidget