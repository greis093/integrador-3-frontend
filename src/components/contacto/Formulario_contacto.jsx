
import './Formulario_contacto.scss'
import { useContext,  useState } from "react"
import MensajeContext from "../../contexts/MensajesContext"

import Swal from "sweetalert2";

const Formulario_contacto = () => {
const {crearMensajeContext}  = useContext(MensajeContext)

  const formInicial={
      nombre_completo:'',
      celular:'',
      correo:'',
      mensaje:''
  }

      const [form, setForm] = useState(formInicial)
     
      const handleSubmit =(e)=>{
        e.preventDefault()

             if (!form.nombre_completo|| !form.celular ||  !form.correo || !form.mensaje) {
                      Swal.fire({
                          title: "Error",
                          text: "Todos los campos obligatorios (*) deben completarse",
                          icon: "error"
                      });
                      return;
                    } else{
                        crearMensajeContext(form)
                        Swal.fire({
                            title: "Enviado!",
                            text: "Gracias por cumunicarse con nosotros",
                             icon: "success"
                          });

                    }
                    setForm(formInicial)
      }
      
      const handleChange =(e) =>{
        const {  name, value} = e.target

        setForm({
            ...form,
            [name]: value

            
        });
      }
    
  return (
    <>
      <div className="information">
          <form className="formulario_contacto" onSubmit={handleSubmit}>
            <fieldset >
              <legend className="formulario_contacto__title">Envíanos un mensaje</legend>
            <div className="formulario_contacto__data">
              <label htmlFor="lbl-nombre_completo" >Nombre y apellido *</label>
              <input className="formulario_contacto__container" 
              type="text" 
              id="lbl-nombre_completo" 
              name="nombre_completo" 
              maxLength="25" 
              value={form.nombre_completo}
              onChange={handleChange}
              required/>
            </div>
          
          <div className="formulario_contacto__data">
            <label htmlFor="lbl-celular" >Celular *</label>
            <input className="formulario_contacto__container" 
            type="number" 
            id="lbl-celular" 
            name="celular"
            value={form.celular}
            onChange={handleChange}
            required/>
          </div>
            
          <div className="formulario_contacto__data">
            <label htmlFor="lbl-correo" >Correo electrónico *</label>
            <input className="formulario_contacto__container" 
            type="email" 
            id="lbl-correo" 
            name="correo" 
            value={form.correo}
            onChange={handleChange}
            required/>
          </div>
            
           <div className="formulario_contacto__data">
            <label htmlFor="lbl-mensaje" >Mensaje *</label>
            <textarea className="formulario_contacto__container__msj" 
            type="text" 
            id="lbl-mensaje" 
            name="mensaje" 
            maxLength="100" 
            value={form.mensaje}
            onChange={handleChange}
            required> </textarea>
          </div> 
          <div className="formulario_contacto__boton">
            <button className="formulario_contacto__boton__enviar" type="submit" onClick={handleSubmit}>Enviar</button>

          </div>
          </fieldset>
          </form>
        </div>
    </>
  )
}

export default Formulario_contacto
