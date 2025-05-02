import { createContext } from "react";
import { peticionesHttp } from "../helpers/peticiones-http";

//! CREANDO CONTEXTO

//! 1.Creamos el Context
const MensajeContext= createContext()
//! 2.Armamos el Provider
const MensajeProvider = ({ children}) =>{
    const url= import.meta.env.VITE_BACKEND_MENSAJES

    const crearMensajeContext = async(mensajeNuevo)=>{
            try {
             
                const options={
                    method: 'POST',
                    headers: {'content-type': 'application/json'},
                    body:JSON.stringify(mensajeNuevo)
                }
             await peticionesHttp(url, options)
            
            } catch (error) {
                console.error('[crearMensajeContext]',error)
            }
    }
   

    const data={
        crearMensajeContext
    }
    return<MensajeContext.Provider value={data}>{children}</MensajeContext.Provider>
}

//! 3. Exportamos el Context y el Provider
export{ MensajeProvider}
export default MensajeContext