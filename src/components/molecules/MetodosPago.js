import React from "react";
import ImagenPago from "../atoms/ImagenPago";

export default function MetodosPago() {
  return (
    <div className="metodos-pago">
      <ImagenPago src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
      <ImagenPago src="https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png" alt="Mastercard" />
      <ImagenPago src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/960px-American_Express_logo_%282018%29.svg.png" alt="American Express" />
    </div>
  );
}
