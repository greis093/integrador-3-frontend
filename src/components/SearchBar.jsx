import { Link } from 'react-router'
import './SearchBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import CarritoContext from "../contexts/CarritoContext"
import { useContext } from 'react'

const SearchBar = () => {
  
  const {carrito,calcularCantidadProductosCarritoContext } = useContext(CarritoContext)
 
 const carritoNavegador = calcularCantidadProductosCarritoContext(carrito)
  return (
    <div className="search-bar">
    <div className="menu-toogle">
      <label htmlFor="menu" className="menu-toogle__label">
        <span className="menu-toogle__top-bread"></span>
        <span className="menu-toogle__meat"></span>
        <span className="menu-toogle__bottom-bread"></span>
      </label>
    </div> 

    <div className="search-bar__logo-container">
      <img className="search-bar__logo" src="/imgs/flower_shop_logo.webp" alt="Logo de la floreria"/>
    </div >
    <div className="button-buscador">
      <label htmlFor="buscar" className="search_button__form-submit"> 
         <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
    </div>
    <div className="search-bar__carrito-container"> 
      <Link to='/carrito'>
      <p className='numero_carrito'>{carritoNavegador}</p>
      <FontAwesomeIcon icon={faCartShopping}  style={{color: "#ffffff"}}/>
      
      </Link>
    </div>
  </div> 
  )
}

export default SearchBar
