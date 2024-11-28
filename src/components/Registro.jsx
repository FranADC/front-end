import React, { useState } from "react";

const Register = () => {
  const [emailUsuario, setEmailUsuario] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [passUsuario, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", //para encryptarlo
        },
        body: new URLSearchParams({
          //se usa para get pero tambien para post, en este caso se usa por el tema de encryptar
          emailUsuario,
          nombreUsuario,
          passUsuario,
        }),
        credentials: "include", //cookies
      });

      if (response.ok) {
        const data = await response.text();
        alert(data);
      } else {
        alert("Error al registrar");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <input
        type="text"
        placeholder="Email"
        value={emailUsuario}
        onChange={(e) => setEmailUsuario(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={nombreUsuario}
        onChange={(e) => setNombreUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={passUsuario}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
};

export default Register;
