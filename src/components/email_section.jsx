import '@styles/email_section.css';
import { IconConstants } from "@utils/iconConstants";

export function EmailSubscription() {
    const icons = IconConstants;
    return (
        <div className="section__subscription" aria-labelledby="newsletter__title">
            <img className="subscription__icon" src={icons.email_icon} alt="Icono de sobre de correo" />
            <h2 className="subscription__title">Suscríbete a nuestro newsletter</h2>
            <p className="subscription__subtitle">Recibe las últimas novedades y ofertas exclusivas y recomendaciones personalizadas directamente en tu correo.</p>
            <div className="subscription__form">
                <input type="email" className='form__email' id="form__email" placeholder="tucorreo@email.com" aria-label="Introduce tu correo electrónico"/>
                <button className="form__button" type="submit"> Suscribirse </button>
            </div>  
        </div>
    );
}
