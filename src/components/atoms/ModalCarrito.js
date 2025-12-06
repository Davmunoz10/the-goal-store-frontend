import React from "react";

export default function ModalCarrito({ producto, visible, onClose }) {
  if (!visible || !producto) return null;

  return (
    <div className="modal-carrito-overlay" onClick={onClose}>
      <div
        className="modal-carrito"
        onClick={(e) => e.stopPropagation()} 
      >
        <h3>Producto agregado 🛒</h3>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="modal-carrito-imagen"
        />
        <h4>{producto.nombre}</h4>
        <p>{producto.precio}</p>
        <div className="modal-carrito-botones">
          <button onClick={onClose}>Seguir comprando</button>
          <a href="/carrito" className="btn-ir-carrito">
            Ir al carrito
          </a>
        </div>
      </div>
    </div>
  );
}
