import React, { useState } from "react";

const Login = () => {
  const [identicador, setIdenticador] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          identicador,
          password,
        }),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.text();
        window.location.href = "/";
      } else {
        alert("Error al iniciar sesión");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuario o correo"
        value={identicador}
        onChange={(e) => setIdenticador(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
