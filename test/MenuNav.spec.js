import React from "react";
import { render } from "@testing-library/react";
import MenuNavegacion from "../src/components/molecules/MenuNavegacion";
import { BrowserRouter } from "react-router-dom";

describe("MenuNavegacion", () => {
  it("debería recibir y mostrar el texto correctamente", () => {
    const { getByText } = render(
      <BrowserRouter>
        <MenuNavegacion texto="Productos" destino="/productos" />
      </BrowserRouter>
    );

    expect(getByText("Productos")).toBeTruthy();
  });
});
