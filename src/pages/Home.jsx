import { useEffect } from "react"
import ItemListConteiner from "../components/ItemListConteiner/ItemListConteiner"

export const Home = () => {

    useEffect(() => {
        document.title = "QQ | Home"
    });
  return (
    <>
    <ItemListConteiner greeting='Nuestros Articulos'/>
  </>
  )
}
