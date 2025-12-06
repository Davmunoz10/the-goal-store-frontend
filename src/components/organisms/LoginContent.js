import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";

export default function LoginContent() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await AuthService.login(correo, password);

      if (data.token && data.usuario) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("usuario", JSON.stringify(data.usuario));

        alert("Inicio de sesión correcto ✅");
        navigate("/");
      }

     }  catch (error) {
  console.log(error.response?.data || error);
  alert("❌ Usuario o contraseña incorrectos");
}
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>

        <form onSubmit={handleLogin}>
          <label>Correo:</label>
          <input
            type="email"
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <label>Contraseña:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="boton-enviar">Ingresar</button>
        </form>
      </div>
    </div>
  );
}
