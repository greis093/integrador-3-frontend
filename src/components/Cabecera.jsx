import './Cabecera.scss'
import SearchBar from './SearchBar'
import Navbar from './Navbar'
import BotonBuscar from './BotonBuscar'


const Cabecera = () => {
  return (
    <header className="main-header">
    <input type="checkbox" id="menu"/>
    <Navbar/>

    <BotonBuscar/>

   <SearchBar/>

  </header>
  )
}

export default Cabecera
