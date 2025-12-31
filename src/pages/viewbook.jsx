import "../styles/styleviewbook.css";
import Images from "../assets/images.jpg";
import bookSusurro from "../assets/susurro.png";
import bookCronicas from "../assets/cronicas.png";
import bookAmor from "../assets/amor.png";
import bookMisterios from "../assets/misterios.png";
import bookLucifer from "../assets/pedro-escamilla-lucifer.png"
import bookPinocho from "../assets/pinocho.png"
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import { Copyright } from "../components/footer.jsx";

// Imágenes temporales
const libroMini = "https://via.placeholder.com/150x200";
const portadaEjemplo = "https://via.placeholder.com/300x400";

/* ================= HEADER LIBRO ================= */
export function HeaderLibro() {
    return (
        <header className="header-book">
            <nav className="header-book__nav" aria-label="Navegación principal">
                <ul className="header-book__menu">
                    <li className="header-book__logo">
                        <a href="/">Relatos de papel</a>
                    </li>

                    <li className="header-book__item"><a href="#inicio">Inicio</a></li>
                    <li className="header-book__item"><a href="#categorias">Categorias</a></li>
                    <li className="header-book__item"><a href="#novedades">Novedades</a></li>
                    <li className="header-book__item"><a href="#vendidos">Más Vendidos</a></li>
                    <li className="header-book__item"><a href="#nosotros">Sobre nosotros</a></li>

                    <a className="header-book__icon" href="/search">
                        <img src="/src/assets/search.png" alt="Buscar" />
                    </a>
                    <a className="header-book__icon" href="/profile">
                        <img src="/src/assets/profile.png" alt="Perfil" />
                    </a>
                    <a className="header-book__icon" href="/cart">
                        <img src="/src/assets/carrito.png" alt="Carrito" />
                    </a>
                </ul>
            </nav>
        </header>
    );
}

/* ================= DETALLE LIBRO ================= */
export function DetalleLibroSection() {
    return (
        <section className="book-detail">

            <div className="book-detail__image">
                <img src={bookSusurro} alt="Portada del libro" />
            </div>

            <div className="book-detail__info">

                <div className="book-detail__header">
                    <h1 className="book-detail__title">El susurro de las páginas</h1>

                    <p className="book-detail__author">
                        María García • Editorial X • Tapa dura
                    </p>

                    <div className="book-detail__rating">
                        ⭐⭐⭐⭐☆ <span>4.5 (128 reseñas)</span>
                    </div>
                </div>

                <div className="book-detail__description-box">
                    <p className="book-detail__description">
                        El susurro de las páginas <br /><br />
                        Una obra maestra que combina magistralmente lo real con lo
                        fantástico. La prosa exquisita crea un universo donde la
                        realidad y la magia se entrelazan de manera natural.
                    </p>

                    <ul className="book-detail__specs">
                        <li className="book-detail__spec">
                            <strong>Formato:</strong> <span>Tapa dura</span>
                        </li>
                        <li className="book-detail__spec">
                            <strong>Editorial:</strong> <span>Editorial</span>
                        </li>
                        <li className="book-detail__spec">
                            <strong>Autor:</strong> <span>XXXXX</span>
                        </li>
                        <li className="book-detail__spec">
                            <strong>Páginas:</strong> <span>384</span>
                        </li>
                        <li className="book-detail__spec">
                            <strong>Idioma:</strong> <span>Español</span>
                        </li>
                        <li className="book-detail__spec">
                            <strong>ISBN:</strong> <span>978-3-16-148410-0</span>
                        </li>
                    </ul>
                </div>

                <div className="purchase-box">
                    <p className="purchase-box__stock">Quedan 9 unidades</p>
                    <p className="purchase-box__price">$ 60.000</p>
                    <button className="purchase-box__button">Comprar</button>
                </div>
            </div>
        </section>
    );
}

/* ================= DESTACADOS ================= */
export function LibrosDestacadosSection() {
    const libros = [
        { titulo: "El susurro de las paginas", autor: "Maria Garcia", imagen: bookSusurro },
        { titulo: "Cronicas del tiempo", autor: "Carlos Ruiz", imagen: bookCronicas },
        { titulo: "Misterios de medianoche", autor: "Ana Martinez", imagen: bookMisterios },
        { titulo: "Amor en las estrellas", autor: "Laura Fernandez", imagen: bookAmor },
        { titulo: "Lucifer", autor: "Pedro Escamilla", imagen: bookLucifer },
        { titulo: "Pinocho", autor: "Carlo Collodi", imagen: bookPinocho },
    ];

    return (
        <section className="featured-books">
            <h2 className="featured-books__title">Libros destacados</h2>

            <div className="featured-books__grid">
                {libros.map((libro, index) => (
                    <article key={index} className="featured-books__card">
                        <img
                            className="featured-books__image"
                            src={libro.imagen}
                            alt={`Portada de ${libro.titulo}`}
                        />
                        <h3 className="featured-books__book-title">{libro.titulo}</h3>
                        <h4 className="featured-books__author">{libro.autor}</h4>
                        <p className="featured-books__category">Categoría X</p>
                        <button className="featured-books__button">Ver más</button>
                    </article>
                ))}
            </div>
        </section>
    );
}

/* ================= VIEWBOOK ================= */
export default function Viewbook() {
    return (
        <div className="viewbook">
            <Header />
            <DetalleLibroSection />
            <LibrosDestacadosSection />
            <Footer />
            <Copyright />
        </div>
    );
}