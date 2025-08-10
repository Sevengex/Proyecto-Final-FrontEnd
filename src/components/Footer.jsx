const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "lightcoral" }}>
        <div><h2>Mi Tienda</h2>
          <a>Tu tu tienda online de confianza con los majores productos y atencion personalizada</a>
        </div>
        <div>
          <h3>Enlaces Utiles</h3>
          <li>Inicio</li>
          <li>Sobre Nosotros</li>
          <li>Iniciar Sesion</li>
          <li>Registrarse</li>
        </div>
        <div>
          <h3>Contacto</h3>
          <p>Sitio desarrollado por <a href="https://www.linkedin.com/in/leonardo-joaquin-duarte-lopez" target="_blank">Leonardo Duarte</a></p>
        </div>
      </footer>
    </>
  )
}

export { Footer }