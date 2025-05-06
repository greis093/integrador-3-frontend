import React, { useContext } from 'react'
import useTitulo from '../hooks/useTitulo'
import Card from "../components/Card"
import './Tienda.scss'
import ProductosContext from "../contexts/ProductosContext"
import FiltroTipoArreglo from '../components/tienda/FiltroTipoArreglo'


const Tienda = () => {
  let { productos, productosFiltrados } = useContext(ProductosContext)
  useTitulo('Tienda')
  //console.log('productos filtrados',productosFiltrados)
  if (productosFiltrados.length === 0) {
    productosFiltrados = productos;
     
          }


  return (
    <>
    <section className="section-tienda">
            <header className="header">
                    <h1>Tienda</h1>
            </header>
        </section>

      <section className="tienda-container">
     

          <FiltroTipoArreglo/>

      <div className="productos-container" id="container-productos-tienda">
    
       {
          productosFiltrados && productosFiltrados.map((producto) =>(
            <Card producto={producto} key={producto.id}/>
         ))
        }
      
      </div>
      </section>
    </>
    
  )
}

export default Tienda
