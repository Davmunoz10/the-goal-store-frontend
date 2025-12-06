import api from "./AxiosConfig";

const BoletaService = {
  crearBoleta: (usuario_id, items) =>
    api.post("/boletas", {
      usuario_id,
      items,
    }),
};

export default BoletaService;
