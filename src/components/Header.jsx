import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"
import "../styles/components/Header.css"

const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header>
      <nav>
        <div className="header-img">
          <img src="https://mitiendavirtual.com.ar/wp-content/uploads/2021/05/logo2021.png" alt="imagen de logo" />
        </div>
        <ul className="nav-content">
          {
            user && <>
              <Link className="btn-inicio" to="/home">Inicio</Link>
              <Link className="btn-nosotros" to="/aboutUs"> Sobre Nosotros</Link>
              <Link className="button-dash" to="/dashboard">Dashboard</Link>
              <Link className="btn-inicio" to="/login" onClick={handleLogout}>Cerrar sesión</Link>
            </>
          }
          {
            !user && <>
              <Link to="/home" className="btn-inicio">Inicio</Link>
              <Link to="/aboutUs" className="btn-nosotros">Sobre Nosotros</Link>
              <Link to="/login" className="btn-login">Iniciar Sesion</Link>
              <Link to="/register" className="btn-registrar">Registrate</Link>
            </>
          }
        </ul>
      </nav>
    </header>
  )
}

export { Header }