import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterContent() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");

  const handleRegistro = (e) => {
    e.preventDefault();

    const usuarioNuevo = {
      nombre,
      correo: e.target.correo.value,
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioNuevo));

    alert(`✔ Usuario registrado correctamente: ${nombre}`);

    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form onSubmit={handleRegistro}>
        <label htmlFor="nombre">Nombre completo</label>
        <input
          id="nombre"
          type="text"
          required
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor="correo">Correo</label>
        <input id="correo" type="email" required />

        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" required />

        <label htmlFor="confirm-password">Confirmar contraseña</label>
        <input id="confirm-password" type="password" required />

        <button type="submit" className="boton-enviar">
          Registrarse
        </button>
      </form>
    </div>
  );
}
