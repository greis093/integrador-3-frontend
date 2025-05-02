import React from 'react'
import './FiltroTipoArreglo.scss'
import ItemFiltro from './ItemFiltro'
const FiltroTipoArreglo = () => {
  return (
    <>
         <label  htmlFor="menu-catalogo" className="catalogo-container">
          <div className="menu__catalogo">
            <p>Catálogo</p>
          </div> 
            <div className="menu__icono">
              <i className="fa-solid fa-square-caret-down"></i>
            </div>
      </label>

      <input type="checkbox" id="menu-catalogo"/>
      <nav className="nav-bar-tienda">
      <ItemFiltro/>

      </nav>

    </>
  )
}

export default FiltroTipoArreglo
