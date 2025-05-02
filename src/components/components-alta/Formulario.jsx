import './Formulario.scss'
import { useContext, useEffect, useState } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import Swal from "sweetalert2";

const Formulario = () => {
    const {crearProdutoContext, 
        productoAEditar, 
        setProductoAEditar,
        actualizarProductoContext} = useContext(ProductosContext)
  const formInicial={
      id:null,
      nombre:'',
      precio:'',
      precio_antiguo:'',
      stock:'',
      categoria:[],
        love:false,
        box:false,
        bouquet:false,
        graduacion:false,
      detalles:'',
      foto:'',
      envio:false
  }
  useEffect(()=>(
    productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
  ),[productoAEditar])
      const [form, setForm] = useState(formInicial)


      const handleSubmit =(e)=>{
        e.preventDefault()
        if (!form.nombre || !form.precio || !form.precio_antiguo || !form.detalles || !form.stock ) {
          Swal.fire({
              title: "Error",
              text: "Todos los campos obligatorios deben completarse",
              icon: "error"
          });
          return;
        }
        if (!form.bouquet && !form.graduacion && !form.love && !form.box ){
          Swal.fire({
            title: "Error",
            text: "Selecciona minimo 1 opción de Categoria",
            icon: "error"
        });
        return;
        }
        if (form.id === null){
          
            crearProdutoContext(form)
            Swal.fire({
              title: "Creado!",
              text: "El producto se creo",
               icon: "success"
            });
            
        } else{
            actualizarProductoContext(form)
            Swal.fire({
                      title: "Actualizado!",
                      text: "El producto se actualizo",
                       icon: "success"
                    });
        }
        
        setProductoAEditar(formInicial)   
      }

      const handleChange =(e) =>{
          
          const { type, name, checked, value} = e.target
        if (type === "checkbox" && checked && name !== "envio") {
            form.categoria.push(name);
        }
          
          if (type === "checkbox"  && !checked  ){
            form.categoria = form.categoria.filter((i) => i !== name);
          }
        
            setForm({
                ...form,
                [name]: type === 'checkbox' ? checked : value
            });
        
      }

      const handleReset =()=>{
          setProductoAEditar(null)
      }
  return (
    <>
      <h2 className="titulo_formulario">Formulario de { productoAEditar ? 'edición' : 'carga'} de productos</h2>
        <div className={productoAEditar ? "formu" : "formu_nuevo"}>
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="formulario__fila">
            <label  className='formulario__datos' htmlFor="lbl-nombre">Nombre</label>
            <input className='formulario__input'type="text" 
            id="lbl-nombre" 
            name="nombre" 
            value={form.nombre} 
            onChange={handleChange} required/>
        </div>
        <div className="formulario__fila">
            <label className='formulario__datos' htmlFor="lbl-precio">Precio</label>
            <input className='formulario__input' type="number" 
            id="lbl-precio" 
            name="precio" 
           placeholder="S/"
            value={form.precio} 
            onChange={handleChange} required/>
        </div>
        <div className="formulario__fila">
            <label className='formulario__datos' htmlFor="lbl-precio_antiguo">precio antiguo</label>
            <input className='formulario__input' type="number" 
            id="lbl-precio_antiguo" 
            name="precio_antiguo" 
             placeholder="S/"
            value={form.precio_antiguo} 
            onChange={handleChange} required/>
        </div>
        <div className="formulario__fila">
            <label className='formulario__datos' htmlFor="lbl-stock">Stock</label>
            <input className='formulario__input' type="number" 
           id="lbl-stock" 
            name="stock" 
            value={form.stock} 
            onChange={handleChange} required/>
        </div>
        <div className="formulario__fila">
            <label className='formulario__datos' htmlFor="lbl-categoria">Categoria </label>
            <em className='formulario__check-categoria'>love</em>
            <input className='formulario__check' type="checkbox" 
            id="lbl-categoria-love" 
             name="love"
             checked={form.love}
            onChange={handleChange} />
            <em className='formulario__check-categoria'>box</em>
            <input className='formulario__check' type="checkbox" 
            id="lbl-categoria-box" 
             name="box"
             checked={form.box}
            onChange={handleChange} />
            <em className='formulario__check-categoria'>bouquet</em>
            <input className='formulario__check' type="checkbox" 
            id="lbl-categoria-bouquet" 
             name="bouquet"
             checked={form.bouquet}
            onChange={handleChange}  />
            <em className='formulario__check-categoria'>graduación</em>
            <input className='formulario__check' type="checkbox" 
            id="lbl-categoria-graduacion" 
             name="graduacion"
             checked={form.graduacion}
            onChange={handleChange} />
        </div>
        <div className="formulario__fila">
            <label className='formulario__datos' htmlFor="lbl-detalle">Detalles</label>
            <input className='formulario__input' type="text" 
            id="lbl-detalle" 
            name="detalles" 
            value={form.detalles} 
            onChange={handleChange} required/>
        </div >
        <div className="formulario__fila">
            <label className='formulario__datos' htmlFor="lbl-foto">Foto</label>
            <input className='formulario__input' type="text" 
            id="lbl-foto" 
            name="foto" 
            value={form.foto} 
            onChange={handleChange} />
        </div>
        <div className="formulario__fila">
            <label className='formulario__datos' htmlFor="lbl-envio">Envio</label>
            <input className='formulario__check' type="checkbox" 
            id="lbl-envio" 
            name="envio" 
            checked={form.envio} 
            onChange={handleChange}/>
        </div>
        <div className='botones'>
        <button  className="formulario__submit" type="submit" onClick={handleSubmit}>{ productoAEditar ? 'Editar' : 'Crear' }</button>
        <button className="formulario__reset" type="reset" onClick={handleReset}>Limpiar</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default Formulario
