import { useState, useEffect } from "react"
import { getProductByCategory, getProductById, getProducts } from "../services/productsServices"


export const useGetProducts = (limit = 10) => {
    const [productsData, setProductsData] = useState([])
  
    useEffect(()=>{
      getProducts(limit)
        .then((res) => {
          setProductsData(res.data.products)
        })
        .catch((error) => {
          console.log(error);
        })
    },[limit])

    return {productsData}
}
export const useGetProductById = (id) => {
  const [productData, setProductData] = useState({})

  useEffect(()=>{
    getProductById(id)
      .then((res) => {
        setProductData(res.data)
      })
      .catch((error) => {
        console.log(error);
      })
  },[id])

  return {productData}
}
export const useGetProductByCategory = (category) => {
  const [productsData, setProductsData] = useState([])

  useEffect(()=>{
    getProductByCategory(category)
      .then((res) => {
        setProductsData(res.data.products)
      })
      .catch((error) => {
        console.log(error);
      })
  },[category])

  return {productsData}
}


