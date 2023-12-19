
import ItemList from '../ItemList/ItemList'
import './itemlistcontainer.scss'

function ItemListConteiner({greeting ,productsData}) {

  return (
    <div className="listcontainer">    
        <p className="listcontainer__titulo">{greeting}</p>
          <ItemList productsData={productsData} limit={20}/>
    </div>
  )
}
export default ItemListConteiner