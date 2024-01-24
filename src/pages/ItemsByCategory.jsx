import ItemListConteiner from "../components/ItemListConteiner/ItemListConteiner"
import CategoryList from "../components/CategoryList/CategoryList";
import { ItemByCategoryProvider } from "../context/ItemByCategoryContext";

const ItemsByCategory = () => {
return (
  <>
  <div className="container-list">
    <CategoryList/>
    <ItemByCategoryProvider>
        <ItemListConteiner greeting='Nuestros Articulos'/>
    </ItemByCategoryProvider>

  </div>
  </>
)
} 

export default ItemsByCategory