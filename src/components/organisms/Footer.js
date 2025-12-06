import React from "react";
import TextoPie from "../atoms/TextoPie";
import MetodosPago from "../molecules/MetodosPago";
import SeccionCategorias from "../molecules/SeccionCategorias";
import SeccionSuscripcion from "../molecules/SeccionSuscripcion";

export default function Footer() {
  return (
    <footer className="pie-pagina-principal">
      <div className="contenedor-contenido-pie">
        <div>
          <TextoPie className="font-bold mb-2">THE GOAL STORE</TextoPie>
          <MetodosPago />
        </div>
        <SeccionCategorias />
        <SeccionSuscripcion />
      </div>
      <div className="text-center mt-4 text-sm">
        <TextoPie>&copy; 2025 TheGoalStore - Todos los derechos reservados</TextoPie>
      </div>
    </footer>
  );
}
