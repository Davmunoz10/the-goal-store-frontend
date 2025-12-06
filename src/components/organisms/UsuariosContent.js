import React from "react";
import { Link } from "react-router-dom";

const pedidosMock = [
  { fecha: "2024-06-01", orden: "SO1001", cliente: "Matias Muñoz", estado: "Enviado", total: 2500 },
  { fecha: "2024-06-02", orden: "SO1002", cliente: "Claudio Bravo", estado: "Pendiente", total: 1200 },
  { fecha: "2024-06-03", orden: "SO1003", cliente: "Martin Perez", estado: "Cancelado", total: 500 },
  { fecha: "2024-06-04", orden: "SO1004", cliente: "Lola Fernandez", estado: "Procesando", total: 750 },
  { fecha: "2024-06-05", orden: "SO1005", cliente: "Cristiano Ronaldo", estado: "Enviado", total: 300000 },
];

export default function UsuariosContent() {
  return (
    <>
      <header className="admin-header">Gestión de Pedidos/Órdenes</header>

      <Link to="/nuevopedido" className="btn-admin">
        Nueva Usuario
      </Link>

      <table className="tabla-mantenedor">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>No. Orden</th>
            <th>Cliente</th>
            <th>Estado</th>
            <th>Total ($)</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidosMock.map((p) => (
            <tr key={p.orden}>
              <td>{p.fecha}</td>
              <td>{p.orden}</td>
              <td>{p.cliente}</td>
              <td className={`estado-${p.estado.toLowerCase()}`}>{p.estado}</td>
              <td>${p.total}</td>
              <td>
                <button className="btn-small">Editar</button>
                <button className="btn-small eliminar">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
