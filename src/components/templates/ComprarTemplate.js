// src/components/templates/ComprarTemplate.js
import React from "react";
import Header from "../organisms/Header";
import ComprarContent from "../organisms/ComprarContent";

export default function ComprarTemplate({ children }) {
  return (
    <>
      <Header />
      {children ? children : <ComprarContent />}
    </>
  );
}