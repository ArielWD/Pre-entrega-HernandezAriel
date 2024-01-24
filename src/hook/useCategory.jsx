import { useEffect , useState } from "react"
import { collection, getFirestore, getDocs } from "firebase/firestore"

export const useGetCategory = (nameCollection = 'categories') => {
    const [categories, setCategoryData] = useState([])
  
    useEffect(()=>{
    const db = getFirestore()
    const productsCatagories = collection(db, nameCollection);
    getDocs(productsCatagories).then((snapshot) => {
      const categories = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setCategoryData(
        categories[0].categories
      );
    });
    },[categories])

    return { categories }
}