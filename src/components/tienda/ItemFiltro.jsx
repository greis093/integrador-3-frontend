import React, {  useContext, useState } from 'react'
import './ItemFiltro.scss'
import ProductosContext from "../../contexts/ProductosContext"
const ItemFiltro = () => {
  const {filtrarProductosATienda} = useContext(ProductosContext)
    const Inicial={
        love:false,
        box:false,
        bouquet:false,
        graduacion:false,
  }
    const [filtro, setFiltro] = useState(Inicial)

    const handleChange =(e) =>{
        const {name, checked} = e.target

        filtro[name] =  checked 
              setFiltro(filtro); 
             // console.log("despues", filtro)
    }

    //const filtrarProductosATienda 
      const handleSubmit =(e)=>{            
        e.preventDefault()
        if(!filtro){
          return
          }
        filtrarProductosATienda(filtro)
            
            }
        
  return (

    
    <>
     <div className="nav-bar-tienda__titulo">
          <p>Tipo de arreglo</p>
        </div>
        <form className="formulario" onSubmit={handleSubmit}>
        
          <input type="checkbox" 
          name="love"
          id="lbl-love" 
          value={filtro.love} 
          onChange={handleChange} 
          className="nav-bar-tienda__nav-item"/>
          <label className="nav-bar-tienda__filtros"  htmlFor="lbl-love"> Detalles de amor </label>
          <br/>
        
          <input type="checkbox"  
          name="box" 
          id="lbl-box" 
          value={filtro.box} 
          onChange={handleChange} 
          className="nav-bar-tienda__nav-item"/> 
          <label className="nav-bar-tienda__filtros"  htmlFor="lbl-box">Box de detalles</label>
          <br/>

          <input type="checkbox"  
          name="bouquet" 
          id="lbl-bouquet" 
          value={filtro.bouquet} 
          onChange={handleChange}
          className="nav-bar-tienda__nav-item"/> 
          <label className="nav-bar-tienda__filtros"  htmlFor="lbl-bouquet">Detalles en bouquet</label>
          <br/>

          <input type="checkbox"  
          name="graduacion"
          id="lbl-graduacion"
          value={filtro.graduacion} 
          onChange={handleChange} 
          className="nav-bar-tienda__nav-item"/> 
          <label className="nav-bar-tienda__filtros"  htmlFor="lbl-graduacion">Detalles para graduación</label>
          <br/>

        
        <div className="nav-bar-tienda__boton">
          <button className="nav-bar-tienda__boton__busqueda"  type="submit" onClick={handleSubmit}>Filtrar</button>
        </div>

        </form>
    </>
  )
}

export default ItemFiltro
