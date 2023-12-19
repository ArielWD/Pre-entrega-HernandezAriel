import { Link, useParams } from "react-router-dom"
import { useGetProductById } from "../hook/useProducts"


const ItemDetailContainer = () => {
  const {id} = useParams()
  const { productData } = useGetProductById(id)

return(

  <>
  <div className='listcontainer__item--detail listcontainer__item' >
    <img className='listcontainer__img' src={productData.thumbnail} alt={productData.title} />
    <h3 className='listcontainer__titulo-item'>{productData.title}</h3>
    <p className='listcontainer__texto'>{productData.description}</p>
    <p className='listcontainer__precio'>${productData.price}</p>
  </div>
  <Link to={'/'} className="listcontainer__back">Volver</Link>
  </>
)
}

export default ItemDetailContainer