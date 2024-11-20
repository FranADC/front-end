import { useState, useEffect } from "react";

export default function () {
  const [filtroNombreConjuro, setFiltroNombreConjuro] = useState("");
  const [filtroNivelConjuro, setFiltroNivelConjuro] = useState("");
  const [filtroEscuelaMagia, setFiltroEscuelaMagia] = useState("");
  const [filtroTiempoLanzamiento, setFiltroTiempoLanzamiento] = useState("");
  const [filtroAlcanceLanzamiento, setFiltroAlcanceLanzamiento] = useState("");
  const [filtroSomatico, setFiltroSomatico] = useState("");
  const [filtroVerbal, setFiltroVerbal] = useState("");
  const [filtroMaterial, setFiltroMaterial] = useState("");
  const [filtroConcentracion, setFiltroConcentracion] = useState("");
  const [filtroRitual, setFiltroRitual] = useState("");
  let [orderBy, setOrderBy] = useState("");
  let [order, setOrder] = useState("");

  const [paginaActual, setPaginaActual] = useState(1);
  const [maxPaginacion, setMaxPaginacion] = useState();

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

    fetchConjurosCount();
  }, []);

  useEffect(() => {
    getConjuros();
  }, [paginaActual, orderBy, order]);

  async function fetchConjurosCount() {
    const filtros = getSearchParams();
    try {
      const peticion = await fetch(
        "http://localhost:3000/conjurosCount?" + filtros
      );
      if (!peticion.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await peticion.json();
      setMaxPaginacion(data);
    } catch (err) {
      console.log(err);
    }
  }

  function getSearchParams() {
    return new URLSearchParams({
      nombreConjuro: filtroNombreConjuro,
      nivelConjuro: filtroNivelConjuro,
      escuelaMagia: filtroEscuelaMagia,
      tiempoLanzamiento: filtroTiempoLanzamiento,
      alcanceLanzamiento: filtroAlcanceLanzamiento,
      somatico: filtroSomatico,
      verbal: filtroVerbal,
      material: filtroMaterial,
      concentracion: filtroConcentracion,
      ritual: filtroRitual,
      pagina: paginaActual,
      orderBy,
      order,
    }).toString();
  }

  async function getConjuros() {
    const filtros = getSearchParams();

    try {
      const peticion = await fetch("http://localhost:3000/conjuros?" + filtros);
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
  }
  return (
    <>
      <form id="formsConjurosFiltro">
        <div>
          <label htmlFor="nombreConjuro">Nombre conjuro</label>
          <input
            type="text"
            name="nombreConjuro"
            id="nombreConjuro"
            onChange={(e) => {
              setFiltroNombreConjuro(e.target.value);
            }}
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
            onChange={(e) => {
              setFiltroNivelConjuro(e.target.value);
            }}
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
            onChange={(e) => {
              setFiltroEscuelaMagia(e.target.value);
            }}
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
            onChange={(e) => {
              setFiltroTiempoLanzamiento(e.target.value);
            }}
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
          {" "}
          <label htmlFor="alcanceLanzamiento">Alcance lanzamiento</label>
          <select
            name="alcanceLanzamiento"
            id="alcanceLanzamiento"
            onChange={(e) => {
              setFiltroAlcanceLanzamiento(e.target.value);
            }}
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
          <label htmlFor="somatico">somático</label>
          <select
            name="somatico"
            id="somatico"
            onChange={(e) => {
              setFiltroSomatico(e.target.value);
            }}
          >
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
          <select
            name="verbal"
            id="verbal"
            onChange={(e) => {
              setFiltroVerbal(e.target.value);
            }}
          >
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
          <select
            name="material"
            id="material"
            onChange={(e) => {
              setFiltroMaterial(e.target.value);
            }}
          >
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
          <select
            name="concentracion"
            id="concentracion"
            onChange={(e) => {
              setFiltroConcentracion(e.target.value);
            }}
          >
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
          <select
            name="ritual"
            id="ritual"
            onChange={(e) => {
              setFiltroRitual(e.target.value);
            }}
          >
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
        <input
          name="submit"
          type="submit"
          value="submit"
          onClick={(event) => {
            event.preventDefault();
            fetchConjurosCount();
            getConjuros();
          }}
        />
        <input
          type="submit"
          value="reset"
          onClick={(e) => {
            document.getElementById("formConjurosFiltro").reset();
          }}
        />
      </form>
      {dbConjuros.length === 0 ? (
        <p>No se han encontrado hechizos con esos filtros.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>
                <button>Imagen</button>
              </th>
              <th>
                <button
                  onClick={(e) => {
                    if (orderBy != "nombre_conjuro") {
                      setOrderBy("nombre_conjuro");
                      setOrder("ASC");
                    } else {
                      if (order == "ASC") {
                        setOrder("DESC");
                      } else {
                        setOrderBy("");
                        setOrder("");
                      }
                    }
                  }}
                >
                  Nombre
                </button>
              </th>
              <th>
                <button
                  onClick={(e) => {
                    if (orderBy != "nivel_conjuro") {
                      setOrderBy("nivel_conjuro");
                      setOrder("ASC");
                    } else {
                      if (order == "ASC") {
                        setOrder("DESC");
                      } else {
                        setOrderBy("");
                        setOrder("");
                      }
                    }
                  }}
                >
                  Nivel
                </button>
              </th>
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
                  <a href={"/conjuros/" + conjuro.id_conjuro}>
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

      {paginaActual - 1 > 1 && (
        <button
          onClick={(event) => {
            setPaginaActual(1);
          }}
        >
          Primero
        </button>
      )}
      {paginaActual - 1 >= 1 && (
        <button
          onClick={(event) => {
            setPaginaActual(paginaActual - 1);
          }}
        >
          Anterior
        </button>
      )}
      <button>{paginaActual}</button>
      {paginaActual + 1 <= maxPaginacion && (
        <button
          onClick={(event) => {
            setPaginaActual(paginaActual + 1);
          }}
        >
          siguiente
        </button>
      )}
      {paginaActual + 1 < maxPaginacion && (
        <button
          onClick={(event) => {
            setPaginaActual(maxPaginacion);
          }}
        >
          Ultima
        </button>
      )}

      <p>{maxPaginacion}</p>
    </>
  );
}
