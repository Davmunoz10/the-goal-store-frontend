import React from "react";
import { useCarrito } from "../../context/CarritoContext";

export default function ProductoInfo({ producto }) {
  const { addToCart } = useCarrito();

  const handleAgregar = () => {
    addToCart(producto);
    alert("✅ Producto agregado al carrito");
  };

  return (
    <div className="producto-info">
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p className="precio">${producto.precio.toLocaleString("es-CL")}</p>
      <button onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  );
}
