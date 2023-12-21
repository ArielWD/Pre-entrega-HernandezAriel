import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"


const ItemCount = () => {
    const [itemCount, setItemCount] = useState(1)

    const {count, setCount} = useContext(CartContext)

    const handleAdd = ()=>{
        setItemCount(itemCount + 1)
    }
    const handleRemove = ()=>{
        setItemCount(itemCount - 1)
    }

  return (
      <>
      
      <Button onClick={handleAdd}>+</Button>
      <span style={{color:'#fff'}}>{itemCount}</span>
      <Button onClick={handleRemove}>-</Button>
      <Button onClick={()=>{
        setCount(count + itemCount)
        setItemCount(1)
      }}>Agregar al carrito</Button>
      </>
  )
}

export default ItemCount