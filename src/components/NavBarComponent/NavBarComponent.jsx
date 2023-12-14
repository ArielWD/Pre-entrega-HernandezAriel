
import './navbar.scss'
import logo from '../../img/logo.png'
import CartWidget from '../CarWidget/CartWidget'
import { Link } from 'react-router-dom'

function NavBarComponent() {
  return (
    <nav className="navbar">
        <a className="navbar__logo" href="/"><img src={logo} alt="Logo Q.Q"/></a>
        <ul className="navbar__enlaces">
            <li className="navbar__enlace"><Link to="/">Home</Link></li>
            <li className="navbar__enlace"><a href="/nosotros">Sobre Nosotros</a></li>
            <li className="navbar__enlace"><a href="">Productos</a></li>
            <li className="navbar__enlace"><a href="">Contacto</a></li>
        </ul>
        <CartWidget items={0}/>
    </nav>
  )
}

export default NavBarComponent