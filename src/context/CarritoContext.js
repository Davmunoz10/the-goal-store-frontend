import React, { createContext, useContext, useState, useEffect } from "react";


const CarritoContext = createContext();
export const useCarrito = () => useContext(CarritoContext);

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const addToCart = (producto) => {
    const existe = carrito.find((item) => item.nombre === producto.nombre);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.nombre === producto.nombre
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
    alert(`${producto.nombre} fue agregado al carrito ✅`);
  };

  const eliminarDelCarrito = (nombre) => {
    setCarrito(carrito.filter((item) => item.nombre !== nombre));
  };

  const cambiarCantidad = (nombre, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    setCarrito(
      carrito.map((item) =>
        item.nombre === nombre ? { ...item, cantidad: nuevaCantidad } : item
      )
    );
  };

  const clearCart = () => {
    setCarrito([]);
    localStorage.removeItem("carrito");
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        addToCart,
        eliminarDelCarrito,
        cambiarCantidad,
        total,
        clearCart,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
