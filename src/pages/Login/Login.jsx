import { useState } from "react"
import "./Login.css"
import logo from "../../assets/logo.png"
import {login, singup} from "../../firebase"

const Login = () => {

  const [singState, setSingState] = useState("Registro")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const user_auth = async (event) => {
    event.preventDefault();
    if(singState === "Login"){
      await login(email, password)
  }else {
    await singup(name, email, password)
  }
}

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="logo web" />
      <div className="login-form">
        <h1>{singState}</h1>
        <form>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Tu Nombre" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Correo" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" />
            <button onClick={user_auth} type="submit">{singState}</button>
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


export default Login;