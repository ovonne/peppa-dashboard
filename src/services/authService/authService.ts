import api from "@/services/api";
import Cookies from "js-cookie";

const authService = {
  login: async (username: string, password: string) => {
    try {
      const response = await api.post("/accounts/admin/login/", {
        username,
        password,
      });
      const { token } = response.data;

      Cookies.set("token", token, { expires: 7, secure: true });

      return response.data;
    } catch (error) {
      throw new Error("Error on login");
    }
  },

  logout: () => {
    Cookies.remove("token");
  },

  getToken: () => {
    return Cookies.get("token");
  },
};

export { authService };
