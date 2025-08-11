
import { useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import "../styles/components/Login.css"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()

  const nagivate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log({ username, password })
    const isLogin = await login(username, password)

    if (isLogin) {
      setUsername("")
      setPassword("")
      nagivate("/")
    }
  }

  return (
    <Layout>
      {/* <h1 className="title-cont">Inicia sesión</h1> */}

      <section className="login-cont" >
        <div className="subTitle-cont">
          <h2>Hola, bienvenido de nuevo</h2>
        </div>
        <p className="usu-log">johnd, m38rmF$</p>
        <form className="form-content" onSubmit={handleLogin}>
          <div>
            <label>Nombre de usuario:</label>
            <input className="input-usu"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username} />
          </div>
          <div>
            <label>Contraseña:</label>
            <input className="input-usu"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
          </div>
          <button className="button-ingresar">Ingresar</button>
        </form>
      </section>
    </Layout>
  )
}

export { Login }