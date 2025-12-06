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

        {/* LOGO */}
        <div className="header-logo">
          <Logo />
        </div>

        {/* MENÚ PRINCIPAL */}
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

        {/* SECCIÓN DERECHA */}
        <div className="header-right">

          {/* CARRITO */}
          <a href="/carrito" className="carrito-icon">
            🛒
            <span className="carrito-contador">{cantidadTotal}</span>
          </a>

          {/* USUARIO LOGUEADO */}
          {usuario && (
            <div className="header-usuario">
              <span className="icono-usuario">👤</span>
              <span>{usuario.nombre}</span>
            </div>
          )}

          {/* BOTÓN CERRAR SESIÓN */}
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
