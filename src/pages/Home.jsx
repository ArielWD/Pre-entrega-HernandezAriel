import { useEffect } from "react"
import ItemListConteiner from "../components/ItemListConteiner/ItemListConteiner"
import CategoryList from "../components/CategoryList/CategoryList";
import { useGetProducts } from "../hook/useProducts";
export const Home = () => {

    useEffect(() => {
        document.title = "QQ | Home"
    });

    const { productsData } = useGetProducts(20)
  return (
    <>
    <div className="container-list">
      <CategoryList/>
      <ItemListConteiner productsData={productsData} greeting='Nuestros Articulos'/>
    </div>
  </>
  )
}
