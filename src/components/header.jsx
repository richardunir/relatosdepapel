export default function Header() {
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

          <a className="button-search" href="/viewbook">
            <img src="/src/assets/search.png" />
          </a>
          <a className="button-profile" href="/">
            <img src="/src/assets/profile.png" />
          </a>
          <a className="button-cart" href="/checkout">
            <img src="/src/assets/carrito.png" />
          </a>

        </ul>
      </nav>
    </header>
  );
}