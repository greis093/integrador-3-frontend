import './Inicio.scss'
import useTitulo from "../hooks/useTitulo"

import Carrucel from "../components/inicio/Carrucel"

const Inicio = () => {
   useTitulo('Inicio')
   
  return (

    <main>

      <Carrucel/>
     
    </main>
 
  )
}

export default Inicio
