import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

export default function Carrito() {
  const {
    carrito,
    eliminarDelCarrito,
    cambiarCantidad,
    clearCart,
    total,
    formatPrice,
  } = useContext(CarritoContext);

  return (
    <div className="carrito-container">
      <h2>Mi carrito de compras</h2>

      {carrito.length === 0 ? (
        <p>El carrito está vacío. ¡Añade productos!</p>
      ) : (
        <div className="carrito-lista">
          {carrito.map((item, index) => (
            <div key={index} className="producto-carrito">
              <div className="producto-info">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="producto-imagen"
                />
                <div>
                  <h4>{item.nombre}</h4>
                  <p>{formatPrice(item.precio)} c/u</p>
                </div>
              </div>

              <div className="producto-precio-cantidad">
                <p className="precio">
                  {formatPrice(item.precio * item.cantidad)}
                </p>
                <div className="cantidad-selector">
                  <button
                    onClick={() =>
                      cambiarCantidad(item.nombre, item.cantidad - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.cantidad}</span>
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
          ))}

          <div className="carrito-total">
            <h3>Total: {formatPrice(total)}</h3>
            <button onClick={clearCart}>Vaciar carrito</button>
          </div>
        </div>
      )}
    </div>
  );
}
