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

import CompoIndex from "./components/Index";
import CompoConjuros from "./components/Conjuros";
import CompoConjuroID from "./components/ConjuroID";
import CompoConjuroAdd from "./components/ConjuroAdd";
import CompoConjuroUpdate from "./components/ConjuroUpdate";
import CompoRegistro from "./components/Registro";
import CompoLogin from "./components/Login";
import CompoClases from "./components/Clases";
import CompoClaseBarbaro from "./components/ClaseBarbaro";
import CompoClaseBardo from "./components/ClaseBardo";
import CompoClaseBrujo from "./components/ClaseBrujo";
import CompoClaseClerigo from "./components/ClaseClerigo";
import CompoClaseDruida from "./components/ClaseDruida";
import CompoClaseExplorador from "./components/ClaseExplorador";
import CompoClaseGuerrero from "./components/ClaseGuerrero";
import CompoClaseHechicero from "./components/ClaseHechicero";
import CompoClaseMonje from "./components/ClaseMonje";
import CompoClasePaladin from "./components/ClasePaladin";
import CompoClasePicaro from "./components/ClasePicaro";

import CompoTransfondos from "./components/Transfondos";
import CompoRazas from "./components/Razas";

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
        <Route path="/" element={<CompoIndex />} />
        <Route
          path="/conjuros"
          element={
            sesion && rolesGenerales.includes(usuario.rol) ? (
              <CompoConjuros usuario={usuario} />
            ) : (
              <CompoErrorRegistro />
            )
          }
        />
        <Route
          path="/conjuros/:ID"
          element={
            sesion && rolesGenerales.includes(usuario.rol) ? (
              <CompoConjuroID usuario={usuario} />
            ) : (
              <CompoErrorRegistro />
            )
          }
        />
        <Route
          path="/conjuros/modificar/:ID"
          element={
            sesion && roleAdmin.includes(usuario.rol) ? (
              <CompoConjuroUpdate />
            ) : (
              <CompoError404 />
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
        <Route path="/error/404" element={<CompoError404 />} />
        <Route path="/clases" element={<CompoClases />} />
        <Route path="/clases/barbaro" element={<CompoClaseBarbaro />} />

        <Route path="/clases/barbaro" element={<CompoClaseBarbaro />} />
        <Route path="/clases/bardo" element={<CompoClaseBardo />} />
        <Route path="/clases/brujo" element={<CompoClaseBrujo />} />
        <Route path="/clases/clerigo" element={<CompoClaseClerigo />} />
        <Route path="/clases/druida" element={<CompoClaseDruida />} />
        <Route path="/clases/explorador" element={<CompoClaseExplorador />} />
        <Route path="/clases/guerrero" element={<CompoClaseGuerrero />} />
        <Route path="/clases/hechicero" element={<CompoClaseHechicero />} />
        <Route path="/clases/monje" element={<CompoClaseMonje />} />
        <Route path="/clases/paladin" element={<CompoClasePaladin />} />
        <Route path="/clases/picaro" element={<CompoClasePicaro />} />

        <Route path="/transfondos" element={<CompoTransfondos />} />
        <Route path="/razas" element={<CompoRazas />} />

        <Route path="*" element={<CompoError404 />} />
      </Routes>
      <CompoFooter />
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <div>Hola mundo</div>
    </>
  );
}

export default App;
