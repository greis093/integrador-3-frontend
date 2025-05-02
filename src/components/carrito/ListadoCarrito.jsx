import { useContext } from "react"
import CarritoContext from "../../contexts/CarritoContext"
import ItemCarrito from "./ItemCarrito"
import './ListadoCarrito.scss'

const ListadoCarrito = () => {

    const { carrito, 
       
     } = useContext(CarritoContext)



  return (
    <>
    <div className="scroll" >
    <table className='tabla-carrito' >
        <thead>
            <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
               
            </tr>
        </thead>
        <tbody>
            {
                carrito.length <= 0 ? (
                    <tr>
                        <td colSpan={5} style={{textAlign: 'center'}}>No hay productos</td>
                    </tr>
                ) : (
                    carrito.map((producto, idx) => (
                        <ItemCarrito key={idx} producto={producto} />
                    ))
                )
            }
        </tbody>
    </table>
    </div>
    <hr />

</>
  )
}

export default ListadoCarrito