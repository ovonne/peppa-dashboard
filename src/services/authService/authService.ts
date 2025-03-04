import api from "@/services/api";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const authService = {
  login: async (email: string, password: string) => {
    try {
      const response = await api.post("/accounts/admin/login/", {
        email,
        password,
      });
      const { token } = response.data;

      const decoded = jwtDecode(token);

      console.log(decoded);

      Cookies.set("token", token, { expires: 7, secure: true });

      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data.error);
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
