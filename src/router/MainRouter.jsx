import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import NavBarComponent from "../components/NavBarComponent/NavBarComponent"
import ItemDetailContainer from "../pages/ItemDetailContainer"
import ItemsByCategory from "../pages/ItemsByCategory"
import {Cart} from "../pages/Cart"


export const MainRouter = () => {
  return (
    <BrowserRouter>
        <NavBarComponent/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/products/:category" element={<ItemsByCategory/>}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
    </BrowserRouter>
  )
}
