import useTitulo from "../hooks/useTitulo"

const NoEncontrado = () => {
  useTitulo('404')
  return (
    <div>
      NoEncontrado
    </div>
  )
}

export default NoEncontrado
