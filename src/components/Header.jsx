import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"

const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header style={{ backgroundColor: "lightblue" }}>
      <nav>
        <div className="header-img">
          <img src="https://mitiendavirtual.com.ar/wp-content/uploads/2021/05/logo2021.png" alt="imagen de logo" />
        </div>
        <ul className="nav-content">
          {/* Cambiar elementos a por componentes Link de react-router-dom */}
          {
            user && <>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          }
          {
            !user && <>
              <button className="btn-inicio"><Link to="/registrate">Inicio</Link></button>
              <button className="btn-nosotros"><Link to="/registrate">Sobre Nosotros</Link></button>
              <button className="btn-login"><Link to="/login">Iniciar Sesion</Link></button>
              <button className="btn-registrar"><Link to="/registrate">Registrate</Link></button>
            </>
          }
        </ul>
      </nav>
    </header>
  )
}

export { Header }