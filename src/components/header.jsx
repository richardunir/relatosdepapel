import "@styles/header.css";
import { IconConstants } from "@utils/iconConstants";
import useCart from "../hooks/useCart";

export default function Header() {
  const icons = IconConstants;
  const { cartItems } = useCart();
  
  return (
    <header className="header">
      <nav className="header__nav" aria-label="Navegación principal"> {/* Aria-label se usa para accesibilidad*/}
        
        <ul className="header__menu">

          <li className="header__logo">
            <img className="logo__img" src={icons.book_logo_icon} />
            <a className="logo__inf" href="/">Relatos de papel</a>
          </li>

          <li className="header__item">
            <a href="/access">Inicio</a>
          </li>
          <li className="header__item">
            <a href="/categories">Categorias</a>
          </li>
          <li className="header__item">
            <a href="#novedades">Novedades</a>
          </li>
          <li className="header__item">
            <a href="#mas-vendidos">Más Vendidos</a>
          </li>
          <li className="header__item">
            <a href="#sobre-nosotros">Sobre nosotros</a>
          </li>

          <form action="/viewbook" method="GET">
            <input className="header__icon__search" name="search_book" type="text" placeholder="Libro" />
          </form>
          
          <a className="header__icon-btn--profile" href="/">
            <img src={icons.profile_icon} alt="Perfil" />
          </a>
          <a className="header__icon-btn--cart" href="/cart">
            <div className="header__icon-btn--cart--count">{cartItems.length}</div>
            <img src={icons.cart_icon} alt="Carrito" />
          </a>
        </ul>
      </nav>
    </header>
  );
}