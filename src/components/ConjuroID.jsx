//import "./Header.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function () {
  const { ID } = useParams();

  const [dbConjuro, setDbConjuro] = useState([]);

  //cuando una variable sufre un cambio (la variable en []), se ejecuta el codigo del interior.`http://localhost:3000/conjuro/${ID}`
  useEffect(() => {
    async function fetchConjuroID() {
      try {
        const peticion = await fetch("http://localhost:3000/conjuros/" + ID, {
          credentials: "include",
        });
        const data = await peticion.json();
        console.log(data == "");
        if (data == "") {
          window.location.href = "/error/404";
        }

        if (!peticion.ok) {
          setErroresFiltros(data);
          throw new Error("Network response was not ok");
        } else {
          setDbConjuro(data[0]);
          console.log(data[0]);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchConjuroID(); //ejecutar la funcion de arriba
  }, []); //[] para que se carge cuando se inicia la página
  return (
    <>
      <div>
        <a href={"/conjuros/modificar/" + dbConjuro.id_conjuro}>editar</a>
      </div>
      <div>
        <p>Nombre conjuro</p>
        <p>{dbConjuro.Nombre_conjuro}</p>
      </div>
      <div>
        <p>Nivel conjuro</p>
        <p>{dbConjuro.Nivel_conjuro}</p>
      </div>
      <div>
        <p>Escuela magia</p>
        <p>{dbConjuro.Nombre_escuela}</p>
      </div>
      <div>
        <p>Tiempo lanzamiento</p>
        <p>{dbConjuro.nombre_tiempo}</p>
      </div>
      <div>
        <p>Alcance lanzamiento</p>
        <p>{dbConjuro.Nombre_Alcance}</p>
      </div>
      <img src={"http://localhost:3000" + dbConjuro.Imagen_conjuro}></img>
    </>
  );
}
