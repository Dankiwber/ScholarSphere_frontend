import api from "./api";

class AuthService {
  async login(email, password) {
    try {
      const response = await api.post("/auth/login", { email, password });

      if (response.token) {
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
      }

      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  async register(userData) {
    try {
      const response = await api.post("/auth/register", userData);

      if (response.token) {
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
      }

      return response;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  }

  async logout() {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
    }
  }

  async getCurrentUser() {
    try {
      const response = await api.get("/auth/me");
      return response.user;
    } catch (error) {
      console.error("Get current user failed:", error);
      return null;
    }
  }

  isAuthenticated() {
    return !!localStorage.getItem("authToken");
  }

  getToken() {
    return localStorage.getItem("authToken");
  }

  getUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
}

export default new AuthService();
