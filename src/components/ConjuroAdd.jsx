import { useState, useEffect } from "react";

export default function () {
  const [addNombreConjuro, setAddNombreConjuro] = useState("");
  const [addNivelConjuro, setAddNivelConjuro] = useState("");
  const [addEscuelaMagia, setAddEscuelaMagia] = useState("");
  const [addTiempoLanzamiento, setAddTiempoLanzamiento] = useState("");
  const [addAlcanceLanzamiento, setAddAlcanceLanzamiento] = useState("");
  const [addRangoArea, setAddRangoArea] = useState("");
  const [addSomatico, setAddSomatico] = useState("");
  const [addVerbal, setAddVerbal] = useState("");
  const [addMaterial, setAddMaterial] = useState("");
  const [addMaterialDesc, setAddMaterialDesc] = useState("");
  const [addDuracion, setAddDuracion] = useState("");
  const [addConcentracion, setAddConcentracion] = useState("");
  const [addRitual, setAddRitual] = useState("");
  const [addDescCorta, setAddDescCorta] = useState("");
  const [addDescLarga, setAddDescLarga] = useState("");
  const [addImagen, setAddImagen] = useState("");

  const [dbEscuelasMagia, setDbEscuelasMagia] = useState([]);
  const [dbTiemposLanzamiento, setDbTiemposLanzamiento] = useState([]);
  const [dbAlcanceLanzamiento, setDbAlcanceLanzamiento] = useState([]);

  const [dbConjuros, setDbConjuros] = useState([]);
  const [erroresFiltros, setErroresFiltros] = useState("");

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
  }, []);

  function formDataSubmit() {
    const formData = new FormData();
    formData.append("nombreConjuro", addNombreConjuro);
    formData.append("nivelConjuro", addNivelConjuro);
    formData.append("escuelaMagia", addEscuelaMagia);
    formData.append("tiempoLanzamiento", addTiempoLanzamiento);
    formData.append("alcanceLanzamiento", addAlcanceLanzamiento);
    formData.append("rangoArea", addRangoArea);
    formData.append("somatico", addSomatico);
    formData.append("verbal", addVerbal);
    formData.append("material", addMaterial);
    formData.append("materialDesc", addMaterialDesc);
    formData.append("duracion", addDuracion);
    formData.append("concentracion", addConcentracion);
    formData.append("ritual", addRitual);
    formData.append("descCorta", addDescCorta);
    formData.append("descLarga", addDescLarga);
    formData.append("imagen", addImagen);
    return formData;
  }

  return (
    <>
      <form id="formConjurosAdd">
        <div>
          <label htmlFor="nombreConjuro">Nombre conjuro</label>
          <input
            type="text"
            name="nombreConjuro"
            id="nombreConjuro"
            onChange={(e) => setAddNombreConjuro(e.target.value)}
          />
          <label htmlFor="nombreConjuro">
            {typeof erroresFiltros.errNombreConjuro !== "undefined"
              ? erroresFiltros.errNombreConjuro
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="nivelConjuro">Nivel conjuro</label>
          <select
            name="nivelConjuro"
            id="nivelConjuro"
            onChange={(e) => setAddNivelConjuro(e.target.value)}
          >
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
          <select
            name="escuelaMagia"
            id="escuelaMagia"
            onChange={(e) => setAddEscuelaMagia(e.target.value)}
          >
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
          <select
            name="tiempoLanzamiento"
            id="tiempoLanzamiento"
            onChange={(e) => setAddTiempoLanzamiento(e.target.value)}
          >
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
          <label htmlFor="alcanceLanzamiento">Alcance lanzamiento</label>
          <select
            name="alcanceLanzamiento"
            id="alcanceLanzamiento"
            onChange={(e) => setAddAlcanceLanzamiento(e.target.value)}
          >
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
          <label htmlFor="rangoArea">Rango / Area</label>
          <input
            type="text"
            name="rangoArea"
            id="rangoArea"
            onChange={(e) => setAddRangoArea(e.target.value)}
          />
          <label htmlFor="rangoArea">
            {typeof erroresFiltros.errAlcanceLanzamiento !== "undefined"
              ? erroresFiltros.errAlcanceLanzamiento
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="somatico">somático</label>
          <input
            type="checkbox"
            name="somatico"
            value="somatico"
            onChange={(e) => setAddSomatico(e.target.checked)}
          ></input>
          <label htmlFor="somatico">
            {typeof erroresFiltros.errSomatico !== "undefined"
              ? erroresFiltros.errSomatico
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="verbal">verbal</label>
          <input
            type="checkbox"
            name="verbal"
            value="verbal"
            onChange={(e) => setAddVerbal(e.target.checked)}
          ></input>
          <label htmlFor="verbal">
            {typeof erroresFiltros.errSomatico !== "undefined"
              ? erroresFiltros.errSomatico
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="material">material</label>
          <input
            type="checkbox"
            name="material"
            value="material"
            onChange={(e) => setAddMaterial(e.target.checked)}
          ></input>
          <label htmlFor="material">
            {typeof erroresFiltros.errSomatico !== "undefined"
              ? erroresFiltros.errSomatico
              : ""}
          </label>
        </div>
        <div id="divmaterialDesc">
          <label htmlFor="materialDesc">descricion material</label>
          <input
            type="text"
            name="materialDesc"
            id="materialDesc"
            onChange={(e) => setAddMaterialDesc(e.target.value)}
          />
          <label htmlFor="materialDesc">
            {typeof erroresFiltros.errNombreConjuro !== "undefined"
              ? erroresFiltros.errNombreConjuro
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="duracion">duracion</label>
          <input
            type="text"
            name="duracion"
            id="duracion"
            onChange={(e) => setAddDuracion(e.target.value)}
          />
          <label htmlFor="duracion">
            {typeof erroresFiltros.errAlcanceLanzamiento !== "undefined"
              ? erroresFiltros.errAlcanceLanzamiento
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="concentracion">concentración</label>
          <input
            type="checkbox"
            name="concentracion"
            value="concentracion"
            onChange={(e) => setAddConcentracion(e.target.checked)}
          ></input>
          <label htmlFor="concentracion">
            {typeof erroresFiltros.errSomatico !== "undefined"
              ? erroresFiltros.errSomatico
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="ritual">ritual</label>
          <input
            type="checkbox"
            name="ritual"
            value="ritual"
            onChange={(e) => setAddRitual(e.target.checked)}
          ></input>
          <label htmlFor="ritual">
            {typeof erroresFiltros.errSomatico !== "undefined"
              ? erroresFiltros.errSomatico
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="descCorta">descCorta</label>
          <textarea
            id="descCorta"
            name="descCorta"
            rows="4"
            cols="50"
            onChange={(e) => setAddDescCorta(e.target.value)}
          ></textarea>
          <label htmlFor="descCorta">
            {typeof erroresFiltros.errAlcanceLanzamiento !== "undefined"
              ? erroresFiltros.errAlcanceLanzamiento
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="descLarga">descLarga</label>
          <textarea
            id="descLarga"
            name="descLarga"
            rows="4"
            cols="50"
            onChange={(e) => setAddDescLarga(e.target.value)}
          ></textarea>
          <label htmlFor="descLarga">
            {typeof erroresFiltros.errAlcanceLanzamiento !== "undefined"
              ? erroresFiltros.errAlcanceLanzamiento
              : ""}
          </label>
        </div>
        <div>
          <input
            type="file"
            src=""
            alt=""
            onChange={(e) => setAddImagen(e.target.files[0])}
          />
        </div>

        <input
          name="submit"
          type="submit"
          value="submit"
          onClick={async (event) => {
            event.preventDefault();
            const data = formDataSubmit();
            const peticion = await fetch("http://localhost:3000/conjuros/add", {
              method: "POST",
              body: data,
            });
            const result = await peticion.json();
            console.log(result);
          }}
        />
        <input
          type="submit"
          value="reset"
          onClick={(e) => {
            document.getElementById("formConjurosAdd").reset();
          }}
        />
      </form>
    </>
  );
}
