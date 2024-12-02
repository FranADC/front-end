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
            {dbNivelesMagia.map((nivel) => (
              <option key={nivel.id_nivel} value={nivel.id_nivel}>
                {nivel.nombre_nivel}
              </option>
            ))}
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
              <option key={escuela.id_escuela} value={escuela.id_escuela}>
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
            {typeof erroresFiltros.errRangoArea !== "undefined"
              ? erroresFiltros.errRangoArea
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
            {typeof erroresFiltros.errVerbal !== "undefined"
              ? erroresFiltros.errVerbal
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
            {typeof erroresFiltros.errMaterial !== "undefined"
              ? erroresFiltros.errMaterial
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
            {typeof erroresFiltros.errMaterialDesc !== "undefined"
              ? erroresFiltros.errMaterialDesc
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
            {typeof erroresFiltros.errDuracion !== "undefined"
              ? erroresFiltros.errDuracion
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
            {typeof erroresFiltros.errConcentracion !== "undefined"
              ? erroresFiltros.errConcentracion
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
            {typeof erroresFiltros.errRitual !== "undefined"
              ? erroresFiltros.errRitual
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
            {typeof erroresFiltros.errDescCorta !== "undefined"
              ? erroresFiltros.errDescCorta
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
            {typeof erroresFiltros.errDescLarga !== "undefined"
              ? erroresFiltros.errDescLarga
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="conjuroBardo">Bardo</label>
          <input
            type="checkbox"
            id="conjuroBardo"
            name="conjuroBardo"
            onChange={(e) => setAddBardo(e.target.checked)}
          ></input>
          <label htmlFor="conjuroBardo">
            {typeof erroresFiltros.errBardo !== "undefined"
              ? erroresFiltros.errBardo
              : ""}
          </label>

          <label htmlFor="conjuroBrujo">Brujo</label>
          <input
            type="checkbox"
            id="conjuroBrujo"
            name="conjuroBrujo"
            onChange={(e) => setAddBrujo(e.target.checked)}
          ></input>
          <label htmlFor="conjuroBrujo">
            {typeof erroresFiltros.errBrujo !== "undefined"
              ? erroresFiltros.errBrujo
              : ""}
          </label>

          <label htmlFor="conjuroClerigo">Clerigo</label>
          <input
            type="checkbox"
            id="conjuroClerigo"
            name="conjuroClerigo"
            onChange={(e) => setAddClerigo(e.target.checked)}
          ></input>
          <label htmlFor="conjuroClerigo">
            {typeof erroresFiltros.errClerigo !== "undefined"
              ? erroresFiltros.errClerigo
              : ""}
          </label>

          <label htmlFor="conjuroDruida">Druida</label>
          <input
            type="checkbox"
            id="conjuroDruida"
            name="conjuroDruida"
            onChange={(e) => setAddDruida(e.target.checked)}
          ></input>
          <label htmlFor="conjuroDruida">
            {typeof erroresFiltros.errDruida !== "undefined"
              ? erroresFiltros.errDruida
              : ""}
          </label>

          <label htmlFor="conjuroExplorador">Explorador</label>
          <input
            type="checkbox"
            id="conjuroExplorador"
            name="conjuroExplorador"
            onChange={(e) => setAddExplorador(e.target.checked)}
          ></input>
          <label htmlFor="conjuroExplorador">
            {typeof erroresFiltros.errExplorador !== "undefined"
              ? erroresFiltros.errExplorador
              : ""}
          </label>

          <label htmlFor="conjuroHechicero">Hechicero</label>
          <input
            type="checkbox"
            id="conjuroHechicero"
            name="conjuroHechicero"
            onChange={(e) => setAddHechicero(e.target.checked)}
          ></input>
          <label htmlFor="conjuroHechicero">
            {typeof erroresFiltros.errHechicero !== "undefined"
              ? erroresFiltros.errHechicero
              : ""}
          </label>

          <label htmlFor="conjuroMago">Mago</label>
          <input
            type="checkbox"
            id="conjuroMago"
            name="conjuroMago"
            onChange={(e) => setAddMago(e.target.checked)}
          ></input>
          <label htmlFor="conjuroMago">
            {typeof erroresFiltros.errMago !== "undefined"
              ? erroresFiltros.errMago
              : ""}
          </label>

          <label htmlFor="conjuroPaladin">Paladin</label>
          <input
            type="checkbox"
            id="conjuroPaladin"
            name="conjuroPaladin"
            onChange={(e) => setAddPaladin(e.target.checked)}
          ></input>
          <label htmlFor="conjuroPaladin">
            {typeof erroresFiltros.errPaladin !== "undefined"
              ? erroresFiltros.errPaladin
              : ""}
          </label>
        </div>
        {typeof erroresFiltros.errClase !== "undefined"
          ? erroresFiltros.errClase
          : ""}
        <div>
          <input type="file" src="" alt="" id="imgfile" />
          {typeof erroresFiltros.errImagen !== "undefined"
            ? erroresFiltros.errImagen
            : ""}
        </div>

        <input
          name="submit"
          type="submit"
          value="submit"
          onClick={async (event) => {
            event.preventDefault();

            let data = new Object();

            let element = document.getElementById("imgfile");
            let file = element.files[0];
            if (typeof file == "object") {
              let blob = file.slice(0, file.size, file.type);

              const tipoImagen = file.type.split("/");

              let newFile = new File([blob], "imagenPrueba." + tipoImagen[1], {
                type: file.type,
              });
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
              const result = await peticion.json();
              if (!peticion.ok) {
                setErroresFiltros(result);
                throw new Error("Network response was not ok");
              } else {
                setErroresFiltros("");
              }
            } catch (err) {
              console.log(err);
            }
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
