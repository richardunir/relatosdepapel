import { useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "@styles/styleAccess.css";
import booksJson from "@resources/books_data.json";
import { booksImagesConstants } from "@utils/booksConstants";
import { IconConstants } from "@utils/iconConstants";
import { renderStartElements } from "@utils/utils";
import { EmailSubscription } from "@components/email_section";

const books = booksJson.books || [];
const booksImageConst = booksImagesConstants;
const icons = IconConstants;

function getRandomSample(arr, n) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(n, copy.length));
} 

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
      <HeroSection/>
      <MainContent/>
    </div>
  );
}

function HeroSection() {
  const book_of_month = books[0] || {};
  return (
    <div className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <h2 id="hero-title" className="hero__title">Bienvenidos a Relatos de Papel</h2>
        <p id="hero-paragraph" className="hero__description">Tu librería digital para descubrir, comprar y vivir nuevas historias. Miles de <br />
          títulos esperando por ti.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="/categories">Explorar Libreria</a>
          <a className="btn btn--secondary" type="button">Ver Novedades</a>
        </div>
        <div className="hero__stats">
          <p className="hero__stat-number">5000+</p>
          <p className="hero__stat-text">Libros disponibles</p>
          <p className="hero__stat-number">10000+</p>
          <p className="hero__stat-text">Lectores felices</p>
        </div>
      </div>
      <div className="hero__image-container">
        <img className="hero__image" src={booksImageConst[book_of_month.imageKey]} alt="Libreria cafe grande con estanteria de dos pisos" />
        <div className="hero__highlight-card">
          <p className="hero__highlight-text">Libro del mes</p>
          <p className="hero__highlight-title font-bold">{book_of_month.title}</p>
          {renderStartElements(book_of_month.stars, "hero__highlight")} {book_of_month.stars}
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  const randomBooks = useMemo(() => getRandomSample(books, 4), [books]);

  return (
    <main className="main-content">
      <h2 id="main-content" className="main-content__title">¿Qué encontrarás aquí?</h2> <br />
      <p className="main-content__subtitle">Una experiencia de compra diseñada para los amantes de la lectura</p> <br />

      <section className="features">
        <div className="features__item">
          <img src={icons.book_icon} alt="Icono de libro" />
          <h3 className="feature-title">Amplio catálogo</h3> 
          <p className="features__detail">Miles de títulos en todos los géneros literarios</p>
        </div>
        <div className="features__item">
          <img src={icons.car_icon} alt="Icono de coche de reparto" />
          <h3 className="features__title">Envíos Gratis</h3>
          <p className="features__detail">En compras superiores a $50</p>
        </div>
        <div className="features__item">
          <img src={icons.card_icon} alt="Icono de tarjeta de crédito" />
          <h3 className="features__title">Pagos Seguros</h3>
          <p className="features__detail">Múltiples métodos de pago disponibles</p>
        </div>
        <div className="features__item">
          <img src={icons.support_icon} alt="Icono de soporte al cliente" />
          <h3 className="features__title">Soporte 24/7</h3>
          <p className="features__detail">Estamos aquí para ayudarte siempre</p>
        </div>
      </section>
        
      <section className="books__list">
        <h2 className="list__title">Libros destacados</h2>
        <br />
        <p className="list__subtitle"> Cada libro es una puerta. Elige la historia que
            quieres vivir hoy. </p>
        <br />
        <br />
        {books.length === 0 ? (
          <p>No hay libros disponibles.</p>
        ) : (
          <article className="list__book">
            {randomBooks.map((b) => {
              return (
                <div key={b.id} className="book__card__access" href="/viewbook">
                  <img className="book__image" src={booksImageConst[b.imageKey]} alt={`Portada del libro ${b.title}`} />
                  <div className="book__information">                  
                    <h3 className="book__title">{b.title}</h3>
                    <p className="book__author">{b.author}</p>
                    <div className="book__stars">
                      {renderStartElements(b.stars, "book")} {b.stars}
                    </div>
                    <div className="book__price">
                      <p className="price__value">{b.price}</p>
                        <img className="price__image" src={icons.add_cart_icon} />
                    </div>
                  </div>
                </div>
              );
            })}
          </article>
        )}
      </section>

      <section className="content__redirectCategories">
        <a className="redirectCategories__option" href='/categories'>Ver todos los libros</a>
      </section>

      <section className="content__access__email">
        {<EmailSubscription />}
      </section>
    </main>
  );
}

export default Access;

