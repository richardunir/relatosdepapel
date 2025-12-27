export default function Footer() {
  return (
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
  );
}

export function Copyright() {
  return (
    <section>
      <p>© 2025 Relatos de Papel. Todos los derechos reservados. - Grupo 40 UNIR</p>
    </section>
  );
}