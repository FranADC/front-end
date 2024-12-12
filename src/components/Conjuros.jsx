import "./conjuros.css";
import { useState, useEffect } from "react";

export default function ({ usuario }) {
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
  const [filtroClaseMagia, setFiltroClaseMagia] = useState("");

  let [orderBy, setOrderBy] = useState("");
  let [order, setOrder] = useState("");

  const [paginaActual, setPaginaActual] = useState(1);
  const [maxPaginacion, setMaxPaginacion] = useState();

  const [dbEscuelasMagia, setDbEscuelasMagia] = useState([]);
  const [dbTiemposLanzamiento, setDbTiemposLanzamiento] = useState([]);
  const [dbAlcanceLanzamiento, setDbAlcanceLanzamiento] = useState([]);
  const [dbClasesMagia, setDbClasesMagia] = useState([]);
  const [dbNivelesMagia, setDbNivelesMagia] = useState([]);

  const [dbConjuros, setDbConjuros] = useState([]);

  const [erroresFiltros, setErroresFiltros] = useState("");

  useEffect(() => {
    async function fetchEscuelas() {
      try {
        const peticion = await fetch("http://localhost:3000/escuelasMagia", {
          credentials: "include",
        });
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
          "http://localhost:3000/tiemposLanzamiento",
          {
            credentials: "include",
          }
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
          "http://localhost:3000/alcancesLanzamiento",
          {
            credentials: "include",
          }
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

    async function fetchClase() {
      try {
        const peticion = await fetch("http://localhost:3000/clasesMagia", {
          credentials: "include",
        });
        if (!peticion.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await peticion.json();

        setDbClasesMagia(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchClase();

    async function fetchNivel() {
      try {
        const peticion = await fetch("http://localhost:3000/nivelesMagia", {
          credentials: "include",
        });
        if (!peticion.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await peticion.json();

        setDbNivelesMagia(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchNivel();

    fetchConjurosCount();
  }, []);

  useEffect(() => {
    getConjuros();
  }, [paginaActual, orderBy, order]);

  async function fetchConjurosCount() {
    const filtros = getSearchParams();
    try {
      const peticion = await fetch(
        "http://localhost:3000/conjurosCount?" + filtros,
        {
          credentials: "include",
        }
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
      claseMagia: filtroClaseMagia,
      orderBy,
      order,
    }).toString();
  }

  async function getConjuros() {
    const filtros = getSearchParams();

    try {
      const peticion = await fetch(
        "http://localhost:3000/conjuros?" + filtros,
        {
          credentials: "include",
        }
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
  }
  return (
    <>
      {console.log("a")}

      <div className="divBody">
        <form className="formsConjurosFiltro" id="formsConjurosFiltro">
          <h2>Filtros</h2>
          <div className="filaFormPricipal">
            <div>
              <label htmlFor="nombreConjuro" className="tiamat">
                Nombre conjuro
              </label>
              <input
                type="text"
                name="nombreConjuro"
                id="nombreConjuro"
                onChange={(e) => {
                  setFiltroNombreConjuro(e.target.value);
                }}
              />
              <label htmlFor="nombreConjuro" className="textError">
                {typeof erroresFiltros.errNombreConjuro !== "undefined"
                  ? erroresFiltros.errNombreConjuro
                  : ""}
              </label>
            </div>

            <div>
              <label htmlFor="nivelConjuro" className="tiamat">
                Nivel conjuro
              </label>
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
                {dbNivelesMagia.map((nivel) => (
                  <option key={nivel.id_nivel} value={nivel.id_nivel}>
                    {nivel.nombre_nivel}
                  </option>
                ))}
              </select>
              <label htmlFor="nivelConjuro" className="textError">
                {typeof erroresFiltros.errNivelConjuro !== "undefined"
                  ? erroresFiltros.errNivelConjuro
                  : ""}
              </label>
            </div>

            <div>
              <label htmlFor="escuelaMagia" className="tiamat">
                Escuela magia
              </label>
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
                  <option key={escuela.id_escuela} value={escuela.id_escuela}>
                    {escuela.nombre_escuela}
                  </option>
                ))}
              </select>
              <label htmlFor="escuelaMagia" className="textError">
                {typeof erroresFiltros.errEscuelaMagia !== "undefined"
                  ? erroresFiltros.errEscuelaMagia
                  : ""}
              </label>
            </div>

            <div>
              <label htmlFor="tiempoLanzamiento" className="tiamat">
                Tiempo lanzamiento
              </label>
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
              <label htmlFor="tiempoLanzamiento" className="textError">
                {typeof erroresFiltros.errTiempoLanzamiento !== "undefined"
                  ? erroresFiltros.errTiempoLanzamiento
                  : ""}
              </label>
            </div>

            <div>
              {" "}
              <label htmlFor="alcanceLanzamiento" className="tiamat">
                Alcance lanzamiento
              </label>
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
              <label htmlFor="alcanceLanzamiento" className="textError">
                {typeof erroresFiltros.errAlcanceLanzamiento !== "undefined"
                  ? erroresFiltros.errAlcanceLanzamiento
                  : ""}
              </label>
            </div>

            <div>
              <label htmlFor="claseMagia" className="tiamat">
                Clase magica
              </label>
              <select
                name="claseMagia"
                id="claseMagia"
                onChange={(e) => {
                  setFiltroClaseMagia(e.target.value);
                }}
              >
                <option value="" defaultValue>
                  -
                </option>
                {dbClasesMagia.map((clase) => (
                  <option key={clase.id_clase} value={clase.id_clase}>
                    {clase.nombre_clase}
                  </option>
                ))}
              </select>
              <label htmlFor="claseMagia" className="textError">
                {typeof erroresFiltros.errclaseMagia !== "undefined"
                  ? erroresFiltros.errclaseMagia
                  : ""}
              </label>
            </div>

            <div>
              <label htmlFor="concentracion" className="tiamat">
                Concentración
              </label>
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
              <label htmlFor="concentracion" className="textError">
                {typeof erroresFiltros.errConcentracion !== "undefined"
                  ? erroresFiltros.errConcentracion
                  : ""}
              </label>
            </div>

            <div>
              <label htmlFor="ritual" className="tiamat">
                Ritual
              </label>
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
              <label htmlFor="ritual" className="textError">
                {typeof erroresFiltros.errRitual !== "undefined"
                  ? erroresFiltros.errRitual
                  : ""}
              </label>
            </div>

            <div>
              <label htmlFor="somatico" className="tiamat">
                Somático
              </label>
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
              <label htmlFor="somatico" className="textError">
                {typeof erroresFiltros.errSomatico !== "undefined"
                  ? erroresFiltros.errSomatico
                  : ""}
              </label>
            </div>

            <div>
              <label htmlFor="verbal" className="tiamat">
                Verbal
              </label>
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
              <label htmlFor="verbal" className="textError">
                {typeof erroresFiltros.errVerbal !== "undefined"
                  ? erroresFiltros.errVerbal
                  : ""}
              </label>
            </div>

            <div>
              <label htmlFor="material" className="tiamat">
                Material
              </label>
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
              <label htmlFor="material" className="textError">
                {typeof erroresFiltros.errMaterial !== "undefined"
                  ? erroresFiltros.errMaterial
                  : ""}
              </label>
            </div>
          </div>
          <div className="filaFormSubmit">
            <input
              name="submit"
              type="submit"
              value="Aplicar filtros"
              onClick={(event) => {
                event.preventDefault();
                fetchConjurosCount();
                getConjuros();
              }}
            />
            <input
              type="submit"
              value="Reiniciar valores"
              onClick={(e) => {
                document.getElementById("formConjurosFiltro").reset();
              }}
            />
            {usuario.rol == 1 ? (
              <a className="boton" href="/conjuros/añadir">
                <input type="button" value="Añadir Conjuro" />
              </a>
            ) : (
              ""
            )}
          </div>
        </form>
        <div className="divTabla">
          {dbConjuros.length === 0 ? (
            <p>No se han encontrado hechizos con esos filtros.</p>
          ) : (
            <>
              <div className="divTabla">
                <div className="filaTabla">
                  <div className="filaSuperior">
                    <div className="filaImagen"></div>
                    <div
                      className="filaNombre iconoOrder"
                      onClick={(e) => {
                        document.getElementById("orderNivel").src =
                          "/imagenes/iconos/flecha-vertical.svg";
                        document.getElementById("orderEscuela").src =
                          "/imagenes/iconos/flecha-vertical.svg";
                        document.getElementById("orderTiempo").src =
                          "/imagenes/iconos/flecha-vertical.svg";
                        if (orderBy != "nombre_conjuro") {
                          setOrderBy("nombre_conjuro");
                          setOrder("ASC");
                          document.getElementById("orderNombre").src =
                            "/imagenes/iconos/flecha-arriba.svg";
                        } else {
                          if (order == "ASC") {
                            setOrder("DESC");
                            document.getElementById("orderNombre").src =
                              "/imagenes/iconos/flecha-abajo.svg";
                          } else {
                            setOrderBy("");
                            setOrder("");
                            document.getElementById("orderNombre").src =
                              "/imagenes/iconos/flecha-vertical.svg";
                          }
                        }
                      }}
                    >
                      <p className="tiamat">Nombre</p>
                      <img
                        id="orderNombre"
                        src="/imagenes/iconos/flecha-vertical.svg"
                      />
                    </div>
                    <div
                      className="filaNivel iconoOrder"
                      onClick={(e) => {
                        document.getElementById("orderNombre").src =
                          "/imagenes/iconos/flecha-vertical.svg";
                        document.getElementById("orderEscuela").src =
                          "/imagenes/iconos/flecha-vertical.svg";
                        document.getElementById("orderTiempo").src =
                          "/imagenes/iconos/flecha-vertical.svg";
                        if (orderBy != "nivel_conjuro") {
                          setOrderBy("nivel_conjuro");
                          setOrder("ASC");
                          document.getElementById("orderNivel").src =
                            "/imagenes/iconos/flecha-arriba.svg";
                        } else {
                          if (order == "ASC") {
                            setOrder("DESC");
                            document.getElementById("orderNivel").src =
                              "/imagenes/iconos/flecha-abajo.svg";
                          } else {
                            setOrderBy("");
                            setOrder("");
                            document.getElementById("orderNivel").src =
                              "/imagenes/iconos/flecha-vertical.svg";
                          }
                        }
                      }}
                    >
                      <p className="tiamat">Nivel</p>
                      <img
                        id="orderNivel"
                        src="/imagenes/iconos/flecha-vertical.svg"
                      />
                    </div>
                    <div
                      className="filaEscuela iconoOrder"
                      onClick={(e) => {
                        document.getElementById("orderNombre").src =
                          "/imagenes/iconos/flecha-vertical.svg";
                        document.getElementById("orderNivel").src =
                          "/imagenes/iconos/flecha-vertical.svg";
                        document.getElementById("orderTiempo").src =
                          "/imagenes/iconos/flecha-vertical.svg";
                        if (orderBy != "escuela_magia") {
                          setOrderBy("escuela_magia");
                          setOrder("ASC");
                          document.getElementById("orderEscuela").src =
                            "/imagenes/iconos/flecha-arriba.svg";
                        } else {
                          if (order == "ASC") {
                            setOrder("DESC");
                            document.getElementById("orderEscuela").src =
                              "/imagenes/iconos/flecha-abajo.svg";
                          } else {
                            setOrderBy("");
                            setOrder("");
                            document.getElementById("orderEscuela").src =
                              "/imagenes/iconos/flecha-vertical.svg";
                          }
                        }
                      }}
                    >
                      <p className="tiamat">Escuela</p>
                      <img
                        id="orderEscuela"
                        src="/imagenes/iconos/flecha-vertical.svg"
                      />
                    </div>
                    <div
                      className="filaTiempo iconoOrder"
                      onClick={(e) => {
                        document.getElementById("orderNombre").src =
                          "/imagenes/iconos/flecha-vertical.svg";
                        document.getElementById("orderNivel").src =
                          "/imagenes/iconos/flecha-vertical.svg";
                        document.getElementById("orderEscuela").src =
                          "/imagenes/iconos/flecha-vertical.svg";
                        if (orderBy != "tiempo_lanz") {
                          setOrderBy("tiempo_lanz");
                          setOrder("ASC");
                          document.getElementById("orderTiempo").src =
                            "/imagenes/iconos/flecha-arriba.svg";
                        } else {
                          if (order == "ASC") {
                            setOrder("DESC");
                            document.getElementById("orderTiempo").src =
                              "/imagenes/iconos/flecha-abajo.svg";
                          } else {
                            setOrderBy("");
                            setOrder("");
                            document.getElementById("orderTiempo").src =
                              "/imagenes/iconos/flecha-vertical.svg";
                          }
                        }
                      }}
                    >
                      <p className="tiamat">Tiempo de lanzamiento</p>
                      <img
                        id="orderTiempo"
                        src="/imagenes/iconos/flecha-vertical.svg"
                      />
                    </div>
                    <div className="filaRangoAlcance">
                      <p className="tiamat">Rango/Area</p>
                    </div>
                    <div className="filaComponentes">
                      <p className="tiamat">Componentes</p>
                    </div>
                    <div className="filaBoton"></div>
                  </div>
                </div>
                {dbConjuros.map((conjuro) => (
                  <div className="filaTabla" key={"key" + conjuro.id_conjuro}>
                    <div className="filaSuperior filaHover">
                      <div className="filaImagen">
                        <img
                          src={"http://localhost:3000" + conjuro.imagen_conjuro}
                          alt=""
                          className="miniaturaConjuro"
                        />
                      </div>
                      <div className="filaNombre">
                        <p>{conjuro.nombre_conjuro}</p>
                        {conjuro.concentracion == 1 ? (
                          <img src="/imagenes/iconos/concetracion.png" alt="" />
                        ) : (
                          ""
                        )}
                        {conjuro.ritual == 1 ? (
                          <img src="/imagenes/iconos/ritual.png" alt="" />
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="filaNivel">
                        <p>{conjuro.nombre_nivel}</p>
                      </div>
                      <div className="filaEscuela">
                        <p>{conjuro.nombre_escuela}</p>
                      </div>
                      <div className="filaTiempo">
                        <p>{conjuro.nombre_tiempo}</p>
                      </div>
                      <div className="filaRangoAlcance">
                        <p>{conjuro.rango_area}</p>
                      </div>
                      <div className="filaComponentes">
                        <p>
                          {conjuro.somatico == 1 ? " S " : ""}
                          {conjuro.verbal == 1 ? " V " : ""}
                          {conjuro.material == 1 ? " M " : ""}
                        </p>
                      </div>
                      <div
                        className="filaBoton"
                        onClick={() => {
                          const estado = document.getElementById(
                            "filaInferior" + conjuro.id_conjuro
                          ).style.display;
                          if (estado == "none") {
                            document.getElementById(
                              "filaInferior" + conjuro.id_conjuro
                            ).style.display = "flex";
                            document.getElementById(
                              "botonTabla" + conjuro.id_conjuro
                            ).src = "/imagenes/iconos/restar.svg";
                          } else {
                            document.getElementById(
                              "filaInferior" + conjuro.id_conjuro
                            ).style.display = "none";
                            document.getElementById(
                              "botonTabla" + conjuro.id_conjuro
                            ).src = "/imagenes/iconos/sumar.svg";
                          }
                        }}
                      >
                        <img
                          id={"botonTabla" + conjuro.id_conjuro}
                          src={"/imagenes/iconos/sumar.svg"}
                          alt=""
                          className="miniaturaConjuro"
                        />
                      </div>
                    </div>
                    <div
                      style={{ display: "none" }}
                      className="filaInferior"
                      id={"filaInferior" + conjuro.id_conjuro}
                    >
                      <div>
                        <p className="tiamat">Nivel</p>
                        <p>{conjuro.nombre_nivel}</p>
                      </div>
                      <div>
                        <p className="tiamat">Escuela</p>
                        <p>{conjuro.nombre_escuela}</p>
                      </div>
                      <div>
                        <p className="tiamat">Tiempo de lanzamiento</p>
                        <p>{conjuro.nombre_tiempo}</p>
                      </div>
                      <div>
                        <p className="tiamat">Rango/Area</p>
                        <p>{conjuro.rango_area}</p>
                      </div>
                      <div>
                        <p className="tiamat">Componentes</p>
                        <p>
                          {conjuro.somatico == 1 ? " S " : ""}
                          {conjuro.verbal == 1 ? " V " : ""}
                          {conjuro.material == 1
                            ? " M(" + conjuro.material_desc + ")"
                            : ""}
                        </p>
                      </div>
                      <div>
                        <p className="textoDescCorta">{conjuro.desc_corta}</p>
                      </div>
                      <div className="filaInferiorBotones">
                        <a href={"/conjuros/" + conjuro.id_conjuro}>
                          <input type="button" value="Ver mas" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="divPaginacion">
          <div>
            {paginaActual - 1 > 1 && (
              <img
                src="/imagenes/iconos/doble-flecha-izquierda.svg"
                alt=""
                className="imgIconoPaginacion"
                onClick={(event) => {
                  setPaginaActual(1);
                }}
              />
            )}
          </div>
          <div>
            {paginaActual - 1 >= 1 && (
              <img
                src="/imagenes/iconos/flecha-izquierda.svg"
                alt=""
                className="imgIconoPaginacion"
                onClick={(event) => {
                  setPaginaActual(paginaActual - 1);
                }}
              />
            )}
          </div>
          <div>
            <p className="textoPaginacion tiamat">
              {paginaActual + "/" + maxPaginacion}
            </p>
          </div>
          <div>
            {paginaActual + 1 <= maxPaginacion && (
              <img
                src="/imagenes/iconos/flecha-derecha.svg"
                alt=""
                className="imgIconoPaginacion"
                onClick={(event) => {
                  setPaginaActual(paginaActual + 1);
                }}
              />
            )}
          </div>
          <div>
            {paginaActual + 1 < maxPaginacion && (
              <img
                src="/imagenes/iconos/doble-flecha-derecha.svg"
                alt=""
                className="imgIconoPaginacion"
                onClick={(event) => {
                  setPaginaActual(maxPaginacion);
                }}
              />
            )}
          </div>
        </div>
      </div>
      <p></p>
    </>
  );
}
