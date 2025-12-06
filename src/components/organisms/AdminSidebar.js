import React from "react";

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <h2>Admin</h2>

      <a href="/">Home</a>
      <a href="/admin">Panel</a>
      <a href="/admin/usuarios">Usuarios</a>
      <a href="/admin/pedidos">Pedidos</a>
      <a href="/admin/productos">Productos</a>
      <a href="/admin/configuracion">Configuración</a>
    </aside>
  );
}
