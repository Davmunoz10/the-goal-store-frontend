import { useCarrito } from "../../context/CarritoContext";

export default function Carrito() {
  const { carrito } = useCarrito();
  const cantidad = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  return (
    <a href="/carrito" className="btn carrito-btn">
      <span className="icono-carrito">🛒</span>
      <span className="contador-carrito">{cantidad}</span>
    </a>
  );
}
