import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Relatos de Papel</h1>
      <p>Pagina principal</p>
      <Link to="/checkout">Ir al carrito de compras</Link>
    </div>
  );
}

export default Home;
