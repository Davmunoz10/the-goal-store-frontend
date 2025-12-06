import React from "react";
import { useCarrito } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

export default function CarritoContenido() {
  const { carrito, eliminarDelCarrito, cambiarCantidad, total } = useCarrito();

  return (
    <main className="container carrito-page">
      <h2>Mi carrito de compras</h2>

      {}
      <div className="carrito-grid">
        
        {}
        <div className="carrito-items" id="carrito-items">
          
          {}
          {carrito.length === 0 ? (
            
            
            <p>El carrito está vacío. ¡Añade productos!</p>

          ) : (
            
            
            carrito.map((item) => (
              <div className="producto-carrito" key={item.nombre}>
                <div className="producto-info">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="producto-imagen"
                  />
                  <h4>{item.nombre}</h4>
                </div>

                <div className="producto-precio-cantidad">
                  <p className="precio">${item.precio * item.cantidad}</p>
                  <div className="cantidad-selector">
                    <button
                      onClick={() =>
                        cambiarCantidad(item.nombre, item.cantidad - 1)
                      }
                      disabled={item.cantidad <= 1}
                    >
                      -
                    </button>
                    <span className="cantidad">{item.cantidad}</span>
                    <button
                      onClick={() =>
                        cambiarCantidad(item.nombre, item.cantidad + 1)
                      }
                    >
                      +
                    </button>
                    <button onClick={() => eliminarDelCarrito(item.nombre)}>
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {}
        <div className="carrito-resumen">
          <div className="total-container">
            <p>TOTAL:</p>
            <p className="total-valor" id="total-valor">
              ${total.toLocaleString("es-CL")}
            </p>
          </div>
          <div className="cupon">
            <p>Ingrese el cupón de descuento</p>
            <div className="cupon-input-group">
              <input type="text" placeholder="" />
              <button className="aplicar-btn">APLICAR</button>
            </div>
          </div>
            <Link to="/comprar" className="pagar-btn">PAGAR</Link>
        </div>
        
      </div>
    </main>
  );
}
