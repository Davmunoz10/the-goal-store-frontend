import React from "react";

export default function SeccionSuscripcion() {
  return (
    <section className="seccion-pie seccion-derecha">
      <h4>¡Suscríbete!</h4>
      <p>Mantente al día! Únete a nuestro Muro de noticias.</p>
      <div className="formulario-suscripcion">
        <input type="email" placeholder="Ingresa tu Email" id="input-email-suscripcion"/>
        <button type="submit" class="btn-suscribir">Suscribirse</button>
      </div>
    </section>
  );
}
