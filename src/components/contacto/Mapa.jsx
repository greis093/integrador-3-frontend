import React from 'react'
import './Mapa.scss'
const Mapa = () => {
  return (
    <div className="div_mapa">
      <iframe 
      className='contact_mapa' 
      alt="Mapa de Google" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.6713968937242!2d-77.11561054410866!3d-11.997224479285324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cdd287a96eb5%3A0xe5b590e9584540a6!2sAuxiliar%20Av.%20Canta%20Callao%2C%20Callao%2007031!5e0!3m2!1ses-419!2spe!4v1742663032584!5m2!1ses-419!2spe" 
      allowFullScreen 
      loading="lazy" 
      >

      </iframe>
    </div>
  )
}

export default Mapa
