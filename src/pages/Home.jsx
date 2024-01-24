import { useEffect } from "react"
import ItemListConteiner from "../components/ItemListConteiner/ItemListConteiner"
import CategoryList from "../components/CategoryList/CategoryList";
import { ItemProvider } from "../context/ItemContext";
export const Home = () => {

    useEffect(() => {
        document.title = "QQ | Home"
    });

  return (
    <>
    <div className="container-list">
      <CategoryList/>
      <ItemProvider>
        <ItemListConteiner greeting='Nuestros Articulos'/>
      </ItemProvider>
    </div>
  </>
  )
}
