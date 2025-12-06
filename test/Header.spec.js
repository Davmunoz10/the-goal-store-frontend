import React from "react";
import { render } from "@testing-library/react";
import Header from "../src/components/organisms/Header";
import { CarritoProvider } from "../src/context/CarritoContext";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  it("debería mostrar el nombre de la tienda", () => {
    const { getByText } = render(
      <MemoryRouter>
        <CarritoProvider>
          <Header />
        </CarritoProvider>
      </MemoryRouter>
    );

    expect(getByText("THE GOAL STORE")).toBeTruthy();
  });
});
