
import './navbar.scss'
import logo from '../../img/logo.png'
import CartWidget from '../CarWidget/CartWidget'

function NavBarComponent() {
  return (
    <nav className="navbar">
        <a className="navbar__logo" href="#home"><img src={logo} alt="Logo Q.Q"/></a>
        <ul className="navbar__enlaces">
            <li className="navbar__enlace"><a href="#home">Home</a></li>
            <li className="navbar__enlace"><a href="#nosotros">Sobre Nosotros</a></li>
            <li className="navbar__enlace"><a href="#productos">Productos</a></li>
            <li className="navbar__enlace"><a href="#contacto">Contacto</a></li>
        </ul>
        <CartWidget items={0}/>
    </nav>
  )
}

export default NavBarComponent