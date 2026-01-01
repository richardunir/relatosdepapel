import React from "react";
import "@styles/styleCheckout.css";
import bookSusurro from "@booksImagesPath/susurro.png";

function Checkout() {
  return (
    <>
      <div className="container">
        <div className="checkout">
          <div className="checkout__steps">
            <div className="checkout__step checkout__step--active">1</div>
            <span className="checkout__step-label">Carrito</span>
            <div className="checkout__step-separator" />
            <div className="checkout__step checkout__step--active">2</div>
            <span className="checkout__step-label">Resumen</span>
          </div>

          <div className="checkout__order-summary">
            <div className="textLeft">Resumen del pedido # 11111</div>
            <div className="checkout__order-details">
              <div className="checkout__order-title textLeft">
                Resumen de pedido
              </div>
              <div className="checkout__order-row">
                <span>Subtotal</span>
                <span className="checkout__order-value checkout__order-value--red">
                  $ 45.000
                </span>
              </div>
              <div className="checkout__order-row">
                <span>Envío</span>
                <span className="checkout__order-value checkout__order-value--red">
                  $ 5.000
                </span>
              </div>
              <div className="checkout__order-row checkout__order-row--total">
                <span>Total a pagar</span>
                <span className="checkout__order-value checkout__order-value--total">
                  $ 50.000
                </span>
              </div>
            </div>
          </div>

          <div className="checkout__book-section">
            <div className="checkout__book-title textLeft">Libro1</div>
            <div className="checkout__book-info">
              <img
                className="checkout__book-image"
                src={bookSusurro}
                alt="Portada del libro"
              />
              <div className="checkout__book-details">
                <div className="checkout__book-name">Libro1</div>
                <div className="checkout__book-author">Autor</div>
                <div className="checkout__book-price checkout__book-price--red">
                  $ 45.000
                </div>
              </div>
            </div>
          </div>

          <div className="checkout__address-section">
            <div className="checkout__address-title">Dirección de entrega</div>
            <div className="checkout__address-details textLeft">
              <p>Richard Azadid Restrepo Lopez</p>
              <p>742 de la Avenida Siempre Viva</p>
              <p>Santa Marta, Magdalena, Colombia</p>
              <p>470001</p>
              <p className="checkout__address-delivery-time">
                El tiempo de entrega es de 2 a 5 días hábiles, según el destino
              </p>
            </div>
            <div className="checkout__address-price checkout__address-price--red">
              $ 50.000
            </div>
          </div>

          <div className="checkout__pay">
            <button className="checkout__pay-btn">Pagar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
