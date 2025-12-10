import "../styles/styleAccess.css";
import accessImage from "../assets/accessSection.png"; 
import bookImage from "../assets/book.png";
import carImage from "../assets/car.png";
import cardImage from "../assets/card.png";
import supportImage from "../assets/support.png";
import bookSusurro from "../assets/susurro.png";
import bookCronicas from "../assets/cronicas.png";
import bookMisterios from "../assets/misterios.png";
import bookAmor from "../assets/amor.png";
import emailImage from "../assets/email2.png";

export function Header() {
  return (
    <header>
      <nav aria-label="Navegación principal"> {/* Aria-label se usa para accesibilidad*/}
        <ul className="navbar-header">
          <li className="logo"><a href="/">Relatos de papel</a></li> 

          <li className="menu"><a href="#inicio">Inicio</a></li>
          <li className="menu"><a href="#categorias">Categorias</a></li>
          <li className="menu"><a href="#novedades">Novedades</a></li>
          <li className="menu"><a href="#mas-vendidos">Más Vendidos</a></li>
          <li className="menu"><a href="#sobre-nosotros">Sobre nosotros</a></li>
          
          <li className="buttons"><button aria-label="Buscar">🔎</button></li>
          <li className="buttons"><button aria-label="Perfil de usuario">💆</button></li>
          <li className="buttons"><button aria-label="Carrito de compras">🛒</button></li>
        </ul>
      </nav>
    </header>
  );
}

export function HeroSection() {
  return (
    <div className="hero-section" aria-labelledby="hero-title">
      <div className="hero-text">
        <h2 id="hero-title">Bienvenidos a Relatos de Papel</h2>
        <p id="hero-paragraph">Tu librería digital para descubrir, comprar y vivir nuevas historias. Miles de
          títulos esperando por ti.
        </p>
        <div className="hero-buttons">
          <button>Explorar librería</button>
          <button>Ver Novedades</button>
        </div>
        <div className="hero-stats">
          <p><strong>5000+</strong></p>
          <p>Libros disponibles</p>|
          <p><strong>10000+</strong></p>
          <p>Lectores felices</p>
        </div>
      </div>
      <div className="image-library">
        <img src={accessImage} alt="Libreria cafe grande con estanteria de dos pisos" />
      </div>
    </div>
  );
}

export function MainContent() {
  return (
    <main className="main-content">
      <h2 id="main-content">¿Qué encontrarás aquí?</h2> <br />
      <p>Una experiencia de compra diseñada para los amantes de la lectura</p> <br />

      <section className="features">
        <div className="feature-item">
          <img src={bookImage} alt="Icono de libro" />
          <h3>Amplio catálogo</h3> 
          <p>Miles de títulos en todos los géneros literarios</p>
        </div>
        <div className="feature-item">
          <img src={carImage} alt="Icono de coche de reparto" />
          <h3>Envíos Gratis</h3>
          <p>En compras superiores a $50</p>
        </div>
        <div className="feature-item">
          <img src={cardImage} alt="Icono de tarjeta de crédito" />
          <h3>Pagos Seguros</h3>
          <p>Múltiples métodos de pago disponibles</p>
        </div>
        <div className="feature-item">
          <img src={supportImage} alt="Icono de soporte al cliente" />
          <h3>Soporte 24/7</h3>
          <p>Estamos aquí para ayudarte siempre</p>
        </div>
      </section>

      <h2 className="featured">Libros destacados</h2>
      <p className="featured"> Cada libro es una puerta. Elige la historia que
          quieres vivir hoy. </p>

      <section className="books">
        <article className="book-card">
          <img src={bookSusurro} alt="Portada del libro El Susurro de las páginas" />
          <h3>El Susurro de las páginas</h3>
          <p className="book-author">María Garcia</p>
          <p className="book-rating" aria-label="Valoración: 4.8 de 5 estrellas">⭐⭐⭐⭐⭐ 4.8</p>
          <div className="price-container">
            <p className="book-price">$ 60.000</p>
            <button>Añadir</button>
          </div>    
        </article>
        <article className="book-card">
          <img src={bookCronicas} alt="Portada del libro Crónicas del tiempo" />
          <h3>Crónicas del tiempo</h3>
          <p className="book-author">Carlos Ruiz</p>
          <p className="book-rating" aria-label="Valoración: 4.9 de 5 estrellas">⭐⭐⭐⭐⭐ 4.9</p>
          <div className="price-container">
            <p className="book-price">$ 90.000</p>
            <button>Añadir</button>
          </div>
        </article>
        <article className="book-card">
          <img src={bookMisterios} alt="Portada del libro Misterios de medianoche" />
          <h3>Misterios de medianoche</h3>
          <p className="book-author">Ana Martínez</p>
          <p className="book-rating" aria-label="Valoración: 4.7 de 5 estrellas">⭐⭐⭐⭐⭐ 4.7</p>
          <div className="price-container">
            <p className="book-price">$ 70.000</p>
            <button>Añadir</button>
          </div>

        </article>
        <article className="book-card">
          <img src={bookAmor} alt="Portada del libro Amor en las estrellas" />
          <h3>Amor en las estrellas</h3>
          <p className="book-author">Laura Fernández</p>
          <p className="book-rating" aria-label="Valoración: 4.6 de 5 estrellas">⭐⭐⭐⭐⭐ 4.6</p>
          <div className="price-container">
            <p className="book-price">$ 80.000</p>
            <button>Añadir</button>
          </div>
        </article>
      </section>
      <button>Ver todos los libros</button>
    </main>
  );
}

export function EmailSubscription() {
  return (
    <div className="email-subscription" aria-labelledby="newsletter-title">
      <img src={emailImage} alt="Icono de sobre de correo" />
      <h2>Suscríbete a nuestro newsletter</h2>
      <p id="newsletter-title">Recibe las últimas novedades y ofertas exclusivas
        y recomendaciones personalizadas directamente en tu correo.</p>
      <label htmlFor="email-input" className="email-input"></label>
      <input type="email" id="email-input" placeholder="tucorreo@email.com" aria-label="Introduce tu correo electrónico"/>
      <button type="submit">Suscribirse</button>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-relatos">
        <h3 className="footer-title">Relatos de Papel</h3>
        <p className="footer-paragraph">Tu librería digital para descubrir, comprar y vivir nuevas historias</p>
      </div>
      <div className="footer-owns">
        <h4>Sobre Nosotros</h4>
        {/* Los enlaces en el pie de página deben ser listas para mejor semántica. */}
        <ul>
          <li><a href="#quienes-somos">Quiénes somos</a></li>
          <li><a href="#nuestra-mision">Nuestra misión</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#prensa">Prensa</a></li>
        </ul>
      </div>
      <div className="footer-help">
        <h4>Ayuda</h4>
        <ul>
          <li><a href="#preguntas-frecuentes">Preguntas frecuentes</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="#devoluciones">Devoluciones</a></li>
          <li><a href="#soporte">Soporte</a></li>
        </ul>
      </div>
      <div className="footer-legal">
        <h4>Legal</h4>
        <ul>
          <li><a href="#terminos-condiciones">Términos y condiciones</a></li>
          <li><a href="#politica-privacidad">Política de privacidad</a></li>
          <li><a href="#uso-cookies">Uso de cookies</a></li>
          <li><a href="#derechos-autor">Derechos de autor</a></li>
        </ul>
      </div>
    </footer>
  );
}

export function Copyright() { 
  return (
  <section>
  <p>© 2025 Relatos de Papel. Todos los derechos reservados. - Grupo 40 UNIR</p>
  </section>
);
}