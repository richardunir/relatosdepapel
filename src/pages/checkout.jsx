import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {
    const navigate = useNavigate();

  const irAOtraRuta = () => {
    navigate('/');
  };

  const buy = () => {
    alert('Compra realizada con éxito');
  };

  return (
    <div>
      <h1>Relatos de Papel</h1>
      <p>Checkout</p>
      <button onClick={irAOtraRuta}>Ir a la página principal</button>
      <button onClick={buy}>Comprar</button>
    </div>
  );
}

export default ShoppingCart;
