import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "@styles/styleCart.css";
import bookImage from "@booksImagesPath/susurro.png"; 
import useCart from "../hooks/useCart";

function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, addToCart, clearCartItems } = useCart();
  
  // Estado para manejar los productos del carrito
  /*const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Libro 1",
      author: "Autor",
      price: 45000,
      quantity: 1,
      image: bookImage,
    },
    
  ]);*/

  // Función para incrementar cantidad
  const incrementQuantity = (item) => {
    addToCart(item)
    /*setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );*/
  };

  // Función para decrementar cantidad
  const decrementQuantity = (id) => {
    removeFromCart(id)
    /*
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );*/
  };

  // Función para eliminar producto
  const removeItem = (id) => {
    removeFromCart(id)
    //setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Función para anular selección de todos
  const clearCart = () => {
    clearCartItems();
  };

  // Calcular subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Formatear precio
  const formatPrice = (price) => {
    return `$ ${price.toLocaleString("es-CO")}`;
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
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart__item">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="cart__item-image"
                      />
                      <div className="cart__item-details">
                        <h3 className="cart__item-title">{item.title}</h3>
                        <p className="cart__item-author">{item.author}</p>
                        <p className="cart__item-price">
                          {formatPrice(item.price)}
                        </p>

                        {/* Control de cantidad */}
                        <div className="cart__item-quantity">
                          <button
                            className="cart__quantity-btn"
                            onClick={() => decrementQuantity(item.id)}
                            disabled={item.quantity === 1}
                          >
                            −
                          </button>
                          <span className="cart__quantity-value">
                            {item.quantity}
                          </span>
                          <button
                            className="cart__quantity-btn"
                            onClick={() => incrementQuantity(item)}
                          >
                            +
                          </button>
                        </div>

                        {/* Acciones del item */}
                        <div className="cart__item-actions">
                          <button
                            className="cart__action-btn"
                            onClick={() => removeItem(item.id)}
                          >
                            Eliminar
                          </button>
                          <span className="cart__action-separator">|</span>
                          <button className="cart__action-btn">
                            Guardar para más tarde
                          </button>
                          <span className="cart__action-separator">|</span>
                          <button className="cart__action-btn">
                            Compartir
                          </button>
                        </div>
                      </div>

                      {/* Precio total del item */}
                      <div className="cart__item-total">
                        <span className="cart__item-total-price">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  ))}
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
