import React from "react";

export default function Contacto() {
  return (
    <div className="form-container contacto">
      <h2>Formulario de contacto</h2>
      <form>
        <label htmlFor="nombre">NOMBRE COMPLETO</label>
        <input type="text" id="nombre" />

        <label htmlFor="correo">CORREO</label>
        <input type="email" id="correo" />

        <label htmlFor="contenido">CONTENIDO</label>
        <textarea id="contenido" rows="3"></textarea>

        <a href="/" className="boton-enviar">
          ENVIAR MENSAJE
        </a>
      </form>
    </div>
  );
}
