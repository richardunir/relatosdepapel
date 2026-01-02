import "@styles/categories.css";
/* import { useEffect, useState } from "react"; */
import booksJson from "@resources/books_data.json";
import { booksImagesConstants } from "@utils/booksConstants";
import { IconConstants } from "@utils/iconConstants";
import { renderStartElements } from "@utils/utils";
import { EmailSubscription } from "@components/email_section";

const booksImageConst = booksImagesConstants;
const icons = IconConstants;

export default function Categories() {
  const books = booksJson.books || [];
  console.log(books[0]);
  
  /* useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]); */

  return (
    <>
      <SectionTitle />
      <MainContent books={books} />
    </>
  );
}

function SectionTitle() {
    return (
        <section className="section__title">
          <div className="title__info">
            <br />
            <h2 className="info__title">Explora nuestra colección</h2>
            <p className="info__subtitle">Descubre historias fascinantes en cada género. Tu próxima aventura literaria te espera.</p>
            <br />
            <div className="info__values">
              <span className="values__icons">
                <img className="icons__img" src={icons.exponential_icon} alt="Icono de lectores" />
                <div>
                  <p className="icons__value">10,000+</p>
                  <p className="icons__info">Lectores activos</p>
                </div>
              </span>
              <span className="values__icons">
                <img className="icons__img" src={icons.amount_icon} alt="Icono de lectores" />
                <div>
                  <p className="icons__value">5,000+</p>
                  <p className="icons__info">Libros disponibles</p>
                </div>
              </span>
            </div>
          </div>
          <div className="title__image">
            <img className="image__content" src={booksImageConst.library_icon_2} alt="Imagen de librería" />
          </div>
        </section>
    );
}

function MainContent({ books = [] }) {
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
      <div className="content__categories__email">
        {<EmailSubscription />}
      </div>
      <br />
      <br />
    </section>
  );
}

function FilterMenu() {
  return (
    <nav className="submenu__nav" aria-label="Submenú de categorías de libros">
      <h2 className="nav__title">Categorías</h2>
      <ul className="nav__list">
        <li className="list__item">
          <a className="item__option" href="/categories?genre=fiction">Todos</a>
        </li>
        <li className="list__item">
          <a className="item__option" href="/categories?genre=non-fiction">Ficción</a>
        </li>
        <li className="list__item">
          <a className="item__option" href="/categories?genre=mystery">Misterio</a>
        </li>
        <li className="list__item">
          <a className="item__option" href="/categories?genre=fantasy">Romance</a>
        </li>
        <li className="list__item">
          <a className="item__option" href="/categories?genre=science-fiction">Ciencia Ficción</a>
        </li>
        <li className="list__item">
          <a className="item__option" href="/categories?genre=biography">Fantasía</a>
        </li>
      </ul>
      <br />
      <h2 className="nav__title">Precio</h2>
      <ul className="nav__list">
        <li className="list__item">
          <a className="item__option" href="/categories?price=free">Menos de $60.000</a>
        </li>
        <li className="list__item">
          <a className="item__option" href="/categories?price=affordable">$60.000 - $75.000</a>
        </li>
        <li className="list__item">
          <a className="item__option" href="/categories?price=premium">Más de $75.000</a>
        </li>
      </ul>
      <br />
      <h2 className="nav__title">Calificación</h2>
      <ul className="nav__list">
        <li className="list__item">
          <a className="item__option" href="/categories?rating=4up">
            {renderStartElements(5, "item")} y más
          </a>
        </li>
        <li className="list__item">
          <a className="item__option" href="/categories?rating=3up">
            {renderStartElements(4, "item")} y más
          </a>
        </li>
        <li className="list__item">
          <a className="item__option" href="/categories?rating=2up">
            {renderStartElements(3, "item")} y más
          </a>
        </li>
        <li className="list__item">
          <a className="item__option" href="/categories?rating=2up">
            {renderStartElements(2, "item")} y más
          </a>
        </li>
      </ul> 
    </nav>
  )
}

function BookCard({ books = [] }) {
  return (
    <div className="books__book">
      {books.length === 0 ? (
        <p>No hay libros disponibles.</p>
      ) : (
        <div className="books__grid">
          {books.map((b) => {
            return (
              <div key={b.id} className="book__card">
                <img className="card__image" src={booksImageConst[b.imageKey]} alt={`Portada del libro ${b.title}`} />
                <div className="card__info">
                  <h3 className="info__title">{b.title}</h3>
                  <p className="info__author">{b.author}</p>
                  <p>{renderStartElements(b.stars, "info")} {b.stars}</p>
                  <div className="info__price">
                    <p className="price__value">{b.price}</p>
                    <img className="price__icon" src={icons.add_cart_icon} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
