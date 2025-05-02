import ListadoCarrito from "../components/carrito/ListadoCarrito"
import ResumenCompra from "../components/carrito/ResumenCompra"
import useTitulo from "../hooks/useTitulo"

const Carrito = () => {
  useTitulo('Carrito')
  return (
    <>
      <h1> Productos en el carrito</h1>
      <hr/>
      <ListadoCarrito/>
      <ResumenCompra/>
    </>
  )
}

export default Carrito
