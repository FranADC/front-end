import "./Registro.css";
import React, { useState } from "react";

const Register = () => {
  const [emailUsuario, setEmailUsuario] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [passUsuario, setPassword] = useState("");
  const [passCheck, setPassCheck] = useState("");

  const [erroresFiltros, setErroresFiltros] = useState("");

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
          passCheck,
        }),
        credentials: "include", //cookies
      });

      console.log(response);

      if (response.ok) {
        const data = await response.text();
        alert(data);
        window.location.href = "/login";
        setEmailUsuario("");
        setNombreUsuario("");
        setPassword("");
        setPassCheck("");
        setErroresFiltros("");
      } else {
        const data = await response.json();
        setErroresFiltros(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="divBody">
      <div className="divRegistro">
        <h2>Registrarse</h2>
        <div>
          <label htmlFor="nombreRegistro" className="tiamat">
            Nombre usuario
          </label>
          <input
            type="text"
            name="nombreRegistro"
            value={nombreUsuario}
            placeholder="Se permiten letras y numeros"
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
          <label htmlFor="nombreRegistro" className="textError">
            {typeof erroresFiltros.errNombreUsuario !== "undefined"
              ? erroresFiltros.errNombreUsuario
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="emailRegistro" className="tiamat">
            Email
          </label>
          <input
            type="text"
            name="emailRegistro"
            value={emailUsuario}
            onChange={(e) => setEmailUsuario(e.target.value)}
          />
          <label htmlFor="emailRegistro" className="textError">
            {typeof erroresFiltros.errEmailUsuario !== "undefined"
              ? erroresFiltros.errEmailUsuario
              : ""}
          </label>
        </div>
        <div className="divPass">
          <label htmlFor="passRegistro" className="tiamat">
            Contraseña
          </label>
          <input
            type="password"
            name="passRegistro"
            placeholder="Se permiten letras, numeros y guiones"
            value={passUsuario}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="passCheck" className="tiamat">
            Repite la contraseña
          </label>
          <input
            type="password"
            name="passCheck"
            placeholder="Se permiten letras, numeros y guiones"
            value={passCheck}
            onChange={(e) => setPassCheck(e.target.value)}
          />
          <label htmlFor="passCheck" className="textError">
            {typeof erroresFiltros.errPassUsuario !== "undefined"
              ? erroresFiltros.errPassUsuario
              : ""}
          </label>
        </div>
        <div className="divBoton">
          <input type="button" value="Registrar" onClick={handleRegister} />
        </div>
      </div>
    </div>
  );
};

export default Register;
