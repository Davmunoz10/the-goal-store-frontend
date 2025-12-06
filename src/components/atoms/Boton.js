import React from "react";

export default function Boton({ texto, onClick, tipo = "button", clase = "" }) {
  return (
    <button type={tipo} className={`btn ${clase}`} onClick={onClick}>
      {texto}
    </button>
  );
}