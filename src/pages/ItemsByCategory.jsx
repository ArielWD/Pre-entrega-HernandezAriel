import { useEffect } from "react"
import ItemListConteiner from "../components/ItemListConteiner/ItemListConteiner"
import CategoryList from "../components/CategoryList/CategoryList";
import { useParams } from "react-router-dom";
import { useGetProductByCategory } from "../hook/useProducts";


const ItemsByCategory = () => {
  
  useEffect(() => {
    document.title = "QQ | Home"
  });

const { category } = useParams()
const { productsData } = useGetProductByCategory(category)

return (
  <>
  <div className="container-list">
    <CategoryList/>
    <ItemListConteiner productsData={productsData} greeting='Nuestros Articulos'/>
  </div>
  </>
)
} 

export default ItemsByCategory