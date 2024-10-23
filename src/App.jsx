import { useState, useEffect } from "react";
import "./App.css";
//router
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
//Componentes
import CompoHeader from "./components/Header";
import CompoFooter from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <CompoHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magia" element={<Magia />} />
        <Route path="/pagina2" element={<Pagina2 />} />
      </Routes>
      <CompoFooter />
    </BrowserRouter>
  );
}

function Home() {
  return <p>Hola mundo</p>;
}

function Magia() {
  const [dbMagia, setDbMagia] = useState([]); //Crea un objeto con su proio gette(dbMagia) y setter(setDbMagia)

  //cuando una variable sufre un cambio (la variable en []), se ejecuta el codigo del interior.
  useEffect(() => {
    async function fetchData() {
      try {
        const peticion = await fetch("http://localhost:3000/db");
        if (!peticion.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await peticion.json();
        setDbMagia(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []); //[] para que se carge cuando se inicia la página

  return (
    <>
      {dbMagia.length === 0 ? (
        <p>No hay usuarios disponibles.</p>
      ) : (
        dbMagia.map((hechizo) => (
          <div key={hechizo.ID}>
            <p>{hechizo.nombre}</p>
            {/* Muestra aquí otros datos del usuario */}
          </div>
        ))
      )}
    </>
  );
}

function Pagina2() {
  return <p>Pagina2</p>;
}

export default App;
