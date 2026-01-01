import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styleAccess.css";
import accessImage from "../resources/assets/accessSection.png";
import bookImage from "../resources/assets/book.png";
import carImage from "../resources/assets/car.png";
import cardImage from "../resources/assets/card.png";
import supportImage from "../resources/assets/support.png";
import bookSusurro from "../resources/assets/books_image/susurro.png";
import bookCronicas from "../resources/assets/books_image/cronicas.png";
import bookMisterios from "../resources/assets/books_image/misterios.png";
import bookAmor from "../resources/assets/books_image/amor.png";
import emailImage from "../resources/assets/email.png";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import { Copyright } from "../components/footer.jsx";

function Access() {

  const nav = useNavigate();
  const timeOut =useRef(null);

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'scroll', 'touchstart', 'mousedown', 'keypress', 'click'];

    const resetTimeout = () => {
      if (timeOut.current) {
        clearTimeout(timeOut.current);
      }

      timeOut.current = setTimeout(() => {
        nav('/');
      }, 5000);
    };

    events.forEach((event) => {
      window.addEventListener(event, resetTimeout);
    });

    resetTimeout();

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, resetTimeout);
      });

      if (timeOut.current) {
        clearTimeout(timeOut.current);
      }
    };
  }, [nav]);

  return (
    <div className="components-access">
      <Header/>
      <HeroSection/>
      <MainContent/>
      <EmailSubscription/>
      <Footer/>
      <Copyright/>
    </div>
  );
}
export default Access;



export function HeroSection() {
  return (
    <div className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <h2 id="hero-title" className="hero__title">Bienvenidos a Relatos de Papel</h2>
        <p id="hero-paragraph" className="hero__description">Tu librería digital para descubrir, comprar y vivir nuevas historias. Miles de <br />
          títulos esperando por ti.
        </p>
        <div className="hero__actions">
          <button className="btn btn--primary" type="button">Explorar Libreria</button>
          <button className="btn btn--secondary" type="button">Ver Novedades</button>
        </div>
        <div className="hero__stats">
          <p className="hero__stat-number">5000+</p>
          <p className="hero__stat-text">Libros disponibles</p>
          <p className="hero__stat-number">10000+</p>
          <p className="hero__stat-text">Lectores felices</p>
        </div>
      </div>
      <div className="hero__image-container">
        <img className="hero__image" src={accessImage} alt="Libreria cafe grande con estanteria de dos pisos" />
        <div className="hero__highlight-card">
          <p className="hero__highlight-text">Libro del mes</p>
          <p className="hero__highlight-title font-bold">Cien años de soledad</p>
          <p className="hero__highlight-rating">⭐⭐⭐⭐⭐ 4.9</p>
        </div>
      </div>
    </div>
  );
}

export function MainContent() {
  return (
    <main className="main-content">
      <h2 id="main-content" className="main-content__title">¿Qué encontrarás aquí?</h2> <br />
      <p className="main-content__subtitle">Una experiencia de compra diseñada para los amantes de la lectura</p> <br />

      <section className="features">
        <div className="features__item">
          <img src={bookImage} alt="Icono de libro" />
          <h3 className="feature-title">Amplio catálogo</h3> 
          <p>Miles de títulos en todos los géneros literarios</p>
        </div>
        <div className="features__item">
          <img src={carImage} alt="Icono de coche de reparto" />
          <h3 className="features__title">Envíos Gratis</h3>
          <p>En compras superiores a $50</p>
        </div>
        <div className="features__item">
          <img src={cardImage} alt="Icono de tarjeta de crédito" />
          <h3 className="features__title">Pagos Seguros</h3>
          <p>Múltiples métodos de pago disponibles</p>
        </div>
        <div className="features__item">
          <img src={supportImage} alt="Icono de soporte al cliente" />
          <h3 className="features__title">Soporte 24/7</h3>
          <p>Estamos aquí para ayudarte siempre</p>
        </div>
      </section>

      <h2 className="featured">Libros destacados</h2>
      <p className="featured"> Cada libro es una puerta. Elige la historia que
          quieres vivir hoy. </p>

      <section className="book-list">
        <article className="book-card">
          <img src={bookSusurro} alt="Portada del libro El Susurro de las páginas" />
          <h3 className="book-description">El Susurro de las páginas</h3>
          <p className="book-author">María Garcia</p>
          <p className="book-rating" aria-label="Valoración: 4.8 de 5 estrellas">⭐⭐⭐⭐⭐ 4.8</p>
          <div className="price-container">
            <p className="book-price">$ 60.000</p>
              <img className="image-cart" src="/src/assets/iconcart.png"/>
            <button type="button"> </button>
          </div>
        </article>
        <article className="book-card">
          <img src={bookCronicas} alt="Portada del libro Crónicas del tiempo" />
          <h3 className="book-description">Crónicas del tiempo</h3>
          <p className="book-author">Carlos Ruiz</p>
          <p className="book-rating" aria-label="Valoración: 4.9 de 5 estrellas">⭐⭐⭐⭐⭐ 4.9</p>
          <div className="price-container">
            <p className="book-price">$ 90.000</p>
              <img className="image-cart" src="/src/assets/iconcart.png"/>
            <button type="button"></button>
          </div>
        </article>
        <article className="book-card">
          <img src={bookMisterios} alt="Portada del libro Misterios de medianoche" />
          <h3 className="book-description">Misterios de medianoche</h3>
          <p className="book-author">Ana Martínez</p>
          <p className="book-rating" aria-label="Valoración: 4.7 de 5 estrellas">⭐⭐⭐⭐⭐ 4.7</p>
          <div className="price-container">
            <p className="book-price">$ 70.000</p>
              <img className="image-cart" src="/src/assets/iconcart.png"/>
            <button type="button"></button>
          </div>

        </article>
        <article className="book-card">
          <img src={bookAmor} alt="Portada del libro Amor en las estrellas" />
          <h3 className="book-description">Amor en las estrellas</h3>
          <p className="book-author">Laura Fernández</p>
          <p className="book-rating" aria-label="Valoración: 4.6 de 5 estrellas">⭐⭐⭐⭐⭐ 4.6</p>
          <div className="price-container">
            <p className="book-price">$ 80.000</p>
              <img className="image-cart"  src="/src/assets/iconcart.png"/>
            <button type="button"></button>
          </div>
        </article>
      </section>
       <button className="button-all" type="button"> Ver todos los libros </button>
    </main>
  );
}

export function EmailSubscription() {
  return (
    <div className="email-subscription" aria-labelledby="newsletter-title">
      <img className="image-email" src={emailImage} alt="Icono de sobre de correo" />
      <h2 className="title-suscribe">Suscríbete a nuestro newsletter</h2>
      <p id="newsletter-title">Recibe las últimas novedades y ofertas exclusivas y recomendaciones personalizadas directamente en tu correo.</p>
      <div className="subscription-form">
        <input type="email" id="email-input" placeholder="tucorreo@email.com" aria-label="Introduce tu correo electrónico"/>
        <button className="button-suscribe" type="submit"> Suscribirse </button>
      </div>  
    </div>
  );
}


