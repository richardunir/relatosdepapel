import { useMemo } from "react";
import '@styles/featured_books.css'
import booksJson from "@resources/books_data.json";
import { booksImagesConstants } from "@utils/booksConstants";
import { getRandomSample, renderStartElements } from '@utils/utils';

export function FeaturedBooks() {
    const books = booksJson.books || [];
    const booksImageConst = booksImagesConstants;
    const randomBooks = useMemo(() => getRandomSample(books, 4), [books]);
    return (
        <>
            <section className="books__list">
                <h2 className="list__title">Libros destacados</h2>
                <br />
                <p className="list__subtitle"> Cada libro es una puerta. Elige la historia que
                    quieres vivir hoy. </p>
                <br />
                <br />
                {
                    books.length === 0 ? (
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
                                                <a className="price__image" href={`/viewbook?id=${b.id}`}>Ver más</a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </article>
                    )
                }
            </section>
        </>
    );
}