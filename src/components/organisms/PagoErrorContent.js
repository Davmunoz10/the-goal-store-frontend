import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext";
import "../../estilothegoalstore.css"; 

export default function PagoErrorContent() {
  const navigate = useNavigate();
  const { carrito, total } = useCarrito();
  const [pedido, setPedido] = useState(null);
  const formatPrice = (n) => `$${(n ?? 0).toLocaleString("es-CL")}`;

  useEffect(() => {
    const data = localStorage.getItem("ultimoPedido");
    if (data) setPedido(JSON.parse(data));
  }, []);

  if (!pedido) {
    return (
      <div className="pago-exitoso-container">
        <div className="pago-card">
          <h2>No hay datos del pedido.</h2>
          <button
            className="pago-btn-volver"
            onClick={() => navigate("/comprar")}
          >
            Volver a intentar
          </button>
        </div>
      </div>
    );
  }

  const { form = {} } = pedido;
  const numeroOrden = Math.floor(Math.random() * 900000) + 100000;

  return (
    <div className="pago-exitoso-container">
      <div className="pago-card">
        <h2 className="pago-titulo" style={{ color: "#e74c3c" }}>
          No se pudo realizar el pago.{" "}
          <span className="pago-num-orden">nro #{numeroOrden}</span>
        </h2>
        <p className="pago-codigo-orden">
          Código de orden: ORDER{numeroOrden}
        </p>

        <button
          onClick={() => navigate("/comprar")}
          className="pago-btn-verde"
          style={{ display: "block", margin: "15px auto" }}
        >
          VOLVER A REALIZAR EL PAGO
        </button>

        <h3 className="pago-subtitulo">Datos del comprador</h3>
        <div className="pago-info-cliente">
          <p><strong>Nombre:</strong> {form.nombre || "—"}</p>
          <p><strong>Correo:</strong> {form.email || "—"}</p>
          <p><strong>Dirección:</strong> {form.direccion || "—"}</p>
          <p><strong>Ciudad:</strong> {form.ciudad || "—"}</p>
        </div>

        <h3 className="pago-subtitulo">Resumen de productos</h3>
        <table className="pago-tabla">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => (
              <tr key={item.nombre}>
                <td>
                  <img src={item.imagen} alt={item.nombre} />
                </td>
                <td>{item.nombre}</td>
                <td>{formatPrice(item.precio)}</td>
                <td>x{item.cantidad}</td>
                <td>{formatPrice(item.precio * item.cantidad)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="pago-total">Total a pagar: {formatPrice(total)}</h3>
      </div>
    </div>
  );
}
