import React, { useEffect, useState } from "react";

export default function AdminPanelContent() {
  const [stats, setStats] = useState({
    usuarios: 0,
    pedidos: 0,
    pendientes: 0,
    ventasMes: 0,
  });

  // Cargar estadísticas del backend
  useEffect(() => {
    fetch("http://44.211.77.191:3000/admin/stats")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error("Error cargando estadísticas:", err));
  }, []);

  return (
    <>
      <header className="admin-header">Panel de Administración</header>

      <div className="card">
        <h3>Total Usuarios</h3>
        <p>{stats.usuarios}</p>
      </div>

      <div className="card">
        <h3>Total Pedidos</h3>
        <p>{stats.pedidos}</p>
      </div>

      <div className="card">
        <h3>Total Pendientes (hoy)</h3>
        <p>{stats.pendientes}</p>
      </div>

      <div className="card">
        <h3>Ventas del mes</h3>
        <p>${stats.ventasMes ? Number(stats.ventasMes).toLocaleString() : 0}</p>
      </div>

      <button className="btn-admin">Agregar nuevo producto</button>
    </>
  );
}
