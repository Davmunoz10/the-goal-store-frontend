import React from "react";
import EnlacePie from "../atoms/EnlacePie";

export default function SeccionCategorias() {
  return (
    <div classname="seccion-pie enlaces-centrales">
      <h4 className="titulo-pie">Categorías</h4>
      <EnlacePie href="#">Categoría X</EnlacePie>
      <EnlacePie href="#">Categoría Y</EnlacePie>
      <EnlacePie href="#">Categoría Z</EnlacePie>
    </div>
  );
}
