import { useRoutes } from "react-router"
import Alta from "../pages/Alta"
import Inicio from "../pages/Inicio"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import Carrito from "../pages/Carrito"
import NoEncontrado from "../pages/NoEncontrado"
import Tienda from "../pages/Tienda"
import ProductosDetalle from "../pages/ProductosDetalle"
import MensajesClientes from "../pages/MensajesClientes"
import ProductoDetalleCarrito from "../pages/ProductoDetalleCarrito"
import Filtro from "../pages/Filtro"

const Rutas = () => {
    const hookRutas =useRoutes(
        [
            {
                path: "/",
                element: <Inicio/>
            },
            {
                path: "/alta",
                element: <Alta/>
            },
            {
                path: "/nosotros",
                element: <Nosotros/>
            },
            {
                path: "/contacto",
                element: <Contacto/>
            },
            {
                path: "/carrito",
                element: <Carrito/>
            },
            {
                path: "/tienda",
                element: <Tienda/>
            },
            {
                path: '/productos/detalle/:id', /* :id (obligatorio) | :id? (opcional) */
                element: <ProductosDetalle />
            },
            {
                path: '/productocarrito/detalle/:id', /* :id (obligatorio) | :id? (opcional) */
                element: <ProductoDetalleCarrito />
            },
            {
                path: '/*',
                element: <NoEncontrado/>
            },
            {
                path: '/mensajes/detalles',
                element: <MensajesClientes/>
            },
            {
                path: '/buscar',
                element: <Filtro/>
            }
        ]
    )
  return hookRutas
}

export default Rutas
