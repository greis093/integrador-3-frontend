import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { ProductosProvider } from './contexts/ProductosContext.jsx'
import { MensajeProvider } from './contexts/MensajesContext.jsx'
import { CarritoProvider } from './contexts/CarritoContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoProvider>
      <ProductosProvider>
        <MensajeProvider>
             <App />
        </MensajeProvider>
      </ProductosProvider>
    </CarritoProvider>
  </StrictMode>,
)
