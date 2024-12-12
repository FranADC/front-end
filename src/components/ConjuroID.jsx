import "./conjurosID.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function ({ usuario }) {
  const { ID } = useParams();

  const [dbConjuro, setDbConjuro] = useState([]);
  const [dbClasesMagia, setDbClasesMagia] = useState([]);
  const [dbConjuroPorClase, setDbConjuroPorClase] = useState([]);

  //cuando una variable sufre un cambio (la variable en []), se ejecuta el codigo del interior.`http://localhost:3000/conjuro/${ID}`
  useEffect(() => {
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
  }, []);

  async function deleteConjuroID() {
    console.log("AAAAAAA");

    try {
      console.log("bbbbbbbbb");
      const peticion = await fetch("http://localhost:3000/borrar/" + ID, {
        credentials: "include",
      });
      if (!peticion.ok) {
        throw new Error("Network response was not ok");
      } else {
        alert("Conjuro borrado con exito");
        window.location.href = "/conjuros";
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {console.log(dbConjuro)}
      <div className="divBody">
        <div className="tarjetaConjuro">
          <div className="botonesMenu">
            <a href="/conjuros">
              <input type="button" value="Volver a conjuros" />
            </a>
          </div>
          <div className="mostrarTitulo">
            <h1>{dbConjuro.nombre_conjuro}</h1>
            {dbConjuro.concentracion == 1 ? (
              <img src="/imagenes/iconos/concetracion.png" alt="" />
            ) : (
              ""
            )}
            {dbConjuro.ritual == 1 ? (
              <img src="/imagenes/iconos/ritual.png" alt="" />
            ) : (
              ""
            )}
          </div>
          <div className="interiorTarjeta">
            <div className="mostrarDatos">
              <div className="filaPrincipal">
                <div className="divInformacion">
                  <h2 className="tiamat">Nivel</h2>
                  <p>{dbConjuro.nombre_nivel}</p>
                </div>
                <div className="divInformacion">
                  <h2 className="tiamat">Escuela</h2>
                  <p>{dbConjuro.nombre_escuela}</p>
                </div>
                <div className="divInformacion">
                  <h2 className="tiamat">Tiempo de lanzamiento</h2>
                  <p>{dbConjuro.nombre_tiempo}</p>
                </div>
                <div className="divInformacion">
                  <h2 className="tiamat">Duración</h2>
                  <p>{dbConjuro.duracion}</p>
                </div>
              </div>
              <div className="filaSecundaria">
                <div className="divInformacion">
                  <h2 className="tiamat">Rango/area </h2>
                  <p>{dbConjuro.rango_area}</p>
                </div>
                <div className="divInformacion">
                  <h2 className="tiamat">Componentes</h2>
                  <p>
                    {dbConjuro.somatico == 1 ? " S " : ""}
                    {dbConjuro.verbal == 1 ? " V " : ""}
                    {dbConjuro.material == 1
                      ? " M(" + dbConjuro.material_desc + ")"
                      : ""}
                  </p>
                </div>
              </div>
              <div className="filaClases">
                <h2 className="tiamat">Disponible para:</h2>
                <p>
                  {dbClasesMagia.map((clase) =>
                    dbConjuroPorClase.includes(clase.id_clase)
                      ? " " + clase.nombre_clase + " "
                      : ""
                  )}
                </p>
              </div>
              <div
                className="filaDescripcion"
                dangerouslySetInnerHTML={{ __html: dbConjuro.desc_larga }}
              />
              {usuario.rol == 1 ? (
                <>
                  <div className="botonesEditar">
                    <div className="filaEditar">
                      <a href={"/conjuros/modificar/" + dbConjuro.id_conjuro}>
                        <input type="button" value="Editar" />
                      </a>
                    </div>
                    <div className="filaEditar">
                      <input
                        type="button"
                        value="Eliminar"
                        onClick={deleteConjuroID}
                      />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="mostrarImagen">
              <img
                src={"http://localhost:3000" + dbConjuro.imagen_conjuro}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
