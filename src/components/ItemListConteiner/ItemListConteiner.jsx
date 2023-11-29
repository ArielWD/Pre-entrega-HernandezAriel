
import './itemlistcontainer.scss'

function ItemListConteiner({greeting}) {
  return (
    <div className="listcontainer">    
        <p className="listcontainer__titulo">{greeting}</p>
    </div>
  )
}
export default ItemListConteiner