import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import './item.scss'


const ItemCount = ({productId}) => {
    const [itemCount, setItemCount] = useState(1)

    const {count, setCount} = useContext(CartContext)

    const handleAdd = ()=>{
        setItemCount(itemCount + 1)
    }
    const handleRemove = ()=>{
      setItemCount(itemCount - 1)
    }
    
    const handleAddProductToCart = () => {
      const productExists = count.find((item) => item.id === productId);
  
      if (productExists) {
        setCount(
          count.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + itemCount }
              : item
          )
        );
      } else {
        setCount([...count, { id: productId, quantity: itemCount }]);
      }
  
      setItemCount(1);
    };

  return (
      <>
      <div className="boton-contenedor">
      {itemCount !== 1 ? <button className="boton" onClick={handleRemove}> - </button> : ""}
      <span className="itemcount" style={{color:'#fff'}}>{itemCount}</span>
      <button className="boton" onClick={handleAdd}> + </button>
      </div>
      <button className="boton" onClick={handleAddProductToCart}>Agregar al carrito</button>
      </>
  )
}

export default ItemCount