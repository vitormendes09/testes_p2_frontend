import { useState } from "react";
import authController from "../controllers/authController";
import { useRouter } from "next/router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const success = await authController.login(email, password);
    if (success) router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-3xl font-black">Seja bem-vindo!</h1>
      <h2 className="text-xl text-gray-500">efetue seu login de acesso</h2>
      <input placeholder="Usuário" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Acessar</button>
      <button onClick={() => router.push("/register")}>Registrar-se</button>
    </div>
  );
}