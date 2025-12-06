import React from "react";
import { Link } from "react-router-dom";
import "../../estilothegoalstore.css"; 

export default function AdminTemplate({ children }) {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h2>Admin</h2>

        <Link to="/">Home</Link>
        <Link to="/admin">Panel</Link>
        <Link to="/usuarios">Usuarios</Link>
        <Link to="/nuevopedido">Pedidos</Link>
        <Link to="/admin/productos">Productos</Link>
        <Link to="/configuracion">Configuración</Link>
      </aside>

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
