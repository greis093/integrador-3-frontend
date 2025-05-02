import React, { useContext } from 'react'
import CarritoContext from '../../contexts/CarritoContext'
const ListadoItemResumen = ({producto}) => {
    const { 
        subtotalPrecioItemCarritoContext
       } = useContext(CarritoContext)

    const subtotal= subtotalPrecioItemCarritoContext(producto) 
  return (
    <tr>

            <td>{producto.nombre}</td>
            <td>S/{subtotal}</td>
           
    
     </tr>
  )
}

export default ListadoItemResumen
