//import "./Header.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function () {
  const { ID } = useParams();

  const [updateNombreConjuro, setUpdateNombreConjuro] = useState("");
  const [updateNivelConjuro, setUpdateNivelConjuro] = useState("");
  const [updateEscuelaMagia, setUpdateEscuelaMagia] = useState("");
  const [updateTiempoLanzamiento, setUpdateTiempoLanzamiento] = useState("");
  const [updateAlcanceLanzamiento, setUpdateAlcanceLanzamiento] = useState("");
  const [updateRangoArea, setUpdateRangoArea] = useState("");
  const [updateSomatico, setUpdateSomatico] = useState("");
  const [updateVerbal, setUpdateVerbal] = useState("");
  const [updateMaterial, setUpdateMaterial] = useState("");
  const [updateMaterialDesc, setUpdateMaterialDesc] = useState("");
  const [updateDuracion, setUpdateDuracion] = useState("");
  const [updateConcentracion, setUpdateConcentracion] = useState("");
  const [updateRitual, setUpdateRitual] = useState("");
  const [updateDescCorta, setUpdateDescCorta] = useState("");
  const [updateDescLarga, setUpdateDescLarga] = useState("");
  const [updateBardo, setUpdateBardo] = useState("");
  const [updateBrujo, setUpdateBrujo] = useState("");
  const [updateClerigo, setUpdateClerigo] = useState("");
  const [updateDruida, setUpdateDruida] = useState("");
  const [updateExplorador, setUpdateExplorador] = useState("");
  const [updateHechicero, setUpdateHechicero] = useState("");
  const [updateMago, setUpdateMago] = useState("");
  const [updatePaladin, setUpdatePaladin] = useState("");

  const [dbEscuelasMagia, setDbEscuelasMagia] = useState([]);
  const [dbTiemposLanzamiento, setDbTiemposLanzamiento] = useState([]);
  const [dbAlcanceLanzamiento, setDbAlcanceLanzamiento] = useState([]);
  const [dbNivelesMagia, setDbNivelesMagia] = useState([]);

  const [dbConjuro, setDbConjuro] = useState([]);
  const [dbConjuroPorClase, setDbConjuroPorClase] = useState([]);
  const [erroresFiltros, setErroresFiltros] = useState("");
  const [recargar, setRecargar] = useState(false);

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

    async function fetchConjuroID() {
      try {
        const peticion = await fetch("http://localhost:3000/conjuros/" + ID, {
          credentials: "include",
        });
        const data = await peticion.json();
        if (data == "") {
          window.location.href = "/error/404";
        }

        if (!peticion.ok) {
          setErroresFiltros(data);
          throw new Error("Network response was not ok");
        } else {
          setDbConjuro(data[0]);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchConjuroID();

    async function fetchConjuroPorClase() {
      try {
        const peticion = await fetch(
          "http://localhost:3000/conjuroPorClase/" + ID,
          {
            credentials: "include",
          }
        );
        const data = await peticion.json();

        if (!peticion.ok) {
          setErroresFiltros(data);
          throw new Error("Network response was not ok");
        } else {
          {
            data.map((clase) =>
              dbConjuroPorClase.includes(clase.id_clas)
                ? ""
                : dbConjuroPorClase.push(clase.id_clas)
            );
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchConjuroPorClase();
  }, []);

  useEffect(() => {
    if (!recargar) {
      return setRecargar(true);
    }

    setUpdateNombreConjuro(dbConjuro.nombre_conjuro);
    setUpdateNivelConjuro(dbConjuro.nivel_conjuro);
    setUpdateEscuelaMagia(dbConjuro.escuela_magia);
    setUpdateTiempoLanzamiento(dbConjuro.tiempo_lanz);
    setUpdateAlcanceLanzamiento(dbConjuro.alcance);
    setUpdateRangoArea(dbConjuro.rango_area);
    setUpdateSomatico(dbConjuro.somatico);
    setUpdateVerbal(dbConjuro.verbal);
    setUpdateMaterial(dbConjuro.material);
    setUpdateMaterialDesc(dbConjuro.material_desc);
    setUpdateDuracion(dbConjuro.duracion);
    setUpdateConcentracion(dbConjuro.concentracion);

    setUpdateRitual(dbConjuro.ritual);
    setUpdateDescCorta(dbConjuro.desc_corta);
    setUpdateDescLarga(dbConjuro.desc_larga);

    setUpdateBardo(dbConjuroPorClase.includes(1) ? 1 : 0);
    setUpdateBrujo(dbConjuroPorClase.includes(2) ? 1 : 0);
    setUpdateClerigo(dbConjuroPorClase.includes(3) ? 1 : 0);
    setUpdateDruida(dbConjuroPorClase.includes(4));
    setUpdateExplorador(dbConjuroPorClase.includes(5));
    setUpdateHechicero(dbConjuroPorClase.includes(6));
    setUpdateMago(dbConjuroPorClase.includes(7));
    setUpdatePaladin(dbConjuroPorClase.includes(8));
  }, [dbConjuro]);

  function formDataSubmit(newFile) {
    const formData = new FormData(); //form data muchos campos, pesados(imagenes) y no permite codificación
    formData.append("idConjuro", ID);
    formData.append("nombreConjuro", updateNombreConjuro);
    formData.append("nivelConjuro", updateNivelConjuro);
    formData.append("escuelaMagia", updateEscuelaMagia);
    formData.append("tiempoLanzamiento", updateTiempoLanzamiento);
    formData.append("alcanceLanzamiento", updateAlcanceLanzamiento);
    formData.append("rangoArea", updateRangoArea);
    formData.append("somatico", updateSomatico == 1);
    formData.append("verbal", updateVerbal == 1);
    formData.append("material", updateMaterial == 1);
    formData.append("materialDesc", updateMaterialDesc);
    formData.append("duracion", updateDuracion);
    formData.append("concentracion", updateConcentracion == 1);
    formData.append("ritual", updateRitual == 1);
    formData.append("descCorta", updateDescCorta);
    formData.append("descLarga", updateDescLarga);
    formData.append("bardo", updateBardo == 1);
    formData.append("brujo", updateBrujo == 1);
    formData.append("clerigo", updateClerigo == 1);
    formData.append("druida", updateDruida == 1);
    formData.append("explorador", updateExplorador == 1);
    formData.append("hechicero", updateHechicero == 1);
    formData.append("mago", updateMago == 1);
    formData.append("paladin", updatePaladin == 1);

    formData.append("imagen", newFile);

    return formData;
  }

  return (
    <>
      <form id="formConjurosUpdate">
        <div>
          <label htmlFor="nombreConjuro">Nombre conjuro</label>
          <input
            type="text"
            name="nombreConjuro"
            id="nombreConjuro"
            value={updateNombreConjuro}
            onChange={(e) => setUpdateNombreConjuro(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="nivelConjuro">Nivel conjuro</label>
          <select
            name="nivelConjuro"
            id="nivelConjuro"
            value={updateNivelConjuro}
            onChange={(e) => {
              setFiltroNivelConjuro(e.target.value);
            }}
          >
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
            value={updateEscuelaMagia}
            id="escuelaMagia"
            onChange={(e) => setUpdateEscuelaMagia(e.target.value)}
          >
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
            value={updateTiempoLanzamiento}
            onChange={(e) => setUpdateTiempoLanzamiento(e.target.value)}
          >
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
            value={updateAlcanceLanzamiento}
            onChange={(e) => setUpdateAlcanceLanzamiento(e.target.value)}
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
            value={updateRangoArea}
            onChange={(e) => setUpdateRangoArea(e.target.value)}
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
            checked={updateSomatico == 1}
            onChange={(e) => setUpdateSomatico(e.target.checked)}
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
            checked={updateVerbal == 1}
            onChange={(e) => setUpdateVerbal(e.target.checked)}
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
            checked={updateMaterial == 1}
            onChange={(e) => setUpdateMaterial(e.target.checked)}
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
            value={updateMaterialDesc == null ? "" : updateMaterialDesc}
            onChange={(e) => setUpdateMaterialDesc(e.target.value)}
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
            value={updateDuracion}
            onChange={(e) => setUpdateDuracion(e.target.value)}
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
            checked={updateConcentracion == 1}
            onChange={(e) => setUpdateConcentracion(e.target.checked)}
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
            checked={updateRitual == 1}
            onChange={(e) => setUpdateRitual(e.target.checked)}
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
            value={updateDescCorta}
            onChange={(e) => setUpdateDescCorta(e.target.value)}
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
            value={updateDescLarga}
            onChange={(e) => setUpdateDescLarga(e.target.value)}
          ></textarea>
          <label htmlFor="descLarga">
            {typeof erroresFiltros.errAlcanceLanzamiento !== "undefined"
              ? erroresFiltros.errAlcanceLanzamiento
              : ""}
          </label>
        </div>
        <div>
          <label htmlFor="conjuroBardo">Bardo</label>
          <input
            type="checkbox"
            id="conjuroBardo"
            name="conjuroBardo"
            checked={updateBardo == 1}
            onChange={(e) => setUpdateBardo(e.target.checked)}
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
            checked={updateBrujo == 1}
            onChange={(e) => setUpdateBrujo(e.target.checked)}
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
            checked={updateClerigo == 1}
            onChange={(e) => setUpdateClerigo(e.target.checked)}
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
            checked={updateDruida == 1}
            onChange={(e) => setUpdateDruida(e.target.checked)}
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
            checked={updateExplorador == 1}
            onChange={(e) => setUpdateExplorador(e.target.checked)}
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
            checked={updateHechicero == 1}
            onChange={(e) => setUpdateHechicero(e.target.checked)}
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
            checked={updateMago == 1}
            onChange={(e) => setUpdateMago(e.target.checked)}
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
            checked={updatePaladin == 1}
            onChange={(e) => setUpdatePaladin(e.target.checked)}
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
        <img src={"http://localhost:3000" + dbConjuro.imagen_conjuro} alt="" />
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
                "http://localhost:3000/conjuros/update/" + dbConjuro.id_conjuro,
                {
                  method: "POST",
                  body: data,
                  credentials: "include",
                }
              );
              const result = await peticion.json();
              if (!peticion.ok) {
                console.log(result);

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
      </form>
    </>
  );
}
