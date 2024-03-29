import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ItemByCategoryContext } from '../../context/ItemByCategoryContext'

const ItemListByCategory = () => {

  const { productsData } = useContext(ItemByCategoryContext)
  return (
    <div className='listcontainer__items'>
    {
      productsData.map(product => {
        return (
            <Link to={`/item/${product.id}`} key={product.id}>
                <div className='listcontainer__item' >
                    <img className='listcontainer__img' src={product.thumbnail} alt={product.title} />
                    <h3 className='listcontainer__titulo-item'>{product.title}</h3>
                    <p className='listcontainer__precio'>${product.price}</p>
                    <p>Click para mas Detalles</p>
                </div>
            </Link>
        )
      })
    }
    </div>
  )
}

export default ItemListByCategory