import "@styles/header.css";
import { IconConstants } from "@utils/iconConstants";

export default function Header() {
  const icons = IconConstants;
  
  return (
    <header className="header">
      <nav className="header__nav" aria-label="Navegación principal"> {/* Aria-label se usa para accesibilidad*/}
        
        <ul className="header__menu">

          <li className="header__item header__logo">
            <img className="header__logo-img" src={icons.book_logo_icon} />
            <a className="header__logo-inf" href="/">Relatos de papel</a>
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

          <a className="header__icon-btn header__icon-btn--search" href="/viewbook">
            <img src={icons.search_icon} />
          </a>
          <a className="header__icon-btn header__icon-btn--profile" href="/">
            <img src={icons.profile_icon} alt="Perfil" />
          </a>
          <a className="header__icon-btn header__icon-btn--cart" href="/cart">
            <img src={icons.cart_icon} alt="Carrito" />
          </a>
        </ul>
      </nav>
    </header>
  );
}