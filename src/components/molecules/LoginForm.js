import React, { useState } from "react";
import InputField from "../atoms/InputField";
import Boton from "../atoms/Boton";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuario = JSON.parse(localStorage.getItem("usuarioRegistrado"));
    if (!usuario) {
      alert(" No hay ningún usuario registrado. Por favor regístrate primero.");
      navigate("/registro");
      return;
    }

    if (usuario.email === form.email && usuario.password === form.password) {
      localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
      alert(`Bienvenido, ${usuario.nombre}`);
      navigate("/");
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <InputField
        label="Correo"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="correo@dominio.com"
      />

      <InputField
        label="Contraseña"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="********"
      />

      <Boton texto="Iniciar Sesión" tipo="submit" clase="btn-morado" />
    </form>
  );
}
