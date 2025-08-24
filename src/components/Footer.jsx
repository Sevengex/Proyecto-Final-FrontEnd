import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"
import "../styles/components/Footer.css"

const Footer = () => {
  const { user, logout } = useAuth()

  return (
    <>
      <footer >
        <div className="mitienda-cont">
          <h2>Mi Tienda <a className="virtual">virtual</a></h2>
          <a>Tu tu tienda online de confianza con los majores productos y atencion personalizada</a>
        </div>
        <div className="enlaces-cont">
          <h3>Enlaces Utiles</h3>
          {
            user && <>
              <Link className="link-inicio" to="/home">Inicio</Link>
              <Link className="link-us" to="/aboutUs">Sobre Nosotros</Link>
              <Link className="link-dash" to="/dashboard">Dashboard</Link>
            </>
          }
          {
            !user && <>
              <Link className="link-inicio" to="/home">Inicio</Link>
              <Link className="link-us" to="/aboutUs">Sobre Nosotros</Link>
              <Link className="link-log" to="/login" >Iniciar Sesion</Link>
              <Link className="link-reg" to="/registrate">Registrate</Link>
            </>
          }

        </div>
        <div className="contacto-cont">
          <h3 >Contacto</h3>
          <p>Sitio desarrollado por <a className="link-contacto" href="https://www.linkedin.com/in/leonardo-joaquin-duarte-lopez" target="_blank">Leonardo Duarte</a></p>
        </div>
      </footer>
    </>
  )
}

export { Footer }