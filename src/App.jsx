import { useState, useEffect } from "react";
import "./App.css";
//router
import {
  BrowserRouter,
  Routes,
  Route,
  json,
  useParams,
} from "react-router-dom";
//Componentes
import CompoHeader from "./components/Header";
import CompoFooter from "./components/Footer";
import CompoConjuros from "./components/Conjuros";
import CompoConjuroID from "./components/ConjuroID";
import CompoConjuroAdd from "./components/ConjuroAdd";
import CompoConjuroUpdate from "./components/ConjuroUpdate";
import CompoRegistro from "./components/Registro";
import CompoLogin from "./components/Login";

import CompoErrorRegistro from "./components/ErrorRegistro";
import CompoError404 from "./components/Error404";

function App() {
  const rolesGenerales = [1, 2];
  const roleAdmin = [1];

  const [sesion, setSesion] = useState(false);
  const [usuario, setUsuario] = useState(undefined);

  useEffect(() => {
    async function checkSession() {
      try {
        const peticion = await fetch("http://localhost:3000/check-sesion", {
          credentials: "include",
        });
        if (!peticion.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await peticion.json();
        setSesion(data.authenticated);
        setUsuario(data.user);
      } catch (err) {
        console.log(err);
      }
    }
    checkSession();
  }, []);
  return (
    <BrowserRouter>
      <CompoHeader usuario={usuario} />
      <Routes>
        <Route path="/registrarse" element={<CompoRegistro />} />
        <Route path="/login" element={<CompoLogin />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/conjuros"
          element={
            sesion && rolesGenerales.includes(usuario.rol) ? (
              <CompoConjuros />
            ) : (
              <CompoErrorRegistro />
            )
          }
        />
        <Route
          path="/conjuros/:ID"
          element={
            sesion && rolesGenerales.includes(usuario.rol) ? (
              <CompoConjuroID />
            ) : (
              <CompoErrorRegistro />
            )
          }
        />
        <Route
          path="/conjuros/añadir"
          element={
            sesion && roleAdmin.includes(usuario.rol) ? (
              <CompoConjuroAdd />
            ) : (
              <CompoError404 />
            )
          }
        />
        <Route
          path="/conjuros/modificar/:ID"
          element={<CompoConjuroUpdate />}
        />
      </Routes>
      <CompoFooter />
    </BrowserRouter>
  );
}

function Home() {
  return <p>Hola mundo</p>;
}

export default App;
