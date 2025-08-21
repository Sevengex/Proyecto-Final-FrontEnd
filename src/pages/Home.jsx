import { useEffect, useState, useRef } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"
import { SearchBar } from "../components/SearchBar";
import "../styles/pages/Home.css"

const Home = () => {
  const popupRef = useRef(null);
  const [products, setProducts] = useState([])
  const [showPopup, setShowPopup] = useState(null)
  const [productToEdit, setProductToEdit] = useState(null)
  const [titleEdit, setTitleEdit] = useState("")
  const [priceEdit, setPriceEdit] = useState("")
  const [descriptionEdit, setDescriptionEdit] = useState("")
  const [categoryEdit, setCategoryEdit] = useState("")
  const [imageEdit, setImageEdit] = useState("")

  //Scrollea la pagina hasta el popupEdit en caso de estar muy abajo
  useEffect(() => {
    if (showPopup) {
      popupRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showPopup]);

  // simulando existencia del usuario, proximamente este estado será global
  const { user } = useAuth()

  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
    const data = await response.json()
    setProducts(data)
  }

  // El array vacío (dependencias) espera a que ejecute el return del jsx. Si tiene algo, useEffect se va a ejecutar cada vez que se modifique lo que este dentro de la dependencia.
  useEffect(() => {
    fetchingProducts()
  }, [])

  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })

    if (response.ok) {
      setProducts(prevProduct => prevProduct.filter((product) => product.id != id))
      // fetchingProducts()
    }
  }

  const handleOpenEdit = (product) => {
    setShowPopup(true)
    setProductToEdit(product)
    setTitleEdit(product.title)
    setPriceEdit(product.price)
    setDescriptionEdit(product.description)
    setCategoryEdit(product.category)
    setImageEdit(product.image)
  }

  // petición al backend mediante fetch para modificar-> método PATCH / PUT https://fakeproductapi.com/products
  const handleUpdate = async (e) => {
    e.preventDefault()

    const updatedProduct = {
      id: productToEdit.id,
      title: titleEdit,
      price: Number(priceEdit),
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit
    }

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productToEdit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
      })

      if (response.ok) {
        const data = await response.json()
        setProducts(prevProduct =>
          prevProduct.map((product) =>
            product.id === productToEdit.id
              ? data
              : product
          ))
        // fetchingProducts()
      }
      setShowPopup(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <section className="welcom-title">
        <h1>Bienvenido a Nuestra Tienda</h1>
        <p>Descubrí una selección exclusiva de productos para vos. Calidad, confianza y atención personalizada.</p>
      </section>

      <section className="title-text-content">
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li>
            <h3>Envíos a todo el país</h3>
            <p>Recibí tu compra en la puerta de tu casa estés donde estés.</p>
          </li>
          <li>
            <h3>Pagos seguros</h3>
            <p>Trabajamos con plataformas que garantizan tu seguridad.</p>
          </li>
          <li>
            <h3>Atención personalizada</h3>
            <p>Estamos disponibles para ayudarte en todo momento.</p>
          </li>
        </ul>
      </section>

      <section className="subtitle-text-content">
        <div>
          <h2>Nuestros productos</h2>
          <p>Elegí entre nuestras categorías más populares.</p>
          <SearchBar />
        </div>

        {
          showPopup && <section ref={popupRef} className="popup-edit">
            <h2>Editando producto</h2>

            <form className="inputs-cont" onSubmit={handleUpdate}>
              <div>
                <h3 className="text-inputs">Titulo</h3>
                <input className="inputs-edit"
                  type="text"
                  placeholder="Ingrese el titulo"
                  value={titleEdit}
                  onChange={(e) => setTitleEdit(e.target.value)}
                />
                <h3 className="text-inputs">Precio</h3>
                <input className="inputs-edit"
                  type="number"
                  placeholder="Ingrese el precio"
                  value={priceEdit}
                  onChange={(e) => setPriceEdit(e.target.value)}
                />
                <h3 className="text-inputs">Descripcion</h3>
                <textarea className="input-description"
                  placeholder="Ingrese la descripción"
                  value={descriptionEdit}
                  onChange={(e) => setDescriptionEdit(e.target.value)}
                ></textarea>
              </div>
              <div>
                <h3 className="text-inputs">Categoria</h3>
                <input className="inputs-edit"
                  type="text"
                  placeholder="Ingrese la categoria"
                  value={categoryEdit}
                  onChange={(e) => setCategoryEdit(e.target.value)}
                />
                <h3 className="text-inputs">URL Imagen</h3>
                <input className="inputs-edit"
                  type="text"
                  placeholder="Ingrese la URL de la imagen"
                  value={imageEdit}
                  onChange={(e) => setImageEdit(e.target.value)}
                />
              </div>
            </form>
            <button className="btn-producto">Actualizar</button>
            <button className="btn-producto" onClick={() => setShowPopup(null)}>Cerrar</button>
          </section>
        }
        <section className="products">
          <div className="products-grid" >
            {
              products.map((product) => <div className="product-card" key={product.id}>
                <h2 key={product.id}>{product.title}</h2>
                <img width="80px" src={product.image} alt={`Imagen de ${product.title}`} />
                <p className="price">${product.price}</p>
                <p className="description">{product.description}</p>
                <p className="category"><strong>{product.category}</strong></p>
                {
                  user && <div>
                    <button className="btn-producto" onClick={() => handleOpenEdit(product)}>Actualizar</button>
                    <button className="btn-producto" onClick={() => handleDelete(product.id)}>Borrar</button>
                  </div>
                }
              </div>)
            }
          </div>
        </section>
      </section>
    </Layout >
  )
}

export { Home }
