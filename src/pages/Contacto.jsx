
import Datos_contacto from "../components/contacto/Datos_contacto"
import Formulario_contacto from "../components/contacto/Formulario_contacto"
import Mapa from "../components/contacto/Mapa"
import useTitulo from "../hooks/useTitulo"
import './Contacto.scss'
const Contacto = () => {
  useTitulo('Contacto')
  return (
    <>
        <section className="section-encuentranos">
            <header className="header">
                    <h1>Encuentranos</h1>
            </header>
        </section>
       
        <section className="informacion-container">
          <Datos_contacto/>
          <Formulario_contacto/>
        </section>
        <Mapa/>
      </>
  )
}

export default Contacto
