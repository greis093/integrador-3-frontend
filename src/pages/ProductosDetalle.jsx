import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Spinner from "../components/spinner/Spinner"
import './ProductosDetalle.scss'

const ProductosDetalle = () => {

  const { id } = useParams()
 

  const [productoDetalle, setProductoDetalle] = useState() // productoDetalle = {}

  useEffect(() => {
   
    getOne(id)
    
  },[])

  const getOne = async () => {

    // Verbo Get
    // http://localhost:8080/productos/id

    const urlGetOne = import.meta.env.VITE_BACKEND_PRODUCTOS + id

    try {
      const res = await fetch(urlGetOne)

      if (!res.ok) {

        throw new Error('No se pudo obtener el producto')
      }

      const data = await res.json()
      setProductoDetalle(data)
      
    } catch (error) {
    
     console.error(error)
    }

  }
  

  return (
    <>
    <div className="section-titulo">
    <h1>Producto detalle</h1>
    </div>

      {
        productoDetalle ? 
          (
            <>
           
            <p className="detalle_producto">El nombre del producto:</p> <div className="producto">{productoDetalle.nombre}</div>
              <p className="detalle_producto"> El stock del producto es:</p> <div className="producto">{productoDetalle.stock}</div>
              <p className="detalle_producto">El precio:</p> <div className="producto">{"S/"}{productoDetalle.precio}</div>
              <p className="detalle_producto">El precio antiguo:</p> <div className="producto">{"S/"}{productoDetalle.precio_antiguo}</div>
              <p className="detalle_producto">El detalle del producto:</p><div className="producto"> {productoDetalle.detalles}</div>

              <p className="detalle_producto">La categoria del producto:</p><div className="producto"> {productoDetalle.categoria}</div>
             
             <p className="detalle_producto"> La foto del producto:</p>
             <div className="contenedor_imagen">
             <img className="imagen_producto" src={productoDetalle.foto} alt={productoDetalle.nombre}/>
             </div>
    
            </>
          ) :
          (
            <Spinner />
          )

      }
    </>
  )
}

export default ProductosDetalle