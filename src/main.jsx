import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './router/RouterApp'
import { UserProvider } from './context/UserContext'
import { UserProvider as AddUserProvider } from './context/AddUserContext'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddUserProvider>
      <UserProvider>
        <RouterApp />
      </UserProvider>
    </AddUserProvider>
  </StrictMode>,
)

