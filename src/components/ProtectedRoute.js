import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, roleRequired }) {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  // Si no está logueado → fuera
  if (!usuario) return <Navigate to="/login" />;

  // Si se pide un rol y el usuario no lo tiene → fuera
  if (roleRequired && usuario.rol !== roleRequired) {
    alert("No tienes permisos para acceder aquí");
    return <Navigate to="/" />;
  }

  return children;
}
