import "../styles/categories.css";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import emailImage from "../assets/email.png";
import booksJson from "../../resources/books_data.json";

function Categories() {
  const [books, setBooks] = useState(() => {
    const stored = localStorage.getItem("books");
    if (stored) return JSON.parse(stored);
    // booksJson has shape { books: [...] }
    return booksJson.books || [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <>
      <Header />
      <SectionTitle />
      <MainContent books={books} />
      <Footer />
    </>
  );
}

export function SectionTitle() {
    return (
        <section className="section__title">
          <div className="title__info">
            <br />
            <h2>Explora nuestra colección</h2>
            <p>Descubre historias fascinantes en cada género. Tu próxima aventura literaria te espera.</p>
            <br />
            <div className="info__values">
              <span className="values_icons">
                <img src="src/assets/icono_exponencial.png" alt="Icono de lectores" />
                <p>10,000+ Lectores activos</p>
              </span>
              <span className="values_icons">
                <img src="src/assets/cantidad_libros.png" alt="Icono de lectores" />
                <p>5,000+ Libros disponibles</p>
              </span>
            </div>
          </div>
          <div className="title__image">
            <img src="src/assets/libreria.jpg" alt="Imagen de librería" />
          </div>
        </section>
    );
}

export function MainContent({ books = [] }) {
  return (
    <section className="section__main">
      <div className="main__content">
        <div className="content__submenu">
          {FilterMenu()}
        </div>
        <div className="content__books">
          {BookCard({ books })}
        </div>
      </div>
      <div className="main__email">
        {<EmailSubscription />}
      </div>
      <br />
      <br />
    </section>
  );
}

export function FilterMenu() {
  return (
    <nav className="submenu__nav" aria-label="Submenú de categorías de libros">
      <h2 className="nav__title">Categorías</h2>
      <ul className="nav__list">
        <li className="list__item">
          <a href="/categories?genre=fiction">Todos</a>
        </li>
        <li className="list__item">
          <a href="/categories?genre=non-fiction">Ficción</a>
        </li>
        <li className="list__item">
          <a href="/categories?genre=mystery">Misterio</a>
        </li>
        <li className="list__item">
          <a href="/categories?genre=fantasy">Romance</a>
        </li>
        <li className="list__item">
          <a href="/categories?genre=science-fiction">Ciencia Ficción</a>
        </li>
        <li className="list__item">
          <a href="/categories?genre=biography">Fantasía</a>
        </li>
      </ul>
      <br />
      <h2 className="nav__title">Precio</h2>
      <ul className="nav__list">
        <li className="list__item">
          <a href="/categories?price=free">Menos de $60.000</a>
        </li>
        <li className="list__item">
          <a href="/categories?price=affordable">$60.000 - $75.000</a>
        </li>
        <li className="list__item">
          <a href="/categories?price=premium">Más de $75.000</a>
        </li>
      </ul>
      <br />
      <h2 className="nav__title">Calificación</h2>
      <ul className="nav__list">
        <li className="list__item">
          <a href="/categories?rating=4up">
            <span className="item__stars">★★★★★</span>  y más
          </a>
        </li>
        <li className="list__item">
          <a href="/categories?rating=3up">
            <span className="item__stars">★★★★</span> y más
          </a>
        </li>
        <li className="list__item">
          <a href="/categories?rating=2up">
            <span className="item__stars">★★★</span> y más
          </a>
        </li>
      </ul> 
    </nav>
  )
}

export function BookCard({ books = [] }) {
  return (
    <div className="books__book">
      {books.length === 0 ? (
        <p>No hay libros disponibles.</p>
      ) : (
        <div className="books__grid">
          {books.map((b) => (
            <>
            <div key={b.id} className="book__card">
              <h3>{b.title}</h3>
              <p className="card__author">{b.author}</p>
              <p className="card__genre">{b.genre}</p>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export function EmailSubscription() {
  return (
    <section className="email__section" aria-labelledby="newsletter-title">
      <img className="section__icon" src={emailImage} alt="Icono de sobre de correo" />
      <h2 className="section__title">Suscríbete a nuestro newsletter</h2>
      <p id="section__info">Recibe las últimas novedades y ofertas exclusivas y recomendaciones personalizadas directamente en tu correo.</p>
      <div className="section__form">
        <input type="email" className="form_email" id="email-input" placeholder="tucorreo@email.com" aria-label="Introduce tu correo electrónico" />
        <button className="form__button" type="submit"> Suscribirse </button>
      </div>
    </section>
  );
}

export default Categories;

