import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Boton from "../src/components/atoms/Boton";

describe("Boton", () => {
  it("ejecuta la función onClick cuando se hace click", () => {
    const mockFn = jasmine.createSpy("mockFn");

    const { getByText } = render(
      <Boton texto="Añadir" onClick={mockFn} />
    );

    fireEvent.click(getByText("Añadir"));

    expect(mockFn).toHaveBeenCalled();
  });
});
