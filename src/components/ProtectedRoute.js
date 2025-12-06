import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, roleRequired }) {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) return <Navigate to="/login" />;

  if (roleRequired && usuario.rol !== roleRequired) {
    alert("No tienes permisos para acceder aquí");
    return <Navigate to="/" />;
  }

  return children;
}
