import { createContext } from "react";
import { useGetProducts } from "../hook/useProducts";

export const ItemContext = createContext()

export const ItemProvider = ({children}) =>{
    
    const { productsData } = useGetProducts('products')

    return(
      <ItemContext.Provider value={{productsData}}>
        {children}
      </ItemContext.Provider>
    )
}