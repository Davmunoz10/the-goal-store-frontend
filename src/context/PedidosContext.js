import { createContext, useContext, useState, useEffect } from "react";

export const PedidosContext = createContext();

export function PedidosProvider({ children }) {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const pedidosIniciales = [
      {
        fecha: "2024-06-01",
        numero: "SO1001",
        cliente: "Matias Muñoz",
        estado: "Enviado",
        total: 2500
      },
      {
        fecha: "2024-06-02",
        numero: "SO1002",
        cliente: "Claudio Bravo",
        estado: "Pendiente",
        total: 1200
      },
      {
        fecha: "2024-06-03",
        numero: "SO1003",
        cliente: "Martin Perez",
        estado: "Cancelado",
        total: 500
      },
      {
        fecha: "2024-06-04",
        numero: "SO1004",
        cliente: "Lola Fernandez",
        estado: "Procesando",
        total: 750
      },
      {
        fecha: "2024-06-05",
        numero: "SO1005",
        cliente: "Cristiano Ronaldo",
        estado: "Enviado",
        total: 300000
      },
    ];

    setPedidos(pedidosIniciales);
  }, []);

  return (
    <PedidosContext.Provider value={{ pedidos, setPedidos }}>
      {children}
    </PedidosContext.Provider>
  );
}

export function usePedidos() {
  return useContext(PedidosContext);
}
