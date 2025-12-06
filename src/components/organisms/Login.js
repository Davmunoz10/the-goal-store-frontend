import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginTemplate() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button onClick={handleLogin} className="btn btn-primary">
          Ingresar
        </button>
      </div>
    </div>
  );
}
