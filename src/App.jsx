import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import NavBarComponent from './components/NavBarComponent/NavBarComponent'

import './app.scss'

function App() {
  return(
    <>
      <NavBarComponent/>
      <ItemListConteiner greeting='Item Selecionados:'/>
    </>
  )
}

export default App
