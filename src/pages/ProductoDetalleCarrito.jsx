import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import Spinner from "../components/spinner/Spinner"
import './ProductoDetalleCarrito.scss'
import CarritoContext from "../contexts/CarritoContext"

const ProductosDetalleCarrito = () => {
  const {agregarProductoAlCarritoContext,elProductoEstaEnElCarrito} = useContext(CarritoContext)
  const { id } = useParams()
  const [productoDetalle, setProductoDetalle]= useState()
  const [valor, setValor] = useState('+ Añadir al Carrito')
 
  useEffect(() => {
    getOne(id)

  },[])
  useEffect(() => {
    if (productoDetalle) {
      validarBotonCompra();
    }
  }, [productoDetalle]);
   
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
  const validarBotonCompra= () =>{
     if (elProductoEstaEnElCarrito(productoDetalle)) {
      setValor("Añadido en el carrito")
    }
  }

  const handleAgregar = () => {
    if (!elProductoEstaEnElCarrito(productoDetalle)) {
      agregarProductoAlCarritoContext(productoDetalle);
      setValor("Añadido en el carrito");
    }
  }

  return (
    <>
    <div className="section-titulo">
    <h1>Detalle del producto</h1>
    </div>

      {
        productoDetalle ? 
          (
            <>
            <div className="container-detalle-productos-carrito">
            <div className="contenedor_imagen">
             <img className="imagen_producto_carrito" src={productoDetalle.foto} alt={productoDetalle.nombre}/>
             </div>
            <div  className="container-producto-carrito">
              <div className="container-producto-carrito__titulo">
              <p>{productoDetalle.nombre}</p>
              </div>
              <div >
              <p className="container-producto-carrito__detalle"> {productoDetalle.detalles}</p>
              <p className="container-producto-carrito__detalle"> El stock del producto es: {productoDetalle.stock} unidades</p>
              <p className="container-producto-carrito__detalle">La categoria:{productoDetalle.categoria.map((c)=>(<span className="categoria_span">{ c }</span>))}</p>
              <p className="container-producto-carrito__detalle">El precio: {"S/"}{productoDetalle.precio}</p>
              </div>
          
              <button  className={`${valor === "Añadido en el carrito" ? "boton-añadido" : "boton-compra"}`} onClick={()=> handleAgregar()}>{valor}</button>
           </div>
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

export default ProductosDetalleCarrito