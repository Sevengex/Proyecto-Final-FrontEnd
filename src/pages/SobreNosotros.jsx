import { Layout } from "../components/Layout"

const SobreNosotros = () => {
  return (
    <Layout>
      <h1 className="title-abouthUs">Sobre Nosotros</h1>
      <div className="abouthUs-cont">
        <section className="section-1">
          Este proyecto es una aplicación web enfocada en un catalogo de diversos productos.
          Su objetivo principal es brindar una experiencia intuitiva y accesible, donde los usuarios puedan explorar una gran variedad de productos.
        </section>
        <section className="section-2">
          El sitio está pensado para clientes que desean comprar productos de manera rápida y segura.
          Se priorizó que la interfaz sea clara, responsiva y fácil de usar tanto en dispositivos móviles como en computadoras de escritorio.
        </section>
        <section className="section-3">
          El desarrollo se realizó con React para la construcción de componentes reutilizables y una experiencia dinámica.
          Se utilizaron HTML y CSS para la estructura y el diseño, aplicando Responsive Design con media queries para asegurar la correcta visualización en distintos tamaños de pantalla.
          Además, se aplicaron buenas prácticas de componentización y organización de código, favoreciendo la escalabilidad y el mantenimiento del proyecto.
        </section>
      </div>
    </Layout>
  )
}

export { SobreNosotros }