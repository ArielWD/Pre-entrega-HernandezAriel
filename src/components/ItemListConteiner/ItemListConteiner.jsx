
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './itemlistcontainer.scss'
import ItemListByCategory from '../ItemList/ItemListByCategory'

function ItemListConteiner({greeting}) {

  const { category } = useParams()

  return (
    <div className="listcontainer">    
        <p className="listcontainer__titulo">{greeting}</p>
        {category ? <ItemListByCategory/> : <ItemList/>}   
    </div>
  )
}
export default ItemListConteiner