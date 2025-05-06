import React, { useContext } from 'react'
import './ItemCarrito.scss'
import CarritoContext from '../../contexts/CarritoContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash,faEye} from '@fortawesome/free-solid-svg-icons'
import Swal from "sweetalert2";
import {  useNavigate } from 'react-router'

const ItemCarrito = ({producto}) => {

    const { eliminarProductoDelCarritoContext,
      subtotalPrecioItemCarritoContext,
      agregarProductoAlCarritoContext,
      restarProductoAlCarritoContext
     } = useContext(CarritoContext)
     const navigate = useNavigate()
    const handleEliminar = (id) => {
        //console.log('Eliminando el producto...', id)
        //lógica de Sweet Alert
            Swal.fire({
              title: "¿Estás seguro?",
              text: "¡No podrás revertir esto!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Si, borrar el producto!"
            }).then((result) => {
              if (result.isConfirmed) {
                eliminarProductoDelCarritoContext(id)
                Swal.fire({
                  title: "Deleted!",
                  text: "Su archivo ha sido eliminado.",
                  icon: "success"
                }); } else {
                        Swal.fire({
                          title: "No lo borraste!",
                          text: "El producto no se borro",
                          icon: "info"
                        });
                      }
                    });
      
    }
    const handleRestar =(producto) =>{
      restarProductoAlCarritoContext(producto)
       
    }
    const handleAgregar =(producto) =>{ 
      
       agregarProductoAlCarritoContext(producto)
        
    }
    const handleVer = (id) => {
      //console.log(id)
      navigate(`/productocarrito/detalle/${id}`)
    } 
    const subtotal= subtotalPrecioItemCarritoContext(producto) 
  return (
    <tr>
        <td>
            <img src={producto.foto} alt={producto.nombre} width="50px" />
        </td>
        <td>
         {producto.nombre} 
        </td>
        <td>{producto.precio}</td>
        <td>
          <div className='celda_cantidad'>
            <div className='celda_cantidad__superior'>
            <div className='celda_cantidad_celda_botn'>
              <button className='celda_cantidad__botones' onClick={()=> handleRestar(producto)}> - </button>
            </div>
            <div className='celda_cantidad__numero'>{producto.cantidad}</div>
            <div className='celda_cantidad_celda_botn'>
              <button className='celda_cantidad__botones' onClick={()=> handleAgregar(producto)}> + </button>
            </div>
            </div>
            <div className='celda_cantidad__inferior'>
            <div className='celda_cantidad__stock'>stock {producto.stock} unid.</div>
            </div>
          </div>
        </td>
       
        <td>{subtotal}</td>
        <td>
        <button style={{border: "none",}}  onClick={() => handleVer(producto.id)} ><FontAwesomeIcon icon={faEye } /></button>
        </td>
        <td>
            <div className="basurero"onClick={() => handleEliminar(producto.id)}>
            <FontAwesomeIcon icon={faTrash} style={{color: "#b3bac7",}} />
            </div>
        </td>
    </tr>
  )
}

export default ItemCarrito