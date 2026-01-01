import { IconConstants } from "@utils/iconConstants";

export function EmailSubscription() {
    const icons = IconConstants;
    return (
        <div className="email-subscription" aria-labelledby="newsletter-title">
        <img className="image-email" src={icons.email_icon} alt="Icono de sobre de correo" />
        <h2 className="title-suscribe">Suscríbete a nuestro newsletter</h2>
        <p id="newsletter-title">Recibe las últimas novedades y ofertas exclusivas y recomendaciones personalizadas directamente en tu correo.</p>
        <div className="subscription-form">
            <input type="email" id="email-input" placeholder="tucorreo@email.com" aria-label="Introduce tu correo electrónico"/>
            <button className="button-suscribe" type="submit"> Suscribirse </button>
        </div>  
        </div>
    );
}
