import React from "react";
import Hero from "../molecules/Hero";
import RegistroLogin from "../molecules/RegistroLogin";
import ProductosHome from "../organisms/ProductosHome";

export default function HomeContent() {
  return (
    <main>
      <RegistroLogin />
      <Hero />
      <ProductosHome />
    </main>
  );
}