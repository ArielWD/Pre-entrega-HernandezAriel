import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import CartConteiner from "../components/CartConteiner/CartConteiner"

export const Cart = () => {
  const [products, setProducts] = useState([]);
  const { count } = useContext(CartContext);

  const idList = count.map((item) => item.id);
  const quantity = count.map((cantidad) => cantidad.quantity)
  
  useEffect(() => {
    const db = getFirestore();
    for (let i = 0; i < idList.length; i++) {
      const docRef = doc(db, "products", idList[i]);
      getDoc(docRef).then((doc) => {
        setProducts((prevState) => [
          ...prevState,
          { id: doc.id, ...doc.data(), cantidad:quantity[i], preciototal:(quantity[i] * doc.data().price)},
        ]);
      });
    }
  }, [count]);

  return (
    count.length === 0 ? <p style={{textAlign:'center'}}>No hay productos en el carrito</p> : 

      <CartConteiner products={products}/>
    );
};