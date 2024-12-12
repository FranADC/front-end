import "./Login.css";
import React, { useState } from "react";

const Login = () => {
  const [identicador, setIdenticador] = useState("");
  const [password, setPassword] = useState("");

  const [erroresFiltros, setErroresFiltros] = useState("");

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
      const data = await response.text();
      if (response.ok) {
        setErroresFiltros("");

        window.location.href = "/";
      } else {
        setErroresFiltros(data);
        //alert("Error al iniciar sesión");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="divBody">
      {console.log(typeof erroresFiltros)}
      <div className="divLog">
        <h2>Iniciar sesión</h2>
        <div>
          <label htmlFor="nombreRegistro" className="tiamat">
            Usuario o correo
          </label>
          <input
            type="text"
            name="usuarioCorreo"
            value={identicador}
            onChange={(e) => setIdenticador(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contraseña" className="tiamat">
            Contraseña
          </label>
          <input
            type="password"
            name="contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="contraseña" className="textError">
            {erroresFiltros !== "" ? "Datos incorrectos" : ""}
          </label>
        </div>
        <div>
          <input type="button" value="Login" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
