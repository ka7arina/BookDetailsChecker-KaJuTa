import Api from "./Api";

const LoginService = {
  /**
   * Sendet eine POST-Anfrage an /login
   */
  login: async (email: string, password: string) => {
    try {
      const response = await Api.post("/login", { email, password });
      console.log("Server response:", response.data); 
      return response.data; 
    } catch (error) {
      console.error("Login failed:", error); 
      throw new Error("Login failed. Please check your email and password.");
    }
  },
};

export default LoginService;
