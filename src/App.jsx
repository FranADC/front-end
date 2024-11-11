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

function App() {
  return (
    <BrowserRouter>
      <CompoHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magia" element={<Magia />} />
        <Route path="/magia/conjuros/:ID" element={<Conjuro />} />
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
        const peticion = await fetch("http://localhost:3000/conjuros");
        if (!peticion.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await peticion.json();
        setDbMagia(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData(); //ejecutar la funcion de arriba
  }, []); //[] para que se carge cuando se inicia la página

  return (
    <>
      {console.log(dbMagia)}
      {dbMagia.length === 0 ? (
        <p>No hay usuarios disponibles.</p>
      ) : (
        <table>
          <tr>
            <th>Nombre</th>
            <th>Nivel</th>
            <th>Escuela</th>
            <th>Tiempo de lanzamiento</th>
            <th>Rango/Area</th>
            <th>Somático</th>
            <th>Verbal</th>
            <th>Material</th>
          </tr>
          {dbMagia.map((conjuro) => (
            <tr>
              <th>
                <a href={"/magia/conjuros/" + conjuro.ID_conjuro}>
                  <img src={conjuro.Imagen_conjuro} alt="" />
                </a>
              </th>
              <th>{conjuro.Nombre_conjuro}</th>
              <th>{conjuro.Nivel_conjuro}</th>
              <th>{conjuro.Nombre_escuela}</th>
              <th>{conjuro.Nombre_lanzamiento}</th>
              <th>{conjuro.RangoArea}</th>
              <th>{conjuro.Somatico}</th>
              <th>{conjuro.Verbal}</th>
              <th>{conjuro.Material}</th>
            </tr>

            /* Muestra aquí otros datos del usuario <div dangerouslySetInnerHTML={{ __html: conjuro.DescLarga }} />*/
          ))}
        </table>
      )}
    </>
  );
}

function Conjuro() {
  const { ID } = useParams();

  const [dbConjuro, setDbConjuro] = useState([]);

  //cuando una variable sufre un cambio (la variable en []), se ejecuta el codigo del interior.`http://localhost:3000/conjuro/${ID}`
  useEffect(() => {
    async function fetchData() {
      try {
        const peticion = await fetch("http://localhost:3000/conjuro/" + ID);
        if (!peticion.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await peticion.json();
        setDbMagia(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData(); //ejecutar la funcion de arriba
  }, []); //[] para que se carge cuando se inicia la página
}

function Pagina2() {
  return <p>Pagina2</p>;
}

export default App;
