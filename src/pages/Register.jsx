import { useState } from "react"
import { Layout } from "../components/Layout"
import "../styles/components/Register.css"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!username || !email || !password) {
      setError("Debes completar todos los campos")
      return
    }

    const newUser = {
      username,
      email,
      password
    }

    console.log(newUser)
    setSuccess("Usuario registrado con éxito")

    setUsername("")
    setEmail("")
    setPassword("")
  }

  return (
    <Layout>
      <div>
        <section className="inputs-content">
          <h2 className="subtitle-reg">Hola, bienvenido</h2>
          <form className="form-cont" onSubmit={handleSubmit}>
            <div className="usu-reg">
              <label>Username:</label>
              <input className="input-usu"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="email-reg">
              <label>Correo electrónico:</label>
              <input className="input-email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="pass-reg">
              <label>Contraseña:</label>
              <input className="input-pass"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button className="button-reg">Registrar</button>
          </form>

          {
            error && <p style={{ color: "red" }}>{error}</p>
          }
          {
            success && <p style={{ color: "green" }}>{success}</p>
          }
        </section>
      </div>
    </Layout>
  )
}

export { Register }