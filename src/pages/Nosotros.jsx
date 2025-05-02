import useTitulo from "../hooks/useTitulo"
import './Nosotros.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMedal,faHandHoldingHeart,faThumbsUp,faUsersGear,faUserGraduate,faHandshakeSimple,faHouseLock,faTruckFast} from '@fortawesome/free-solid-svg-icons'
const Nosotros = () => {
  useTitulo('Nosotros')
  return (
    <>
        <section className="section-nosotros">
            <header className="header">
                    <h1>Nosotros</h1>
            </header>
        </section>
        <section className="nosotros-container">
            <div className="description">
                <article className="description__text">
                    <h2>¿Quiénes somos?</h2>
                    <p>Empezó hace más de 20 años como una tienda de plantas artificiales decorativas, con el tiempo, la experiencia y viendo siempre las necesidades de nuestros queridos clientes, se inauguró la florería y un hermoso vivero para incursionar en la venta de plantas y flores naturales para todas aquellas personas amantes de la floricultura.</p>
                    <p>Con la creatividad y conocimiento del propietario y fundador Johnny Aguilar, se comenzaron a realizar diseños, mantenimientos y cuidados de jardines, plantas de interior y exterior; diseños florales con repartos a domicilio para ocasiones como Cumpleaños, Nacimientos, Aniversarios, Defunciones, Matrimonios, Decoraciones para recepción de empresas; días especiales como San Valentín, Día de la Madre, Día del Padre, Día de la Mujer, Día de la Secretaria y Navidad.</p>
                  </article>
              </div>
                <div className="photo">
                    <img className="photo__nosotros" src="imgs/floreria.webp"/>
            </div>
        </section>
        <section className="values__container">
          <div className="values">
            <div className="values__icon">
            <FontAwesomeIcon icon={faMedal} />
            </div>
            <div className="values__text">
              <h3>Misión</h3>
              <p>Brindarles siempre una excelente experiencia; entregando momentos, generando sonrisas y extraordinarios recuerdos con nuestras hermosas flores y excelente servicio.</p>
            </div>
          </div>
          <div className="values">
            <div className="values__icon">
            <FontAwesomeIcon icon={faHandHoldingHeart} />
            </div>
            <div className="values__text">
              <h3>Visión</h3>
              <p>Seguir creciendo para ser la marca más confiable de envío de flores y regalos a nivel nacional e internacional.</p>
            </div>
          </div>
          
        </section>
        
        <section className='different-section'>
          <div className="different">
            <h2>¿Qué nos hace diferentes?</h2>
          </div>
          <div className="different-section__container">

          <div className="different__value">
            <div className="different__value__icon">              
            <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <div className="different__value__text">
              <h3>Calidad</h3>
              <p>Contamos con productos de excelente calidad, con diseños exclusivos e innovadores.</p>
            </div>
          </div>

          <div className="different__value">
            <div className="different__value__icon">
            <FontAwesomeIcon icon={faUsersGear} />
            </div>
            <div className="different__value__text">
              <h3>Diversidad</h3>
              <p>Contamos con amplio catalogo de productos para envío de flores y regalos para toda ocasión.</p>
            </div>
          </div>

          <div className="different__value">
            <div className="different__value__icon">
            <FontAwesomeIcon icon={faUserGraduate} />
            </div>
            <div className="different__value__text">
              <h3>Experiencia</h3>
              <p>Más de 20 años de experiencia en el mercado peruano. </p>
            </div>
          </div>

          <div className="different__value">
            <div className="different__value__icon">
            <FontAwesomeIcon icon={faHandshakeSimple} />
            </div>
              <h3>Compromiso</h3>
              <p>Nuestro principal compromiso esta en la satisfacción del cliente.</p>
            </div>

          <div className="different__value">
            <div className="different__value__icon">
            <FontAwesomeIcon icon={faHouseLock} />
            </div>
            <div className="different__value__text">
              <h3>Seguridad</h3>
              <p>Contamos con variedad de medios de pagos con la mayor seguridad.</p>
            </div>
          </div>

          <div className="different__value">
            <div className="different__value__icon">
            <FontAwesomeIcon icon={faTruckFast} />
            </div>
            <div className="different__value__text">
              <h3>Amplia cobertura</h3>
              <p>Contamos con servicio a lima y provincias para el mismo día. Y envíos internacionales a través de FTD.</p>
            </div>
          </div>
        </div>
        </section>
    </>
  )
}

export default Nosotros
