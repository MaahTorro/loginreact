import './App.css';
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Realiza a validação do usuário e senha aqui
  };

  return (
    
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label className="login-label">
          Email:
          <input
            type="email"
            value={email}
            placeholder="Exemplo: fulano@gmail.com"
            onChange={(event) => setEmail(event.target.value)}
            className="login-input"
          />
        </label>
        <label className="login-label">
          Password:
          <input
            type="password"
            value={password}
            placeholder="Senha"
            onChange={(event) => setPassword(event.target.value)}
            className="login-input"
          />
        </label>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
