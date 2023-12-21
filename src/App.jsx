
import './app.scss'
import { CartProvider } from './context/CartContext'
import { MainRouter } from './router/MainRouter'


function App() {
  return(
      <CartProvider>
        <MainRouter/>
      </CartProvider>
  )
}

export default App
