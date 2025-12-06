import React from "react";

export default function AdministradorContent() {
  return (
    <div className="admin-content">
      <header>Panel de Administración</header>

      <div className="admin-card">
        <h3>Total Usuarios</h3>
        <p>120</p>
      </div>

      <div className="admin-card">
        <h3>Total Pedidos</h3>
        <p>45</p>
      </div>

      <div className="admin-card">
        <h3>Total Pendientes</h3>
        <p>15</p>
      </div>

      <div className="admin-card">
        <h3>Ventas del mes</h3>
        <p>$1.200.000</p>
      </div>

      <button className="admin-btn">Agregar nuevo producto</button>
    </div>
  );
}

