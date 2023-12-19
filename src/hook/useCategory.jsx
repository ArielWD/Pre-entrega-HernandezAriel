import { useEffect , useState } from "react"
import { getCategory } from "../services/categoryServices"

export const useGetCategory = () => {
    const [categoryData, setCategoryData] = useState([])
  
    useEffect(()=>{
      getCategory()
        .then((res) => {
            setCategoryData(res.data)
        })
        .catch((error) => {
          console.log(error);
        })
    },[])

    return { categoryData }
}