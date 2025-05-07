import { loginRequest } from "../utils/auth";


const authController = {
    async login(email: string, password: string): Promise<boolean> {
      try {
        await loginRequest(email, password);
        return true;
      } catch (e) {
        alert("Erro ao logar");
        return false;
      }
    },
    async register(name: string, email: string, password: string): Promise<boolean> {
      try {
        await fetch("http://localhost:3000/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
        return true;
      } catch (e) {
        alert("Erro ao registrar");
        return false;
      }
    },
  };
  
  export default authController;