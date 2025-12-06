import React from "react";
import Header from "../organisms/Header";

export default function AuthTemplate({ children }) {
  return (
    <>
      <Header />
      <main className="container auth-page">{children}</main>
    </>
  );
}
