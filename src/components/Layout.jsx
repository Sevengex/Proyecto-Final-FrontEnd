import { Footer } from "./Footer"
import { Header } from "./Header"

const Layout = (props) => {
  return (
    <div className="layout-content">
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export { Layout }