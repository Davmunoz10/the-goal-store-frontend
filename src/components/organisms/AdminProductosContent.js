import React, { useEffect, useState } from "react";
import api from "../../services/AxiosConfig";

export default function AdminProductosContent() {

  const [productos, setProductos] = useState([]);

  // Cargar productos desde BD
  const cargarProductos = async () => {
    try {
      const resp = await api.get("/productos");
      setProductos(resp.data);
    } catch (error) {
      console.log(error);
      alert("Error cargando productos");
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const eliminarProducto = async (id) => {
    if (!window.confirm("¿Eliminar producto?")) return;

    try {
      await api.delete(`/productos/${id}`);
      cargarProductos();
      alert("Producto eliminado");
    } catch (error) {
      console.log(error);
      alert("No se pudo eliminar");
    }
  };

  return (
    <div className="admin-productos">
      <h2>Gestión de Productos</h2>

      <button 
        onClick={() => window.location.href = "/add-producto"}
        className="btn-agregar"
      >
        ➕ Agregar Producto
      </button>

      <table className="tabla-admin">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {productos.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>${p.precio}</td>

              <td>
                <button 
                  onClick={() => window.location.href = `/edit-producto/${p.id}`}
                  className="btn-editar"
                >
                  ✏ Editar
                </button>

                <button 
                  onClick={() => eliminarProducto(p.id)}
                  className="btn-eliminar"
                >
                  🗑 Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
