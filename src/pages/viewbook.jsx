import "../styles/styleviewbook.css";
import Images from "../assets/images.jpg";
// Imágenes temporales
const libroMini = "https://via.placeholder.com/150x200";
const portadaEjemplo = "https://via.placeholder.com/300x400";

export function HeaderLibro() {
    return (
        <header className="header-libro">
            <nav>
                <ul className="navbar-libro">
                    <li className="logo"><a href="/">Relatos de Papel</a></li>

                    <li className="search-bar">
                        <input type="text" placeholder="Buscar Libros..." aria-label="Buscar libros" />
                    </li>

                    <li className="buttons"><button aria-label="Modo Oscuro">🌙</button></li>
                    <li className="buttons"><button aria-label="Perfil de usuario">👤 Hola Juliana</button></li>
                </ul>
            </nav>
        </header>
    );
}

export function DetalleLibroSection() {
    return (
        <section className="detalle-libro">
            <div className="libro-imagen">
                <img src={Images} alt="portada-libro" />
            </div>

            <div className="libro-info">
                <h2>Libro 1</h2>

                <p className="autor">Autor • Editorial • Encuadernación</p>

                <button className="btn-deseos"> + Agregar a la lista de deseos </button>

                <h3>Reseña</h3>

                <p className="resena-libro">
                    Esta es la reseña del libro "Libro 1". Contenido del libro.
                </p>
            </div>

            <aside className="compra-box">
                <p className="stock">Quedan 9 unidades</p>
                <p className="precio">$ 60.000</p>

                <button className="btn-comprar">Comprar</button>
            </aside>
        </section>
    );
}

export function LibrosDestacadosSection() {
    const libros = [
        { titulo: "Libro 1", autor: "Autor 1" },
        { titulo: "Libro 2", autor: "Autor 2" },
        { titulo: "Libro 3", autor: "Autor 3" },
        { titulo: "Libro 4", autor: "Autor 4" },
        { titulo: "Libro 5", autor: "Autor 5" },
        { titulo: "Libro 6", autor: "Autor 6" },
    ];

    return (
        <section className="destacados">
            <h2>Libros destacados</h2>

            <div className="destacados-grid">
                {libros.map((libro, index) => (
                    <article key={index} className="card-destacado">
                        <img src={libroMini} alt={`Portada de ${libro.titulo}`} />
                        <h3>{libro.titulo}</h3>
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

            <footer className="vista-footer">
                <div>
                    <h4>Sobre Nosotros</h4>
                    <ul>
                        <li>Quiénes somos</li>
                        <li>Nuestra misión</li>
                        <li>Blog</li>
                        <li>Prensa</li>
                    </ul>
                </div>

                <div>
                    <h4>Ayuda</h4>
                    <ul>
                        <li>Preguntas frecuentes</li>
                        <li>Contacto</li>
                        <li>Devoluciones</li>
                        <li>Soporte</li>
                    </ul>
                </div>

                <div>
                    <h4>Legal</h4>
                    <ul>
                        <li>Términos y condiciones</li>
                        <li>Política de privacidad</li>
                        <li>Uso de cookies</li>
                        <li>Derechos de autor</li>
                    </ul>
                </div>
            </footer>

            <section className="copyright-libro">
                <p>© 2025 Relatos de Papel. Todos los derechos reservados. - Grupo 40 UNIR</p>
            </section>
        </div>
    );
}
