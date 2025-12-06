import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import AdminProductosPage from "./components/pages/AdminProductosPage";


import ListaProductos from "./components/ListaProductos";
import ProductoComponent from "./components/ProductoComponent";

import "./estilothegoalstore.css";

import HomePage from "./components/pages/HomePage";
import ProductoPage from "./components/pages/ProductoPage";
import ProductoDetallePage from "./components/pages/ProductoDetallePage";
import CarritoPage from "./components/pages/CarritoPage";
import ContactoPage from "./components/pages/ContactoPage";
import BlogsPage from "./components/pages/BlogsPage";
import NosotrosPage from "./components/pages/NosotrosPage";
import LoginPage from "./components/pages/LoginPage";
import RegistroPage from "./components/pages/RegistroPage";
import AdministradorPage from "./components/pages/AdministradorPage";
import ComprarPage from "./components/pages/ComprarPage";
import PagoOkPage from "./components/pages/PagoOkPage";
import PagoErrorPage from "./components/pages/PagoErrorPage";
import UsuariosPage from "./components/pages/UsuariosPage";
import NuevoPedidoPage from "./components/pages/NuevoPedidoPage";

// -------------------
// RUTA ADMIN PROTEGIDA
// -------------------
function RutaAdmin({ children }) {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario || usuario.rol !== "ADMIN") {
    return <Navigate to="/" />;
  }

  return children;
}

export default function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="/productos" element={<ProductoPage />} />
          <Route path="/producto/:nombre" element={<ProductoDetallePage />} />

          <Route path="/carrito" element={<CarritoPage />} />
          <Route path="/nuevopedido" element={<NuevoPedidoPage />} />

          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegistroPage />} />

          <Route path="/usuarios" element={<UsuariosPage />} />

          {/* ADMIN PROTEGIDO */}
          <Route
            path="/admin"
            element={
              <RutaAdmin>
                <AdministradorPage />
              </RutaAdmin>
            }
          />

          <Route 
            path="/admin/productos"
            element={
              <RutaAdmin>
                <AdminProductosPage />
              </RutaAdmin>
            }
          />


          <Route path="/comprar" element={<ComprarPage />} />

          <Route path="/pago-correcto" element={<PagoOkPage />} />
          <Route path="/pago-error" element={<PagoErrorPage />} />

          <Route path="/add-producto" element={<ProductoComponent />} />
          <Route path="/edit-producto/:id" element={<ProductoComponent />} />

        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  );
}
