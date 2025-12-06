import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PedidosProvider } from "./context/PedidosContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PedidosProvider>
    <App />
  </PedidosProvider>
);

