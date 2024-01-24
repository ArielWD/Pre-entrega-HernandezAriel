import { useState, useEffect } from "react"
import {collection, getDocs, doc, getDoc, getFirestore, where, query} from "firebase/firestore"


export const useGetProducts = (nameCollection = 'products') => {
    const [productsData, setProductsData] = useState([])

    useEffect(() => {
      const db = getFirestore();
      const productsCollection = collection(db, nameCollection);

      getDocs(productsCollection).then((snapshot)=>{
        setProductsData(snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})))
      })
    }, []);


    return {productsData}
}
export const useGetProductById = (nameCollection = 'products', id) => {
  const db = getFirestore();
  const [productData, setProductData] = useState({})

  useEffect(()=>{
    const docRef = doc(db, nameCollection, id)

    getDoc(docRef).then((doc)=>{
      setProductData({id: doc.id, ...doc.data()})
    })
  },[id])

  return {productData}
}
export const useGetProductByCategory = (nameCollection = 'products', category) => {
  const [productsData, setProductsData] = useState([])

  useEffect(()=>{
    const db = getFirestore();
    const collectionRef = collection(db, nameCollection);
    const q = query(collectionRef, where('category','==',category))
    getDocs(q).then((snapshot)=>{
      setProductsData(snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})))
    })

  },[category])

  return {productsData}
}


