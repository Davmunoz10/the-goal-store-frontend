import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext";
import { productosData } from "../../data/productosData";

export default function ProductoDetalleContent() {
  const { nombre } = useParams();
  const { addToCart } = useCarrito();
  const [cantidad, setCantidad] = useState(1);

  const producto = productosData.find(
    (p) => p.nombre.replace(/\s+/g, "-").toLowerCase() === nombre
  );

  const [imagenPrincipal, setImagenPrincipal] = useState(producto?.imagen);

  if (!producto) {
    return (
      <main className="container product-detail-page">
        <p>Producto no encontrado.</p>
      </main>
    );
  }

  return (
    <main className="container product-detail-page">
      <div className="breadcrumbs">
        <a href="/">Inicio</a> &gt;{" "}
        <a href="/productos">Productos</a> &gt;{" "}
        <span className="current-page">{producto.nombre}</span>
      </div>

      <div className="product-content-grid">
        <div className="product-image-gallery">
          <div className="main-image">
            <img
              src={imagenPrincipal}
              alt={`Imagen principal de ${producto.nombre}`}
              id="main-product-image"
            />
          </div>

          <div className="thumbnail-images">
            {[producto.imagen, producto.extra1, producto.extra2, producto.extra3]
              .filter(Boolean)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Miniatura ${index + 1}`}
                  className={`thumbnail ${
                    imagenPrincipal === img ? "active" : ""
                  }`}
                  onClick={() => setImagenPrincipal(img)}
                />
              ))}
          </div>
        </div>

        <div className="product-details">
          <h2 className="product-title">{producto.nombre}</h2>
          <p className="product-price">
            ${producto.precio.toLocaleString("es-CL")}
          </p>
          <p className="product-description">{producto.descripcion}</p>

          <div className="quantity-selector-group">
            <label htmlFor="cantidad">Cantidad:</label>
            <select
              id="cantidad"
              className="quantity-select"
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <button
            className="add-to-cart-btn"
            onClick={() => addToCart({ ...producto, cantidad })}
          >
            Añadir al carrito
          </button>
        </div>
      </div>

      <h3 className="related-products-title">Productos Relacionados</h3>
      <div className="related-products-grid">
        {productosData.slice(0, 5).map((rel, i) => (
          <div className="related-product-item" key={i}>
            <img src={rel.imagen} alt={`Producto relacionado ${i + 1}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
