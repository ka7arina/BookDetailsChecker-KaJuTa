import Api from "./Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginService = {
  /**
   * Sendet eine POST-Anfrage an /login mit Email und Password --> erhaltet Bearer-Token und User-Daten
   */
  login: async (email: string, password: string) => {
    try {
      const response = await Api.post("/login", { email, password });
      console.log("Server response:", response.data);

      const token = response.data.accessToken;
      const user = response.data.user;

      await AsyncStorage.setItem("accessToken", token);
      await AsyncStorage.setItem("userData", JSON.stringify(user));

      console.log("Access token saved in AsyncStorage.");
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Login failed. Please check your email and password.");
    }
  },
};

export default LoginService;
