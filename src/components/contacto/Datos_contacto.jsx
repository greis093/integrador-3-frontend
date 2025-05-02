import React from 'react'
import "./Datos_contacto.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot,faPhoneVolume,faUserClock,faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Datos_contacto = () => {
  return (
    <div className="information">
            <div className="information__values">
              <div className="information__values__icon">
              <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="information__values__text">
                <h3>Dirección Principal</h3>
                <p>Jiron Pucara 249 Callao</p>
              </div>
          </div>
          <div className="information__values">
            <div className="information__values__icon">
            <FontAwesomeIcon icon={faPhoneVolume} />
            </div>
            <div className="information__values__text">
              <h3>Teléfonos</h3>
              <p>+51 992923999 </p>
              <p>+51 939419500</p>
            </div>
        </div>
        <div className="information__values">
        <div className="information__values__icon">
        <FontAwesomeIcon icon={faUserClock} />
        </div>
        <div className="information__values__text">
          <h3>Horario</h3>
          <p>Lunes a Sábado de 9:00 am – 6:00 pm. Domingos y feriados de 10am a 2pm.</p>
        </div>
      </div>

    <div className="information__values">
      <div className="information__values__icon">
      <FontAwesomeIcon icon={faEnvelope} />
         </div>
      <div className="information__values__text">
        <h3>Correo</h3>
        <p>info@blomm.com.pe</p>
        </div>
        </div>
  </div>
  )
}

export default Datos_contacto
