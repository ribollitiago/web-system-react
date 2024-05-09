import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Firebase";
import { toast } from "react-toastify";
import '../App.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/profile";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <i className='bx bx-user'></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i className='bx bx-lock-alt'></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" disabled={true} /> Salvar usuário
          </label>
          <a href="#">Recuperar senha?</a>
        </div>
        <button type="submit" className="btn" disabled={false}>
          Login
        </button>

        <div className="register-link">
          <p>
            Não possui conta? <a href="/register">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;