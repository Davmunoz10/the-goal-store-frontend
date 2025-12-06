import React from "react";
import TarjetaProducto from "../atoms/TarjetaProducto";

export default function SeccionProductos({ titulo, productos }) {
  return (
    <section id={titulo}>
      <div className="container">
        <h2>{titulo}</h2>
        <div className="productos">
{productos.map((producto, index) => (
  <TarjetaProducto key={index} producto={producto} />
))}

        </div>
      </div>
    </section>
  );
}
