import "./Navbar.css"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import {logout} from "../../firebase"


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="logo" />
          <ul>
            <li>Home</li>
            <li>Series</li>
            <li>Peliculas</li>
            <li>Mejor Puntuada</li>
            <li>Mi Lista</li>
            <li>Buscar</li>
          </ul>
        </div>

        <div className="navbar-right">
          <img src={search_icon} alt="icono buscar" className="icons" />
          <p>Children</p>
          <img src={bell_icon} alt="icono alerta" className="icons" />
          <div className="navbar-profile">
          <img src={profile_img} alt="icono usuario" className="profile" />
          <img src={caret_icon} alt="icono perfil" />
            <div className="dropdown">
              <p onClick={() => {logout()}}>Salir de Netflix</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar