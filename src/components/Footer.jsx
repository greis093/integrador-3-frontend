import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faInstagram,faCcMastercard, faCcVisa,faCcPaypal,faCcDinersClub} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div id="shopify-section-footer" className="shopify-section--footer">
      <footer id="section-footer" data-section-id="footer" data-section-type="footer" className="footer">
        <div className="shopify-section--footer__container-footer">
        <div className="shopify-section--footer__text">
          <h2 className="footer__Title">Florería bloom Yirley</h2>
          <div className="shopify-section-footer__Content">
            <div className="footer__Content">
            <p><FontAwesomeIcon icon={faPhone} /> 992 923 999</p>
            <p>floreriabloomyirley.com</p>
            </div>
            <div className="footer__Social">
               <a href='' className="Link Link--primary" target="_blank" rel="noopener" aria-label="Facebook">
                  <span className="Icon-Wrapper--clickable">
                  <FontAwesomeIcon icon={faFacebookF} style={{color: "#f7f3f3",}} />{' '}
              </span>
                </a>
                               
           <a href='' className="Link Link--primary" target="_blank" rel="noopener" aria-label="Instagram">
                  <span className="Icon-Wrapper--clickable">
                  <FontAwesomeIcon icon={faInstagram} style={{color: "#f7f3f3",}}/>
                  </span>
                </a>
            </div>
          </div>
        </div>
        <div className="shopify-section__Footer footer__contenedor-tarjetas-mobil">
        <FontAwesomeIcon icon={faCcMastercard} style={{color: "#f7f3f3",}} />{' '}  
        <FontAwesomeIcon icon={faCcVisa} />{' '}
        <FontAwesomeIcon icon={faCcDinersClub} />{' '}
        <FontAwesomeIcon icon={faCcPaypal} />

        </div>
        </div>
        <div className="footer__Copyright">
          <a href="/" className="footer__StoreName">© Florería Bloom Yirley</a>
        <a href="/"  className="footer__StoreName" title="Shopify">Desarrollado por YIAP</a>
        </div> 
      </footer>
      </div>
  )
}

export default Footer
