import React from "react";
import { Link } from "react-router-dom";

export default function RegistroLogin() {
  return (
    <div className="RegistroLogin">
      <ul>
        <li>
          <Link to="/login" className="btn btn-primary">
            Iniciar sesión
          </Link>
        </li>
        <li>
          <Link to="/registro" className="btn btn-primary">
            Registrarse
          </Link>
        </li>
      </ul>
    </div>
  );
}
