import { useState } from "react"
import "./Login.css"
import logo from "../../assets/logo.png"
import {login, signup} from "../../firebase"
import netflix_spinner from "../../assets/netflix_spinner.gif"

const Login = () => {

  const [singState, setSingState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true)
    if(singState === "Sign In"){
      await login(email, password)
  }else {
    await signup(name, email, password)
  }
  setLoading(false)
}

  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="spinner" />
    </div>:
    <div className="login">
      <img src={logo} className="login-logo" alt="logo web" />
      <div className="login-form">
        <h1>{singState}</h1>
        <form>
          {singState === "Sign Up"?  <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Tu Nombre" />:<></>}
         
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
          {singState === "Sign In"?
          <p>Nuevo en Netflix? <span onClick={() => {setSingState("Sign Up")}}>Registrate Ahora</span></p>
          :  <p>Tienes una cuenta? <span onClick={() => {setSingState("Sign In")}}>Login</span></p>
        }
        
        </div>
      </div>
    </div>
  )
  }


export default Login;