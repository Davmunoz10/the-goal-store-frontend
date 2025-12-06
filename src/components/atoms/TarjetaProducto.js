import React from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext";

export default function TarjetaProducto({ producto }) {
  const { addToCart } = useCarrito();

  const { nombre, descripcion, precio, imagen } = producto;

  return (
    <div className="tarjeta-producto">
      <Link to={`/producto/${nombre.replace(/\s+/g, "-").toLowerCase()}`}>
        <img src={imagen} alt={nombre} />
        <h3>{nombre}</h3>
      </Link>
      <p className="descripcion">{descripcion}</p>
      <p className="precio">${precio.toLocaleString("es-CL")}</p>
      <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
    </div>
  );
}
