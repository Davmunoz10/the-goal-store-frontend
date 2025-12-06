import React from "react";
import Logo from "../atoms/Logo";
import MenuNavegacion from "../molecules/MenuNavegacion";
import { useCarrito } from "../../context/CarritoContext";

export default function Header() {
  const { carrito } = useCarrito();
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    window.location.href = "/login";
  };

  return (
    <header className="header">
      <div className="header-content">

        <div className="header-logo">
          <Logo />
        </div>

        <nav className="header-menu">
          <ul>
            <MenuNavegacion destino="/" texto="Inicio" />
            <MenuNavegacion destino="/productos" texto="Productos" />
            <MenuNavegacion destino="/nosotros" texto="Nosotros" />
            <MenuNavegacion destino="/blogs" texto="Blogs" />
            <MenuNavegacion destino="/contacto" texto="Contacto" />

            {usuario?.rol === "ADMIN" && (
              <MenuNavegacion destino="/admin" texto="⚙️ Panel Admin" />
            )}
          </ul>
        </nav>

        <div className="header-right">

          <a href="/carrito" className="carrito-icon">
            🛒
            <span className="carrito-contador">{cantidadTotal}</span>
          </a>

          {usuario && (
            <div className="header-usuario">
              <span className="icono-usuario">👤</span>
              <span>{usuario.nombre}</span>
            </div>
          )}

          {usuario && (
            <button className="btn-logout" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
