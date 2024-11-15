//import "./Header.css";
import { useState, useEffect } from "react";

export default function () {
  const [dbEscuelasMagia, setDbEscuelasMagia] = useState([]);
  const [dbTiemposLanzamiento, setDbTiemposLanzamiento] = useState([]);
  const [dbAlcanceLanzamiento, setDbAlcanceLanzamiento] = useState([]);
  const [dbConjuros, setDbConjuros] = useState([]);
  const [erroresFiltros, setErroresFiltros] = useState("");
  //Crea un objeto con su proio gette(dbMagia) y setter(setDbMagia)

  //cuando una variable sufre un cambio (la variable en []), se ejecuta el codigo del interior.
  useEffect(() => {
    async function fetchEscuelas() {
      try {
        const peticion = await fetch("http://localhost:3000/escuelasMagia");
        if (!peticion.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await peticion.json();
        setDbEscuelasMagia(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchEscuelas();

    async function fetchTiempos() {
      try {
        const peticion = await fetch(
          "http://localhost:3000/tiemposLanzamiento"
        );
        if (!peticion.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await peticion.json();
        setDbTiemposLanzamiento(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTiempos();

    async function fetchAlcance() {
      try {
        const peticion = await fetch(
          "http://localhost:3000/alcanceLanzamiento"
        );
        if (!peticion.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await peticion.json();
        setDbAlcanceLanzamiento(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAlcance();

    async function fetchConjuros() {
      try {
        const peticion = await fetch("http://localhost:3000/conjuros");
        if (!peticion.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await peticion.json();
        setDbConjuros(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchConjuros(); //ejecutar la funcion de arriba
  }, []); //[] para que se carge cuando se inicia la página

  const filtrosConjuros = async (event) => {
    event.preventDefault();

    const filtros = new URLSearchParams({
      nombreConjuro: event.target.nombreConjuro.value,
      nivelConjuro: event.target.nivelConjuro.value,
      escuelaMagia: event.target.escuelaMagia.value,
      tiempoLanzamiento: event.target.tiempoLanzamiento.value,
      alcanceLanzamiento: event.target.alcanceLanzamiento.value,
      somatico: event.target.somatico.value,
      verbal: event.target.verbal.value,
      material: event.target.material.value,
      concentracion: event.target.concentracion.value,
      ritual: event.target.ritual.value,
    });

    try {
      const peticion = await fetch(
        "http://localhost:3000/conjuros?" + filtros.toString()
      );
      const data = await peticion.json();
      if (!peticion.ok) {
        setErroresFiltros(data);
        throw new Error("Network response was not ok");
      } else {
        setErroresFiltros("");
        setDbConjuros(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form id="formFiltrosConjuros" onSubmit={filtrosConjuros}>
        <div>
          <label htmlFor="nombreConjuro">Nombre conjuro</label>
          <input type="text" name="nombreConjuro" id="nombreConjuro" />
          <label htmlFor="nombreConjuro">
            {typeof erroresFiltros.errNombreConjuro !== "undefined"
              ? erroresFiltros.errNombreConjuro
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="nivelConjuro">Nivel conjuro</label>
          <select name="nivelConjuro" id="nivelConjuro">
            <option value="" defaultValue>
              -
            </option>
            <option value="0">Trucos</option>
            <option value="1">Nivel 1</option>
            <option value="2">Nivel 2</option>
            <option value="3">Nivel 3</option>
            <option value="4">Nivel 4</option>
            <option value="5">Nivel 5</option>
            <option value="6">Nivel 6</option>
          </select>
          <label htmlFor="nivelConjuro">
            {typeof erroresFiltros.errNivelConjuro !== "undefined"
              ? erroresFiltros.errNivelConjuro
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="escuelaMagia">Escuela magia</label>
          <select name="escuelaMagia" id="escuelaMagia">
            <option value="" defaultValue>
              -
            </option>
            {dbEscuelasMagia.map((escuela) => (
              <option key={escuela.id_clase} value={escuela.id_clase}>
                {escuela.nombre_escuela}
              </option>
            ))}
          </select>
          <label htmlFor="escuelaMagia">
            {typeof erroresFiltros.errEscuelaMagia !== "undefined"
              ? erroresFiltros.errEscuelaMagia
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="tiempoLanzamiento">Tiempo lanzamiento</label>
          <select name="tiempoLanzamiento" id="tiempoLanzamiento">
            <option value="" defaultValue>
              -
            </option>
            {dbTiemposLanzamiento.map((tiempos) => (
              <option key={tiempos.id_tiempo} value={tiempos.id_tiempo}>
                {tiempos.nombre_tiempo}
              </option>
            ))}
          </select>
          <label htmlFor="tiempoLanzamiento">
            {typeof erroresFiltros.errTiempoLanzamiento !== "undefined"
              ? erroresFiltros.errTiempoLanzamiento
              : ""}
          </label>
        </div>
        <div>
          {" "}
          <label htmlFor="alcanceLanzamiento">Alcance lanzamiento</label>
          <select name="alcanceLanzamiento" id="alcanceLanzamiento">
            <option value="" defaultValue>
              -
            </option>
            {dbAlcanceLanzamiento.map((alcances) => (
              <option key={alcances.id_alcance} value={alcances.id_alcance}>
                {alcances.nombre_alcance}
              </option>
            ))}
          </select>
          <label htmlFor="alcanceLanzamiento">
            {typeof erroresFiltros.errAlcanceLanzamiento !== "undefined"
              ? erroresFiltros.errAlcanceLanzamiento
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="somatico">somático</label>
          <select name="somatico" id="somatico">
            <option value="" defaultValue>
              -
            </option>
            <option value="0">no presente</option>
            <option value="1">presente</option>
          </select>
          <label htmlFor="somatico">
            {typeof erroresFiltros.errSomatico !== "undefined"
              ? erroresFiltros.errSomatico
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="verbal">verbal</label>
          <select name="verbal" id="verbal">
            <option value="" defaultValue>
              -
            </option>
            <option value="0">no presente</option>
            <option value="1">presente</option>
          </select>
          <label htmlFor="verbal">
            {typeof erroresFiltros.errVerbal !== "undefined"
              ? erroresFiltros.errVerbal
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="material">material</label>
          <select name="material" id="material">
            <option value="" defaultValue>
              -
            </option>
            <option value="0">no presente</option>
            <option value="1">presente</option>
          </select>
          <label htmlFor="material">
            {typeof erroresFiltros.errMaterial !== "undefined"
              ? erroresFiltros.errMaterial
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="concentracion">concentración</label>
          <select name="concentracion" id="concentracion">
            <option value="" defaultValue>
              -
            </option>
            <option value="0">no presente</option>
            <option value="1">presente</option>
          </select>
          <label htmlFor="concentracion">
            {typeof erroresFiltros.errConcentracion !== "undefined"
              ? erroresFiltros.errConcentracion
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="ritual">ritual</label>
          <select name="ritual" id="ritual">
            <option value="" defaultValue>
              -
            </option>
            <option value="0">no presente</option>
            <option value="1">presente</option>
          </select>
          <label htmlFor="ritual">
            {typeof erroresFiltros.errRitual !== "undefined"
              ? erroresFiltros.errRitual
              : ""}
          </label>
        </div>
        <input name="submit" type="submit" value="submit" />
        <input
          type="submit"
          value="reset"
          onClick={(event) => {
            document.getElementById("formFiltrosConjuros").reset();
          }}
        />
      </form>
      {dbConjuros.length === 0 ? (
        <p>No se han encontrado hechizos con esos filtros.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Nivel</th>
              <th>Escuela</th>
              <th>Tiempo de lanzamiento</th>
              <th>Rango/Area</th>
              <th>Somático</th>
              <th>Verbal</th>
              <th>Material</th>
            </tr>
          </thead>
          <tbody>
            {dbConjuros.map((conjuro) => (
              <tr key={conjuro.id_conjuro}>
                <th>
                  <a href={"/magia/conjuros/" + conjuro.id_conjuro}>
                    <img src={conjuro.imagen_conjuro} alt="" />
                  </a>
                </th>
                <th>{conjuro.nombre_conjuro}</th>
                <th>{conjuro.nivel_conjuro}</th>
                <th>{conjuro.nombre_escuela}</th>
                <th>{conjuro.nombre_lanzamiento}</th>
                <th>{conjuro.rango_area}</th>
                <th>{conjuro.somatico}</th>
                <th>{conjuro.verbal}</th>
                <th>{conjuro.material}</th>
              </tr>

              /* Muestra aquí otros datos del usuario <div dangerouslySetInnerHTML={{ __html: conjuro.DescLarga }} />*/
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
