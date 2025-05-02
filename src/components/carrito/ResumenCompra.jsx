import React, { useContext } from 'react'
import CarritoContext from "../../contexts/CarritoContext"
import './ResumenCompra.scss'
import ListadoItemResumen from './ListadoItemResumen'
import Swal from "sweetalert2";
const ResumenCompra = () => {

         const { carrito, 
            limpiarCarritoContext,
            guardarCarritoBackendContext,
            subtotalPrecioCarritoContext
         } = useContext(CarritoContext)
    
         const subtotalgeneral= subtotalPrecioCarritoContext(carrito) 
        const handleComprar = () => {
           
            guardarCarritoBackendContext()
            Swal.fire({
              title: "Comprado!",
              text: "Compra exitosa.",
              icon: "success"
            })
        }
        
        const handleLimpiarCarrito = () => {
          
            //lógica de Sweet Alert
                        Swal.fire({
                          title: "¿Estás seguro?",
                          text: "¡No podrás revertir esto!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Si, Eliminar el carrito!"
                        }).then((result) => {
                          if (result.isConfirmed) {
                            limpiarCarritoContext()
                            Swal.fire({
                              title: "Deleted!",
                              text: "Su carrito ha sido borrado.",
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
  return (
    <>
      <div className='contenedor'>
        <table className='detalle-tabla'>
            <th className='titulo'> Resumen de Compra</th>
           <tr className='fila-tabla-resumen'> {
                carrito.length <= 0 ? (
                    <tr className='fila-tabla-resumen'>
                        <td colSpan={5} style={{textAlign: 'center'}}>No hay productos</td>
                    </tr>
                ) : (
                    carrito.map((producto, idx) => (
                        <ListadoItemResumen key={idx} producto={producto} />
                    ))
                )
            }</tr>
            <tr className='fila-tabla-resumen-total'>Total : S/{subtotalgeneral}  </tr>
        </table>
     

      { !carrito.length <= 0 && (
            <>
                <button  className="bton-vaciar" onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                <button className="bton-comprar" onClick={handleComprar}>Comprar</button>
            </>
        )
    }
     </div>
    </>
  )
}

export default ResumenCompra
