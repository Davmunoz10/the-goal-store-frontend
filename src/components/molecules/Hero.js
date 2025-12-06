import React from "react";
import Boton from "../atoms/Boton";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="hero">
      <div className="hero-texto">
        <h1>The Goal Store ⚽</h1>
        <p>
          Viste tu pasión, apoya a tu equipo. Encuentra aquí la camiseta oficial de tu
          equipo y los botines de fútbol perfectos para dominar el partido. 
          Calidad, estilo y rendimiento en un solo lugar.
        </p>
        <Boton 
          texto="⬇ Ver Productos" 
          clase="btn-hero"
          onClick={() => navigate("/productos")}
        />
      </div>

      <div className="hero-imagen-2">
        <img 
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpRwp371p6O-CJ5i9EQFz6JLiLpA1MeBAfRySVD3ZakImOEeq47d9Rr7A3BXo2tTfJK6ZPMk9HNEidlWgQO8l3Cao5G5hv7GRG_8j70QGEH-AlHY6mPRGzo6PizFoR5Df4V-ux9_UlkJs/s1600/Barcelona+2011+04+27.jpg" 
          alt="Imagen de productos"
        />
      </div>
    </section>
  );
}
