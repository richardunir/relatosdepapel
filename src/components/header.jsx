export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav" aria-label="Navegación principal">
        <ul className="header__menu">
          <li className="header__item header__logo">
            <a href="/">Relatos de papel</a>
          </li>
          <li className="header__item"><a href="/access">Inicio</a></li>
          <li className="header__item"><a href="#categorias">Categorías</a></li>
          <li className="header__item"><a href="#novedades">Novedades</a></li>
          <li className="header__item"><a href="#mas-vendidos">Más Vendidos</a></li>
          <li className="header__item"><a href="#sobre-nosotros">Sobre nosotros</a></li>
          <a className="header__icon-btn header__icon-btn--search" href="/viewbook">
            <img src="/src/assets/search.png" alt="Buscar" />
          </a>
          <a className="header__icon-btn header__icon-btn--profile" href="/">
            <img src="/src/assets/profile.png" alt="Perfil" />
          </a>
          <a className="header__icon-btn header__icon-btn--cart" href="/cart">
            <img src="/src/assets/carrito.png" alt="Carrito" />
          </a>
        </ul>
      </nav>
    </header>
  );
}