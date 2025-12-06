import React from "react";
import { Link } from "react-router-dom";

export default function SidebarAdmin() {
  return (
    <aside className="sidebar-admin">
      <h2>Admin</h2>
      <nav>
        <ul>
          <li><Link to="/admin">Panel</Link></li>
          <li><Link to="/usuarios">Usuarios</Link></li>
          <li><Link to="/nuevopedido">Pedidos</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/configuracion">Configuración</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
