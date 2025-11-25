import "./ConjuroAdd.css";
import { useState, useEffect } from "react";
import Alert from "./Alert";

export default function () {
  const [alertOpen, setAlertOpen] = useState(false);

  const [addNombreConjuro, setAddNombreConjuro] = useState("");
  const [addNivelConjuro, setAddNivelConjuro] = useState("");
  const [addEscuelaMagia, setAddEscuelaMagia] = useState("");
  const [addTiempoLanzamiento, setAddTiempoLanzamiento] = useState("");
  const [addAlcanceLanzamiento, setAddAlcanceLanzamiento] = useState("");
  const [addRangoArea, setAddRangoArea] = useState("");
  const [addSomatico, setAddSomatico] = useState("false");
  const [addVerbal, setAddVerbal] = useState("false");
  const [addMaterial, setAddMaterial] = useState("false");
  const [addMaterialDesc, setAddMaterialDesc] = useState("");
  const [addDuracion, setAddDuracion] = useState("");
  const [addConcentracion, setAddConcentracion] = useState("");
  const [addRitual, setAddRitual] = useState("");
  const [addDescCorta, setAddDescCorta] = useState("");
  const [addDescLarga, setAddDescLarga] = useState("");
  const [addBardo, setAddBardo] = useState("");
  const [addBrujo, setAddBrujo] = useState("");
  const [addClerigo, setAddClerigo] = useState("");
  const [addDruida, setAddDruida] = useState("");
  const [addExplorador, setAddExplorador] = useState("");
  const [addHechicero, setAddHechicero] = useState("");
  const [addMago, setAddMago] = useState("");
  const [addPaladin, setAddPaladin] = useState("");
  //const [addImagen, setAddImagen] = useState("");

  const [dbEscuelasMagia, setDbEscuelasMagia] = useState([]);
  const [dbTiemposLanzamiento, setDbTiemposLanzamiento] = useState([]);
  const [dbAlcanceLanzamiento, setDbAlcanceLanzamiento] = useState([]);
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
  }, []);

  function formDataSubmit(newFile) {
    const formData = new FormData(); //form data muchos campos, pesados(imagenes) y no permite codificación
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
    formData.append("bardo", addBardo);
    formData.append("brujo", addBrujo);
    formData.append("clerigo", addClerigo);
    formData.append("druida", addDruida);
    formData.append("explorador", addExplorador);
    formData.append("hechicero", addHechicero);
    formData.append("mago", addMago);
    formData.append("paladin", addPaladin);

    formData.append("imagen", newFile);
    return formData;
  }

  return (
    <>
      <Alert
        isOpen={alertOpen}
        setIsOpen={setAlertOpen}
        title="Añadir conjuro"
        text="Conjuro añadido de forma exitosa"
        href="/conjuros/añadir"
      />

      <div className="divBody">
        <form className="formConjurosAdd" id="formConjurosAdd">
          <div className="botonesMenu">
            <a href="/conjuros">
              <input type="button" value="Volver a conjuros" />
            </a>
          </div>
          <div className="filaForm">
            <h1>Añadir Conjuro</h1>
          </div>
          <div className="filaForm">
            <div className="divInputText">
              <label htmlFor="nombreConjuro">Nombre conjuro</label>
              <input
                type="text"
                name="nombreConjuro"
                id="nombreConjuro"
                onChange={(e) => setAddNombreConjuro(e.target.value)}
              />
              <label htmlFor="nombreConjuro" className="labelError">
                {typeof erroresFiltros.errNombreConjuro !== "undefined"
                  ? erroresFiltros.errNombreConjuro
                  : ""}
              </label>
            </div>

            <div className="divSelect">
              <label htmlFor="nivelConjuro">Nivel conjuro</label>
              <select
                name="nivelConjuro"
                id="nivelConjuro"
                onChange={(e) => setAddNivelConjuro(e.target.value)}
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
              <label htmlFor="nivelConjuro" className="labelError">
                {typeof erroresFiltros.errNivelConjuro !== "undefined"
                  ? erroresFiltros.errNivelConjuro
                  : ""}
              </label>
            </div>

            <div className="divSelect">
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
                  <option key={escuela.id_escuela} value={escuela.id_escuela}>
                    {escuela.nombre_escuela}
                  </option>
                ))}
              </select>
              <label htmlFor="escuelaMagia" className="labelError">
                {typeof erroresFiltros.errEscuelaMagia !== "undefined"
                  ? erroresFiltros.errEscuelaMagia
                  : ""}
              </label>
            </div>

            <div className="divSelect">
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
              <label htmlFor="tiempoLanzamiento" className="labelError">
                {typeof erroresFiltros.errTiempoLanzamiento !== "undefined"
                  ? erroresFiltros.errTiempoLanzamiento
                  : ""}
              </label>
            </div>
          </div>
          <div className="filaForm">
            <div className="divSelect">
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
              <label htmlFor="alcanceLanzamiento" className="labelError">
                {typeof erroresFiltros.errAlcanceLanzamiento !== "undefined"
                  ? erroresFiltros.errAlcanceLanzamiento
                  : ""}
              </label>
            </div>

            <div className="divInputText">
              <label htmlFor="rangoArea">Rango / Area</label>
              <input
                type="text"
                name="rangoArea"
                id="rangoArea"
                onChange={(e) => setAddRangoArea(e.target.value)}
              />
              <label htmlFor="rangoArea" className="labelError">
                {typeof erroresFiltros.errRangoArea !== "undefined"
                  ? erroresFiltros.errRangoArea
                  : ""}
              </label>
            </div>

            <div className="divInputText">
              <label htmlFor="duracion">Duracion</label>
              <input
                type="text"
                name="duracion"
                id="duracion"
                onChange={(e) => setAddDuracion(e.target.value)}
              />
              <label htmlFor="duracion" className="labelError">
                {typeof erroresFiltros.errDuracion !== "undefined"
                  ? erroresFiltros.errDuracion
                  : ""}
              </label>
            </div>
          </div>

          <div className="filaForm">
            <div className="divInputCheck">
              <label htmlFor="somatico">Somático</label>
              <input
                type="checkbox"
                name="somatico"
                value="somatico"
                onChange={(e) => setAddSomatico(e.target.checked)}
              ></input>
              <label htmlFor="somatico" className="labelError">
                {typeof erroresFiltros.errSomatico !== "undefined"
                  ? erroresFiltros.errSomatico
                  : ""}
              </label>
            </div>

            <div className="divInputCheck">
              <label htmlFor="verbal">Verbal</label>
              <input
                type="checkbox"
                name="verbal"
                value="verbal"
                onChange={(e) => setAddVerbal(e.target.checked)}
              ></input>
              <label htmlFor="verbal" className="labelError">
                {typeof erroresFiltros.errVerbal !== "undefined"
                  ? erroresFiltros.errVerbal
                  : ""}
              </label>
            </div>

            <div className="divInputCheck">
              <label htmlFor="material">Material</label>
              <input
                type="checkbox"
                name="material"
                value="material"
                onChange={(e) => setAddMaterial(e.target.checked)}
              ></input>
              <label htmlFor="material" className="labelError">
                {typeof erroresFiltros.errMaterial !== "undefined"
                  ? erroresFiltros.errMaterial
                  : ""}
              </label>
            </div>

            <div className="divInputText">
              <label htmlFor="materialDesc">Descricion material</label>
              <input
                type="text"
                name="materialDesc"
                id="materialDesc"
                onChange={(e) => setAddMaterialDesc(e.target.value)}
              />
              <label htmlFor="materialDesc" className="labelError">
                {typeof erroresFiltros.errMaterialDesc !== "undefined"
                  ? erroresFiltros.errMaterialDesc
                  : ""}
              </label>
            </div>
          </div>

          <div className="filaForm">
            <div className="divInputCheck">
              <label htmlFor="concentracion">Concentración</label>
              <input
                type="checkbox"
                name="concentracion"
                value="concentracion"
                onChange={(e) => setAddConcentracion(e.target.checked)}
              ></input>
              <label htmlFor="concentracion" className="labelError">
                {typeof erroresFiltros.errConcentracion !== "undefined"
                  ? erroresFiltros.errConcentracion
                  : ""}
              </label>
            </div>

            <div className="divInputCheck">
              <label htmlFor="ritual">Ritual</label>
              <input
                type="checkbox"
                name="ritual"
                value="ritual"
                onChange={(e) => setAddRitual(e.target.checked)}
              ></input>
              <label htmlFor="ritual" className="labelError">
                {typeof erroresFiltros.errRitual !== "undefined"
                  ? erroresFiltros.errRitual
                  : ""}
              </label>
            </div>
          </div>
          <p className="tituloClase">Clases</p>
          <div className="filaForm">
            <div className="divInputCheckClases">
              <label htmlFor="conjuroBardo">Bardo</label>
              <input
                type="checkbox"
                id="conjuroBardo"
                name="conjuroBardo"
                onChange={(e) => setAddBardo(e.target.checked)}
              ></input>
              <label htmlFor="conjuroBardo" className="labelError">
                {typeof erroresFiltros.errBardo !== "undefined"
                  ? erroresFiltros.errBardo
                  : ""}
              </label>
            </div>

            <div className="divInputCheckClases">
              <label htmlFor="conjuroBrujo">Brujo</label>
              <input
                type="checkbox"
                id="conjuroBrujo"
                name="conjuroBrujo"
                onChange={(e) => setAddBrujo(e.target.checked)}
              ></input>
              <label htmlFor="conjuroBrujo" className="labelError">
                {typeof erroresFiltros.errBrujo !== "undefined"
                  ? erroresFiltros.errBrujo
                  : ""}
              </label>
            </div>

            <div className="divInputCheckClases">
              <label htmlFor="conjuroClerigo">Clerigo</label>
              <input
                type="checkbox"
                id="conjuroClerigo"
                name="conjuroClerigo"
                onChange={(e) => setAddClerigo(e.target.checked)}
              ></input>
              <label htmlFor="conjuroClerigo" className="labelError">
                {typeof erroresFiltros.errClerigo !== "undefined"
                  ? erroresFiltros.errClerigo
                  : ""}
              </label>
            </div>

            <div className="divInputCheckClases">
              <label htmlFor="conjuroDruida">Druida</label>
              <input
                type="checkbox"
                id="conjuroDruida"
                name="conjuroDruida"
                onChange={(e) => setAddDruida(e.target.checked)}
              ></input>
              <label htmlFor="conjuroDruida" className="labelError">
                {typeof erroresFiltros.errDruida !== "undefined"
                  ? erroresFiltros.errDruida
                  : ""}
              </label>
            </div>

            <div className="divInputCheckClases">
              <label htmlFor="conjuroExplorador">Explorador</label>
              <input
                type="checkbox"
                id="conjuroExplorador"
                name="conjuroExplorador"
                onChange={(e) => setAddExplorador(e.target.checked)}
              ></input>
              <label htmlFor="conjuroExplorador" className="labelError">
                {typeof erroresFiltros.errExplorador !== "undefined"
                  ? erroresFiltros.errExplorador
                  : ""}
              </label>
            </div>

            <div className="divInputCheckClases">
              <label htmlFor="conjuroHechicero">Hechicero</label>
              <input
                type="checkbox"
                id="conjuroHechicero"
                name="conjuroHechicero"
                onChange={(e) => setAddHechicero(e.target.checked)}
              ></input>
              <label htmlFor="conjuroHechicero" className="labelError">
                {typeof erroresFiltros.errHechicero !== "undefined"
                  ? erroresFiltros.errHechicero
                  : ""}
              </label>
            </div>

            <div className="divInputCheckClases">
              <label htmlFor="conjuroMago">Mago</label>
              <input
                type="checkbox"
                id="conjuroMago"
                name="conjuroMago"
                onChange={(e) => setAddMago(e.target.checked)}
              ></input>
              <label htmlFor="conjuroMago" className="labelError">
                {typeof erroresFiltros.errMago !== "undefined"
                  ? erroresFiltros.errMago
                  : ""}
              </label>
            </div>

            <div className="divInputCheckClases">
              <label htmlFor="conjuroPaladin">Paladin</label>
              <input
                type="checkbox"
                id="conjuroPaladin"
                name="conjuroPaladin"
                onChange={(e) => setAddPaladin(e.target.checked)}
              ></input>
              <label htmlFor="conjuroPaladin" className="labelError">
                {typeof erroresFiltros.errPaladin !== "undefined"
                  ? erroresFiltros.errPaladin
                  : ""}
              </label>
            </div>
          </div>
          <p className="labelError">
            {typeof erroresFiltros.errClase !== "undefined"
              ? erroresFiltros.errClase
              : ""}
          </p>
          <div className="filaForm">
            <div>
              <label htmlFor="descCorta">Descripción Corta</label>
              <textarea
                id="descCorta"
                name="descCorta"
                rows="4"
                cols="100"
                onChange={(e) => setAddDescCorta(e.target.value)}
              ></textarea>
              <label htmlFor="descCorta" className="labelError">
                {typeof erroresFiltros.errDescCorta !== "undefined"
                  ? erroresFiltros.errDescCorta
                  : ""}
              </label>
            </div>
          </div>

          <div className="filaForm">
            <div>
              <label htmlFor="descLarga">Descripción Larga</label>
              <textarea
                id="descLarga"
                name="descLarga"
                rows="15"
                cols="120"
                onChange={(e) => setAddDescLarga(e.target.value)}
              ></textarea>
              <label htmlFor="descLarga" className="labelError">
                {typeof erroresFiltros.errDescLarga !== "undefined"
                  ? erroresFiltros.errDescLarga
                  : ""}
              </label>
            </div>
          </div>

          <div className="filaForm">
            <div>
              <label htmlFor="imgfile">Imagen conjuro</label>
              <input type="file" src="" alt="" id="imgfile" name="imgfile" />
              <label htmlFor="imgfile" className="labelError">
                {typeof erroresFiltros.errImagen !== "undefined"
                  ? erroresFiltros.errImagen
                  : ""}
              </label>
            </div>
          </div>
          <div className="filaForm">
            <input
              name="submit"
              type="submit"
              value="Añadir conjuro"
              onClick={async (event) => {
                event.preventDefault();

                console.log("addDuracion");
                console.log(addDuracion);

                let data = new Object();

                let element = document.getElementById("imgfile");
                let file = element.files[0];
                if (typeof file == "object") {
                  let blob = file.slice(0, file.size, file.type);

                  const tipoImagen = file.type.split("/");

                  let newFile = new File(
                    [blob],
                    "imagenPrueba." + tipoImagen[1],
                    {
                      type: file.type,
                    }
                  );
                  data = formDataSubmit(newFile);
                } else {
                  data = formDataSubmit("error");
                }

                try {
                  const peticion = await fetch(
                    "http://localhost:3000/conjuros/add",
                    {
                      method: "POST",
                      body: data,
                      credentials: "include",
                    }
                  );

                  if (!peticion.ok) {
                    const result = await peticion.json();
                    setErroresFiltros(result);
                    throw new Error("Network response was not ok");
                  } else {
                    setAlertOpen(true);
                  }
                } catch (err) {
                  console.log(err);
                }
              }}
            />
            <input
              type="submit"
              value="Reiniciar valores"
              onClick={(e) => {
                document.getElementById("formConjurosAdd").reset();
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
}
