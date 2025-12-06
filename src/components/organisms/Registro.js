import React from "react";
import { useNavigate } from "react-router-dom";

export default function Registro() {
  const navigate = useNavigate();

  const handleRegistro = (e) => {
    e.preventDefault();
    navigate("/"); 
  };

  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form onSubmit={handleRegistro}>
        <label htmlFor="nombre">NOMBRE COMPLETO</label>
        <input type="text" id="nombre" required />

        <label htmlFor="correo">CORREO</label>
        <input type="email" id="correo" required />

        <label htmlFor="password">CONTRASEÑA</label>
        <input type="password" id="password" required />

        <label htmlFor="confirm-password">CONFIRMAR CONTRASEÑA</label>
        <input type="password" id="confirm-password" required />

        <label htmlFor="telefono">TELEFONO</label>
        <input type="text" id="telefono" />

        <label htmlFor="region">REGIÓN</label>
        <select id="region" defaultValue="">
          <option value="" disabled>Seleccione una región</option>
          <option>Región Metropolitana de Santiago</option>
          <option>Valparaíso</option>
          <option>Los Lagos</option>
          <option>Araucanía</option>
          <option>Magallanes</option>
        </select>

        <label htmlFor="comuna">COMUNA</label>
        <select id="comuna" defaultValue="">
          <option value="" disabled>Seleccione una comuna</option>
          <option>Santiago</option>
          <option>Viña del Mar</option>
          <option>Puerto Montt</option>
          <option>Temuco</option>
          <option>Punta Arenas</option>
        </select>

        <button type="submit" className="boton-enviar">Registrarse</button>
      </form>
    </div>
  );
}
