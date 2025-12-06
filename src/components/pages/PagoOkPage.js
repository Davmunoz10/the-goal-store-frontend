import React from "react";
import ComprarTemplate from "../templates/ComprarTemplate";
import PagoContent from "../organisms/PagoContent";

export default function PagoOkPage() {
  return (
    <ComprarTemplate>
      <PagoContent exito={true} />
    </ComprarTemplate>
  );
}
