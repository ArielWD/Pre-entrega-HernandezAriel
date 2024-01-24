import { useContext} from "react"
import { CartContext } from "../../context/CartContext"
import './cart.scss'
import CheckOut from "./CheckOut"

const CartConteiner = ({products}) => {

  const totalPrice = products.reduce((total, item) => total + item.preciototal, 0)
  const { setCount } = useContext(CartContext);

  const emptyCart = () =>{
    setCount([])
  }
  return (
    <>
    <div className="tabla-cart">
      <table>
        <thead className="tabla-cart__head">
          <tr>
            <th><i className="fa-solid fa-image" style={{color:'#DEE7EB'}}></i></th>
            <th>Producto</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Precio Total</th>
          </tr>
        </thead>
        <tbody className="tabla-cart__body">
          {
            products.map(product =>{
        
              return(
                <tr key={product.id}>
                <td className="tabla-cart__img"><img src={product.thumbnail} alt={product.title}/></td>
                <td className="tabla-cart__titulo">{product.title}</td>
                <td className="tabla-cart__precio">${product.price}</td>
                <td className="tabla-cart__cantidad">{product.cantidad}</td>
                <td className="tabla-cart__total">${product.preciototal}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className='tabla-cart__foot'>
        <button onClick={emptyCart} className='tabla-cart__trash'><i className="fa-solid fa-trash" style={{color:'#DEE7EB'}}></i></button>
        <p className='tabla-cart__precio-total'>Total: ${totalPrice}</p>
      </div>
    </div>

    <CheckOut emptyCart={emptyCart}/>
          
    </>
  )
}

export default CartConteiner