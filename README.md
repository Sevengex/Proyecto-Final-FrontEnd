# Proyecto Final Frontend - Tienda Online 🛒

## 📌 Nombre del Proyecto
**Mi Tienda - Proyecto Final Frontend**

---

## 🎯 Objetivo General
Desarrollar una aplicación web de **tienda online** utilizando **React** que permita a los usuarios:
- Registrarse e iniciar sesión.
- Visualizar productos provenientes de una API externa.
- Filtrar productos mediante una barra de búsqueda dinámica.
- Gestionar productos

---

## 🚀 Funcionalidades Implementadas

- **Registro de usuario**:  
  Formulario conectado a [FakeStore API](https://fakestoreapi.com/) que simula el registro. 

- **Inicio de sesión**:  
  Validación de credenciales contra FakeStore API  
  Manejo de errores con mensajes en pantalla en caso de usuario o contraseña incorrectos.

- **Gestión de sesión**:  
  Contexto global que controla el estado de login/logout.

- **Barra de búsqueda dinámica**:  
  Filtra productos en vivo mientras el usuario escribe, mostrando únicamente aquellos cuyo título coincide con la búsqueda.

- **Listado de productos**:  
  Los productos se obtienen desde FakeStore API y se muestran en tarjetas con su nombre, imagen, precio, descripción y categoría.

- **Edición y eliminación de productos** (simulada):  
  Uso de `PUT` y `DELETE` en FakeStore API para actualizar/eliminar productos.

- **Diseño responsivo**:  
  Estructura con CSS Grid y Flexbox adaptada a distintas pantallas (mobile, tablet, desktop).

---

## 🛠️ Instrucciones para ejecutar localmente

### 1. Clonar el repositorio
gitbash
git clone https://github.com/Sevengex/Proyecto-Final-FrontEnd.git
cd Proyecto-Final-FrontEnd

### 2. Instalar dependencias
npm install

### 3. Ejecutar la aplicacion
npm run dev
Abrí en el navegador: http://localhost:5173

---

## 📚 Tecnologías utilizadas
- React (Vite) ⚛️

- React Router DOM

- Context API

- HTML

- CSS3 (Grid / Flexbox)

- FakeStore API