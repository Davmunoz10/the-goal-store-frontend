import React, { useState } from "react";

export default function NuevoPedidoContent() {
  const [form, setForm] = useState({
    fecha: "",
    cliente: "",
    monto: "",
    estado: "Pendiente",
  });

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Pedido guardado (demo frontend, sin backend)");
  };

  return (
    <>
      <header className="admin-header">Registro de Nuevo Pedido/Orden</header>

      <div className="form-container">
        <h2>Datos de la Orden</h2>

        <form onSubmit={onSubmit}>
          <label>Fecha:</label>
          <input type="date" name="fecha" value={form.fecha} onChange={onChange} required />

          <label>Cliente (Nombre):</label>
          <input type="text" name="cliente" value={form.cliente} onChange={onChange} required />

          <label>Total ($):</label>
          <input type="number" name="monto" value={form.monto} onChange={onChange} required min="1" />

          <label>Estado del Pedido:</label>
          <select name="estado" value={form.estado} onChange={onChange} required>
            <option value="Pendiente">Pendiente</option>
            <option value="Procesando">Procesando</option>
            <option value="Enviado">Enviado</option>
            <option value="Cancelado">Cancelado</option>
          </select>

          <button type="submit" className="btn-admin">
            Guardar Pedido
          </button>
        </form>
      </div>
    </>
  );
}
