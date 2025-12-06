import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext";
import "../../estilothegoalstore.css";

export default function PagoContent({ exito }) {
  const navigate = useNavigate();
  const { clearCart } = useCarrito();
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
          <h2>No hay datos de compra.</h2>
          <button
            className="pago-btn-volver"
            onClick={() => navigate("/productos")}
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  const { carrito = [], total = 0, form = {} } = pedido;
  const numeroOrden = Math.floor(Math.random() * 900000) + 100000;

  const volverTienda = () => {
    clearCart();
    navigate("/productos");
  };

  const descargarBoleta = () => {
    if (!pedido) return;

    const { form, carrito, total } = pedido;

    let contenido = "";
    contenido += "        THE GOAL STORE\n\n";
    contenido += "========= BOLETA DE COMPRA =========\n\n";
    contenido += `Nombre cliente : ${form.nombre}\n`;
    contenido += `Correo        : ${form.email}\n`;
    contenido += `Dirección     : ${form.direccion}\n`;
    contenido += `Ciudad        : ${form.ciudad}\n\n`;
    contenido += "--------------- PRODUCTOS --------------\n";

    carrito.forEach((item) => {
      contenido += `- ${item.nombre} x${item.cantidad} → $${(
        item.precio * item.cantidad
      ).toLocaleString("es-CL")}\n`;
    });

    contenido += `\nTOTAL PAGADO: $${total.toLocaleString("es-CL")}\n`;
    contenido += "\n=======================================\n";
    contenido += `Fecha: ${new Date().toLocaleString("es-CL")}\n`;

    const blob = new Blob([contenido], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `boleta_${pedido.id ?? "sinID"}.txt`;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="pago-exitoso-container">
      <div className="pago-card">
        {exito ? (
          <>
            <h2 className="pago-titulo">
              ✅ Se ha realizado la compra.{" "}
              <span className="pago-num-orden">nro #{numeroOrden}</span>
            </h2>

            <p className="pago-codigo-orden">
              Código de orden: ORDER{numeroOrden}
            </p>

            <h3 className="pago-subtitulo">Datos del comprador</h3>
            <div className="pago-info-cliente">
              <p>
                <strong>Nombre:</strong> {form.nombre}
              </p>
              <p>
                <strong>Correo:</strong> {form.email}
              </p>
              <p>
                <strong>Dirección:</strong> {form.direccion}
              </p>
              <p>
                <strong>Ciudad:</strong> {form.ciudad}
              </p>
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

            <h3 className="pago-total">Total pagado: {formatPrice(total)}</h3>

            <div className="pago-botones">
              <button className="pago-btn-volver" onClick={descargarBoleta}>
                Descargar boleta
              </button>

              <button className="pago-btn-volver" onClick={volverTienda}>
                Volver a la tienda
              </button>
            </div>
          </>
        ) : (
          <h2>❌ Error al procesar la compra</h2>
        )}
      </div>
    </div>
  );
}
