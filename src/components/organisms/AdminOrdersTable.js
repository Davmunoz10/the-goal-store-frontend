import React from "react";

export default function AdminOrdersTable() {
  const pedidos = [
    { fecha: "2024-06-01", orden: "SO1001", cliente: "Matias Muñoz", estado: "Enviado", total: 2500 },
    { fecha: "2024-06-02", orden: "SO1002", cliente: "Claudio Bravo", estado: "Pendiente", total: 1200 },
    { fecha: "2024-06-03", orden: "SO1003", cliente: "Martin Perez", estado: "Cancelado", total: 500 },
    { fecha: "2024-06-04", orden: "SO1004", cliente: "Lola Fernandez", estado: "Procesando", total: 750 },
    { fecha: "2024-06-05", orden: "SO1005", cliente: "Cristiano Ronaldo", estado: "Enviado", total: 300000 },
  ];

  return (
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
        {pedidos.map((p, i) => (
          <tr key={i}>
            <td>{p.fecha}</td>
            <td>{p.orden}</td>
            <td>{p.cliente}</td>
            <td className={p.estado.toLowerCase()}>{p.estado}</td>
            <td>${p.total.toLocaleString()}</td>
            <td>
              <button className="btn-editar">Editar</button>
              <button className="btn-eliminar">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
