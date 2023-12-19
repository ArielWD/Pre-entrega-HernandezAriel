
import './navbar.scss'
import logo from '../../img/logo.png'
import CartWidget from '../CarWidget/CartWidget'
import { Link } from 'react-router-dom'

function NavBarComponent() {
  return (
    <nav className="navbar">
        <Link to={'/'}> <img className="navbar__logo" src={logo} alt="Logo Q.Q"/></Link>
        <ul className="navbar__enlaces">
            <li className="navbar__enlace"><Link to="/">Home</Link></li>
            <li className="navbar__enlace"><a >Sobre Nosotros</a></li>
            <li className="navbar__enlace"><a >Contacto</a></li>
        </ul>
        <CartWidget items={0}/>
    </nav>
  )
}

export default NavBarComponent