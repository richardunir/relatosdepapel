import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "@styles/styleCart.css";
import useCart from "@hooks/useCart";
import { booksImagesConstants } from "@utils/booksConstants";

function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCartItems } = useCart();


  // Función para eliminar producto
  const removeItem = (id) => {
    removeFromCart(id)
  };

  // Función para anular selección de todos
  const clearCart = () => {
    clearCartItems();
  };

  //Función para obtener el precio numérico
  const getPriceAsNumber = (price) => {
    // Si es undefined o null, retornar 0
    if (price === undefined || price === null) {
      console.warn('Precio no definido:', price);
      return 0;
    }
  // Si ya es un número, retornarlo
  if (typeof price === 'number') {
    return price;
  }
  // Si es string, limpiar y convertir
  if (typeof price === 'string') {
    // Remover todo excepto números
    const cleaned = price.replace(/[^0-9]/g, '');
    const numPrice = parseInt(cleaned, 10);
    return isNaN(numPrice) ? 0 : numPrice;
  }
  console.warn('Tipo de precio no reconocido:', typeof price, price);
    return 0;
  };

  // Calcular subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => {
        const price = getPriceAsNumber(item.price);
        const quantity = item.quantity || 1;
        return total + (price * quantity);
      },
      0
    );
  };

  // Formatear precio
  const formatPrice = (price) => {
    const numPrice = getPriceAsNumber(price);
    return `$ ${numPrice.toLocaleString("es-CO")}`;
  };

 
  return (
    <>
      <div className="container">
        <div className="cart">
          {/* Indicador de pasos */}
          <div className="cart__steps">
            <div className="cart__step cart__step--active">1</div>
            <span className="cart__step-label">Carrito</span>
            <div className="cart__step-separator" />
            <div className="cart__step">2</div>
            <span className="cart__step-label">Resumen</span>
          </div>

          {/* Contenedor principal del carrito */}
          <div className="cart__content">
            {/* Encabezado del carrito */}
            <div className="cart__header">
              <h2 className="cart__title">Carrito de compras</h2>
              {cartItems.length > 0 && (
                <button className="cart__clear-btn" onClick={clearCart}>
                  Anular la selección de todos los elementos
                </button>
              )}
            </div>

            {/* Lista de productos */}
            {cartItems.length === 0 ? (
              <div className="cart__empty">
                <p>Tu carrito está vacío</p>
              </div>
            ) : (
              <>
                <div className="cart__items">
                  {cartItems.map((item) => {
                    const itemPrice = getPriceAsNumber(item.price);
                    const itemQuantity = item.quantity || 1;
                    const itemTotal = itemPrice * itemQuantity;
                    
                    return (
                      <div key={item.id} className="cart__item">
                        <img
                          src={item.imageKey ? booksImagesConstants[item.imageKey] : item.image}
                          alt={item.title}
                          className="cart__item-image"
                        />
                        <div className="cart__item-details">
                          <h3 className="cart__item-title">{item.title}</h3>
                          <p className="cart__item-author">{item.author}</p>
                          <p className="cart__item-price">
                            {formatPrice(itemPrice)}
                          </p>

                          {/* Acciones del item */}
                          <div className="cart__item-actions">
                            <button
                              className="cart__action-btn"
                              onClick={() => removeItem(item.id)}
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>

                        {/* Precio total del item */}
                        <div className="cart__item-total">
                          <span className="cart__item-total-price">
                            {formatPrice(itemTotal)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Resumen del carrito */}
                <div className="cart__summary">
                  <div className="cart__summary-row">
                    <span className="cart__summary-label">
                      Subtotal ({cartItems.length}{" "}
                      {cartItems.length === 1 ? "producto" : "productos"}):
                    </span>
                    <span className="cart__summary-value">
                      {formatPrice(calculateSubtotal())}
                    </span>
                  </div>
                  <div> 
                    <button 
                      className="cart__checkout-btn" 
                      onClick={() => navigate('/checkout')}>
                      Pagar
                    </button> 
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
