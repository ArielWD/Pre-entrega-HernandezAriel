
import './carrito.scss'

function CartWidget({items}) {
  return (
    <div className='cart'>
        <i className="fa-solid fa-cart-shopping" style={{color : '#e9eaed'}}></i>
        <p>{items}</p>
    </div>
  )
}

export default CartWidget