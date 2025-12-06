import React, { useState } from "react";
import InputField from "../atoms/InputField";
import Boton from "../atoms/Boton";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
    telefono: "",
    region: "",
    comuna: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.password || !form.confirmar) {
      alert("Completa todos los campos obligatorios.");
      return;
    }

    if (form.password !== form.confirmar) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const usuario = {
      nombre: form.nombre,
      email: form.email,
      password: form.password,
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));
    alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
    navigate("/login");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <InputField label="Nombre completo" type="text" name="nombre" value={form.nombre} onChange={handleChange} />
      <InputField label="Correo" type="email" name="email" value={form.email} onChange={handleChange} />
      <InputField label="Contraseña" type="password" name="password" value={form.password} onChange={handleChange} />
      <InputField label="Confirmar contraseña" type="password" name="confirmar" value={form.confirmar} onChange={handleChange} />
      <InputField label="Teléfono (opcional)" type="text" name="telefono" value={form.telefono} onChange={handleChange} />
      <InputField label="Región" type="text" name="region" value={form.region} onChange={handleChange} />
      <InputField label="Comuna" type="text" name="comuna" value={form.comuna} onChange={handleChange} />

      <Boton texto="Registrarse" tipo="submit" clase="btn-morado" />
    </form>
  );
}
