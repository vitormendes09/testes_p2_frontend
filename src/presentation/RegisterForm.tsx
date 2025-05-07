import { useState } from "react";
import authController from "../controllers/authController";
import { useRouter } from "next/router";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    const success = await authController.register(name, email, password);
    if (success) router.push("/");
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-3xl font-black">Registrar-se</h1>
      <input placeholder="Nome" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Registrar</button>
      <button onClick={() => router.push("/")}>Voltar ao Login</button>
    </div>
  );
}