import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import NavBarComponent from "../components/NavBarComponent/NavBarComponent"

export const MainRouter = () => {
  return (
    <BrowserRouter>
        <NavBarComponent/>
        <Routes>
            <Route path="/" element={<Home />}/>
            {/* <Route path="/item/:id" element={<ItemDetailContainer />}/> */}
        </Routes>
    </BrowserRouter>
  )
}
