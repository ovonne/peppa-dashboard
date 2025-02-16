import api from "@/services/api";

const adminService = {
  getAdmin: async () => {
    try {
      const response = await api.get("/accounts/admin/", {});
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  },
};

export { adminService };
