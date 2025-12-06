import React from "react";
import AdminSidebar from "../organisms/AdminSidebar";
import AdministradorContent from "../organisms/AdministradorContent";

export default function AdministradorTemplate() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <AdministradorContent />
    </div>
  );
}
