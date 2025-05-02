import React from 'react'
import { BrowserRouter } from 'react-router'
import Rutas from './routes/Rutas'
import Footer from './components/Footer'
import Cabecera from './components/Cabecera'

const App = () => {
  return (
    <BrowserRouter>
    <Cabecera/>
      <Rutas/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
