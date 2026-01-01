export default function Footer() {
  return (
    <>
      <InformationFooter />
      <Copyright />
    </>
  );
}

export function InformationFooter() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <h3 className="footer__title">Relatos de Papel</h3>
        <p className="footer__text">
          Tu librería digital para descubrir, comprar y vivir <br /> nuevas historias
        </p>
      </div>
      <div className="footer__column">
        <h4 className="footer__list-title">Sobre Nosotros</h4>
        <ul className="footer__list">
          <li className="footer__item"><a href="#quienes-somos">Quiénes somos</a></li>
          <li className="footer__item"><a href="#nuestra-mision">Nuestra misión</a></li>
          <li className="footer__item"><a href="#blog">Blog</a></li>
          <li className="footer__item"><a href="#prensa">Prensa</a></li>
        </ul>
      </div>
      <div className="footer__column footer__column--help">
        <h4 className="footer__list-title">Ayuda</h4>
        <ul className="footer__list">
          <li className="footer__item"><a href="#preguntas-frecuentes">Preguntas frecuentes</a></li>
          <li className="footer__item"><a href="#contacto">Contacto</a></li>
          <li className="footer__item"><a href="#devoluciones">Devoluciones</a></li>
          <li className="footer__item"><a href="#soporte">Soporte</a></li>
        </ul>
      </div>
      <div className="footer__column">
        <h4 className="footer__list-title">Legal</h4>
        <ul className="footer__list">
          <li className="footer__item"><a href="#terminos-condiciones">Términos y condiciones</a></li>
          <li className="footer__item"><a href="#politica-privacidad">Política de privacidad</a></li>
          <li className="footer__item"><a href="#uso-cookies">Uso de cookies</a></li>
          <li className="footer__item"><a href="#derechos-autor">Derechos de autor</a></li>
        </ul>
      </div>
    </footer>
  );
}

export function Copyright() {
  return (
    <section className="copyright">
      <p>© 2025 Relatos de Papel. Todos los derechos reservados. - Grupo 40 UNIR</p>
    </section>
  );
}