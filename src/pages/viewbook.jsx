import "@styles/styleviewbook.css"; 
import useCart from "@hooks/useCart";
import { booksImagesConstants } from "@utils/booksConstants";
import booksData from "@resources/books_data.json";

// Imágenes temporales
const libroMini = "https://via.placeholder.com/150x200";
const portadaEjemplo = "https://via.placeholder.com/300x400";

const bookId = 11;
const book = booksData.books.find(b => b.id === bookId);    

/* ================= DETALLE LIBRO ================= */
export function DetalleLibroSection() {
    const { addToCart } = useCart();

    if (!book) return null;
    return (
        <section className="book-detail">

            <div className="book-detail__image">
                <img src={booksImagesConstants[book.imageKey]} alt={`Portada de ${book.title}`} />
            </div>

            <div className="book-detail__info">

                <div className="book-detail__header">
                    <h1 className="book-detail__title">{book.title}</h1>

                    <p className="book-detail__author">
                        {book.author} • {book.genre} • {book.published_year}
                    </p>

                    <div className="book-detail__rating">
                        ⭐ {book.stars} <span>4.5 (128 reseñas)</span>
                    </div>
                </div>

                <div className="book-detail__description-box">
                    <p className="book-detail__description">

                        {book.description}
                    </p>

                    <ul className="book-detail__specs">
                        <li className="book-detail__spec">
                            <strong>Formato:</strong> <span>Tapa dura</span>
                        </li>
                        <li className="book-detail__spec">
                            <strong>Editorial:</strong> <span>Editorial</span>
                        </li>
                        <li className="book-detail__spec">
                            <strong>Autor:</strong> <span>{book.author}</span>
                        </li>
                        <li className="book-detail__spec">
                            <strong>Genero:</strong> <span>{book.genre}</span>
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
                    <p className="purchase-box__price">{book.price}</p>
                    <button onClick={() => addToCart(book)} className="purchase-box__button">Agregar al carrito</button>
                </div>
            </div>
        </section>
    );
}

/* ================= DESTACADOS ================= */
export function LibrosDestacadosSection() {
    const destacados = booksData.books.slice(8, 16);

    return (
        <section className="featured-books">
            <h2 className="featured-books__title">Libros destacados</h2>

            <div className="featured-books__grid">
                {destacados.map(book => (
                    <article key={book.id} className="featured-books__card">
                        <img
                            className="featured-books__image"
                            src={booksImagesConstants[book.imageKey]}
                            alt={book.title}
                        />
                        <h3 className="featured-books__book-title">
                            {book.title}
                        </h3>
                        <h4 className="featured-books__author">
                            {book.author}
                        </h4>
                        <p className="featured-books__category">
                            {book.genre}
                        </p>
                        <button className="featured-books__button">
                            Ver más
                        </button>
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
            <DetalleLibroSection />
            <LibrosDestacadosSection />
        </div>
    );
}