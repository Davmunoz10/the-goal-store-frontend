import api from "./AxiosConfig";

class AuthService {
  async login(correo, password) {
    const response = await api.post("/auth/login", { correo, password });
    return response.data;
  }

  logout() {
    localStorage.removeItem("token");
  }

  getCurrentUser() {
    return localStorage.getItem("token");
  }
}

export default new AuthService();
