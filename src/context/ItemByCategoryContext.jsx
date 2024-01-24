import { createContext } from "react";
import { useGetProductByCategory} from "../hook/useProducts";
import { useParams } from "react-router-dom";

export const ItemByCategoryContext = createContext()

export const ItemByCategoryProvider = ({children}) =>{
    
    const { category } = useParams()
    const { productsData } = useGetProductByCategory('products', category)

    return(
      <ItemByCategoryContext.Provider value={{productsData}}>
        {children}
      </ItemByCategoryContext.Provider>
    )
}