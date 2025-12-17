import "../styles/styleviewbook.css";
import Images from "../assets/images.jpg";
import bookSusurro from "../assets/susurro.png";
import bookCronicas from "../assets/cronicas.png";
import bookAmor from "../assets/amor.png";
import bookMisterios from "../assets/misterios.png";
import bookLucifer from "../assets/pedro-escamilla-lucifer.png"
import bookPinocho from "../assets/pinocho.png"

// Imágenes temporales
const libroMini = "https://via.placeholder.com/150x200";
const portadaEjemplo = "https://via.placeholder.com/300x400";

export function HeaderLibro() {
    return (
        <header>
            <nav aria-label="Navegación principal"> {/* Aria-label se usa para accesibilidad*/}
                <ul className="navbar-header">
                    <li className="logo"><a href="/">Relatos de papel</a></li>

                    <li className="menu-home"><a href="#inicio">Inicio</a></li>
                    <li className="menu-categories"><a href="#categorias">Categorias</a></li>
                    <li className="menu-feaures"><a href="#novedades">Novedades</a></li>
                    <li className="menu-sell"><a href="#mas-vendidos">Más Vendidos</a></li>
                    <li className="menu-contact"><a href="#sobre-nosotros">Sobre nosotros</a></li>

                    <a className="button-search" href="/search">
                        <img src="/src/assets/search.png" />
                    </a>
                    <a className="button-profile" href="/profile">
                        <img src="/src/assets/profile.png" />
                    </a>
                    <a className="button-cart" href="/cart">
                        <img src="/src/assets/carrito.png" />
                    </a>
                </ul>
            </nav>
        </header>
    );
}

export function DetalleLibroSection() {
    return (
        <section className="detalle-libro">

            {/* COLUMNA IZQUIERDA */}
            <div className="detalle-left">
                <img src={bookSusurro} alt="Portada del libro" />
            </div>

            {/* COLUMNA DERECHA */}
            <div className="detalle-right">
                <div className="detalle-cabezera">
                    <h1 className="titulo-libro">El susurro de las páginas</h1>

                    <p className="autor-editorial">
                        María García • Editorial X • Tapa dura
                    </p>

                    <div className="rating">
                        ⭐⭐⭐⭐☆ <span>4.5 (128 reseñas)</span>
                    </div>
                </div>
                <div className="descripcion-libro">
                    <p className="descripcion">
                        El susurro de las páginas <br />

                        Una obra maestra que combina magistralmente lo real con lo
                        fantástico. Garcia marquez crea un universo donde la realidad y la magia se entrelazan de manera natural.
                        la prosa exquisita y cada pagina esta llena de imagenes memorales que pérmanecen en la mente del Lector mucho
                        despues de terminar el libro
                    </p>

                    <ul className="ficha-tecnica">
                        <li><strong>Formato:</strong> <span>Tapa dura</span></li>
                        <li><strong>Editorial:</strong> <span>Editorial</span> </li>
                        <li><strong>Autor:</strong><span> XXXXX</span></li>
                        <li><strong>Páginas:</strong><span>384</span></li>
                        <li><strong>Idioma:</strong><span>Español</span></li>
                        <li><strong>ISBN:</strong> <span>978-3-16-148410-0</span></li>
                        <li><strong>Documentacion:</strong><span> Español</span></li>
                    </ul>
                </div>

                <div className="compra-box">
                    <p className="stock">Quedan 9 unidades</p>
                    <p className="precio">$ 60.000</p>
                    <button className="btn-comprar">Comprar</button>
                </div>
            </div>
        </section>
    );
}


export function LibrosDestacadosSection() {
    const libros = [
        { titulo: "El susurro de las paginas", autor: "Maria Garcia", imagen: bookSusurro },
        { titulo: "Cronicas del tiempo", autor: "Carlos Ruiz", imagen: bookCronicas },
        { titulo: "Misterios de medianoche", autor: "Ana Martinez", imagen: bookMisterios },
        { titulo: "Amor en las estrellas ", autor: "Laura Fernandez", imagen: bookAmor },
        { titulo: "Lucifer", autor: "Pedro Escamilla", imagen: bookLucifer },
        { titulo: "pinocho", autor: "Carlo collido", imagen: bookPinocho },
    ];

    return (
        <section className="destacados">
            <h2>Libros destacados</h2>

            <div className="destacados-grid">
                {libros.map((libro, index) => (
                    <article key={index} className="card-destacado">
                        <img
                            src={libro.imagen}
                            alt={`Portada de ${libro.titulo}`}
                        />
                        <h3>{libro.titulo}</h3>
                        <h4>{libro.autor}</h4>
                        <p className="categoria">Categoría X</p>
                        <button className="btn-vermas">Ver más</button>
                    </article>
                ))}
            </div>
        </section>
    );
}
export default function Viewbook() {
    return (
        <div className="vista-libro-container">
            <HeaderLibro />
            <DetalleLibroSection />
            <LibrosDestacadosSection />
            <footer className="footer">
                <div className="footer-relatos">
                    <h3 className="footer-title">Relatos de Papel</h3>
                    <p className="footer-paragraph">Tu librería digital para descubrir, comprar y vivir <br /> nuevas historias</p>
                </div>
                <div className="footer-owns">
                    <h4 className="footer-li">Sobre Nosotros</h4>
                    <ul>
                        <li className="footer-li"><a href="#quienes-somos">Quiénes somos</a></li>
                        <li className="footer-li"><a href="#nuestra-mision">Nuestra misión</a></li>
                        <li className="footer-li"><a href="#blog">Blog</a></li>
                        <li className="footer-li"><a href="#prensa">Prensa</a></li>
                    </ul>
                </div>
                <div className="footer-help">
                    <h4 className="footer-li">Ayuda</h4>
                    <ul>
                        <li className="footer-li"><a href="#preguntas-frecuentes">Preguntas frecuentes</a></li>
                        <li className="footer-li"><a href="#contacto">Contacto</a></li>
                        <li className="footer-li"><a href="#devoluciones">Devoluciones</a></li>
                        <li className="footer-li"><a href="#soporte">Soporte</a></li>
                    </ul>
                </div>
                <div className="footer-legal">
                    <h4 className="footer-li">Legal</h4>
                    <ul>
                        <li className="footer-li"><a href="#terminos-condiciones">Términos y condiciones</a></li>
                        <li className="footer-li"><a href="#politica-privacidad">Política de privacidad</a></li>
                        <li className="footer-li"><a href="#uso-cookies">Uso de cookies</a></li>
                        <li className="footer-li"><a href="#derechos-autor">Derechos de autor</a></li>
                    </ul>
                </div>
            </footer>

            <section className="copyright-libro">
                <p>© 2025 Relatos de Papel. Todos los derechos reservados. - Grupo 40 UNIR</p>
            </section>
        </div>
    );
}
