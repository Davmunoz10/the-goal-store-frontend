import React from "react";
import { Link } from "react-router-dom";

export default function MenuNavegacion({ destino, texto }) {
  return (
    <li>
      <Link to={destino}>{texto}</Link>
    </li>
  );
}
