import { useState } from "react"
import "./Login.css"
import logo from "../../assets/logo.png"

const Login = () => {

  const [singState, setSingState] = useState("Registro")

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="logo web" />
      <div className="login-form">
        <h1>{singState}</h1>
        <form>
          <input type="text" placeholder="Tu Nombre" />
          <input type="email" placeholder="Correo" />
          <input type="password" placeholder="Contraseña" />
            <button>Registrarse</button>
              <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label htmlFor="">Recordar</label>
            </div>
            <p>Necesitas Ayuda ?</p>
          </div>
        </form>
        <div className="form-switch">
          <p>Nuevo en Netflix? <span>Registrate Ahora</span></p>
          <p>Tienes una cuenta? <span>Login</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login