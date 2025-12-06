import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext";
import BoletaService from "../../services/BoletaService";

export default function ComprarContent() {
  const navigate = useNavigate();
  const { carrito, total } = useCarrito();
  const formatPrice = (n) => `$${(n ?? 0).toLocaleString("es-CL")}`;

  const [procesando, setProcesando] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    direccion: "",
    ciudad: "",
    metodoPago: "debito",
  });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!carrito.length) {
      alert("Tu carrito está vacío.");
      return;
    }

    if (!form.nombre || !form.email || !form.direccion || !form.ciudad) {
      alert("Completa todos los campos.");
      return;
    }

    setProcesando(true);

    try {
      const usuario = JSON.parse(localStorage.getItem("usuario"));
      if (!usuario) {
        alert("Debes iniciar sesión antes de comprar.");
        navigate("/login");
        return;
      }

      const items = carrito.map((item) => ({
        producto_id: item.id,
        cantidad: item.cantidad,
        subtotal: item.precio * item.cantidad,
      }));

      const resp = await BoletaService.crearBoleta(usuario.id, items);
      const { boleta_id } = resp.data;

      const totalReal = carrito.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
      );

      localStorage.setItem(
        "ultimoPedido",
        JSON.stringify({
          id: boleta_id,
          total: totalReal,
          carrito,
          form,
        })
      );

      localStorage.removeItem("carrito");

      navigate("/pago-correcto");
    } catch (error) {
      console.error(error);
      navigate("/pago-error");
    } finally {
      setProcesando(false);
    }
  };

  return (
    <main className="container checkout-page">
      <h2>Detalles de la compra</h2>

      <div className="carrito-grid">
        <div className="carrito-items">
          {procesando ? (
            <p className="procesando-msg">Procesando compra, por favor espera...</p>
          ) : carrito.length === 0 ? (
            <p>
              Tu carrito está vacío. <Link to="/productos">Ir a productos</Link>
            </p>
          ) : (
            <form onSubmit={onSubmit} className="checkout-form">
              <div className="form-group">
                <label>Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={onChange}
                  placeholder="Ej: Juan Pérez"
                />
              </div>

              <div className="form-group">
                <label>Correo</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="correo@dominio.com"
                />
              </div>

              <div className="form-group">
                <label>Dirección</label>
                <input
                  type="text"
                  name="direccion"
                  value={form.direccion}
                  onChange={onChange}
                  placeholder="Calle 123, depto 45"
                />
              </div>

              <div className="form-group">
                <label>Ciudad</label>
                <input
                  type="text"
                  name="ciudad"
                  value={form.ciudad}
                  onChange={onChange}
                  placeholder="Santiago"
                />
              </div>

              <div className="form-group">
                <label>Método de pago</label>
                <select
                  name="metodoPago"
                  value={form.metodoPago}
                  onChange={onChange}
                >
                  <option value="debito">Débito</option>
                  <option value="credito">Crédito</option>
                  <option value="transferencia">Transferencia</option>
                </select>
              </div>

              <button type="submit" className="pagar-btn">
                Confirmar compra
              </button>
            </form>
          )}
        </div>

        <div className="carrito-resumen">
          <div className="total-container">
            <p>TOTAL:</p>
            <p className="total-valor">{formatPrice(total)}</p>
          </div>

          <div className="checkout-resumen-items">
            {carrito.map((item) => (
              <div key={item.nombre} className="producto-carrito">
                <div className="producto-info">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="producto-imagen"
                  />
                  <h4>{item.nombre}</h4>
                </div>
                <div className="producto-precio-cantidad">
                  <p className="precio">
                    {formatPrice(item.precio * item.cantidad)}
                  </p>
                  <span className="cantidad">x{item.cantidad}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
