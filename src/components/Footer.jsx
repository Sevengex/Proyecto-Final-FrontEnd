import { Link } from "react-router-dom"
import "../styles/components/Footer.css"

const Footer = () => {
  return (
    <>
      <footer >
        <div className="mitienda-cont">
          <h2>Mi Tienda <a className="virtual">virtual</a></h2>
          <a>Tu tu tienda online de confianza con los majores productos y atencion personalizada</a>
        </div>
        <div className="enlaces-cont">
          <h3>Enlaces Utiles</h3>
          <Link className="link-inicio" to="/login">Inicio</Link>
          <Link className="link-us" to="/registrate">Sobre Nosotros</Link>
          <Link className="link-log" to="/login" >Iniciar Sesion</Link>
          <Link className="link-reg" to="/registrate">Registrate</Link>
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