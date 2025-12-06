import React from "react";

export default function AdminStats() {
  return (
    <>
      <div className="card">
        <h3>Total Usuarios</h3>
        <p>120</p>
      </div>

      <div className="card">
        <h3>Total Pedidos</h3>
        <p>45</p>
      </div>

      <div className="card">
        <h3>Total Pendientes</h3>
        <p>15</p>
      </div>

      <div className="card">
        <h3>Ventas del mes</h3>
        <p>$1.200.000</p>
      </div>

      <button>Agregar nuevo producto</button>
    </>
  );
}
