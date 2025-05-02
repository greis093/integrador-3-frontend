import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router"
import './Carrucel.scss'
const Carrucel = () => {
    
    const images = [
     "imgs/portada_tienda.webp",
     "imgs/portada_tienda2.webp",
   ];
   const imagesMovil = [
    "imgs/portada_movil.webp",
    "imgs/portadamovil-2.webp",
  ];
    const [carrucel, setcarrucel] = useState(0);
    useEffect(() => {
     const interval = setInterval(() => {
       setcarrucel((prevIndex) => (prevIndex + 1) % images.length);
     }, 10000);
     return () => clearInterval(interval);
   });
  return (
      <>
       <div className="gallery-container">
      <div className="image-wrapper">
        <img src={images[carrucel]} alt={`Foto ${carrucel + 1}`} />
      </div>
      <NavLink to= "./Tienda" className="shop-button">Tienda</NavLink>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === carrucel ? "active" : ""}`}
            onClick={() => setcarrucel(index)}
          ></span>
        ))}
      </div>
    </div>

    <div className="gallery-container-mobil">
      <div className="image-wrapper">
        <img src={imagesMovil[carrucel]} alt={`Foto ${carrucel + 1}`} />
      </div>
      <NavLink to= "./Tienda"className="shop-button">Tienda</NavLink>
      <div className="dots">
        {imagesMovil.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === carrucel ? "active" : ""}`}
            onClick={() => setcarrucel(index)}
          ></span>
        ))}
      </div>
    </div>
      </>
   
    
  )
}

export default Carrucel
