import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/admin");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-zinc-950 text-white">
      <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded-2xl border border-white/10 w-96">
        <h2 className="text-2xl mb-6 font-bold">Admin Login</h2>
        <input 
          type="email" placeholder="Email" 
          className="w-full p-3 mb-4 bg-zinc-800 rounded outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" placeholder="Password" 
          className="w-full p-3 mb-6 bg-zinc-800 rounded outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;