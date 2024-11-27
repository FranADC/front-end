import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function () {
  const { ID } = useParams();

  const [dbConjuro, setDbConjuro] = useState([]);

  //cuando una variable sufre un cambio (la variable en []), se ejecuta el codigo del interior.`http://localhost:3000/conjuro/${ID}`
  useEffect(() => {
    async function fetchData() {
      try {
        const peticion = await fetch("http://localhost:3000/conjuros/" + ID);
        const data = await peticion.json();
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
    fetchData(); //ejecutar la funcion de arriba
  }, []); //[] para que se carge cuando se inicia la página
  return (
    <>
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
