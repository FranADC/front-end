//import "./Header.css";
import { useState, useEffect } from "react";

export default function () {
  const { ID } = useParams();

  const [dbConjuro, setDbConjuro] = useState([]);

  //cuando una variable sufre un cambio (la variable en []), se ejecuta el codigo del interior.`http://localhost:3000/conjuro/${ID}`
  useEffect(() => {
    async function fetchData() {
      try {
        const peticion = await fetch("http://localhost:3000/conjuro/" + ID);
        if (!peticion.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await peticion.json();
        setDbMagia(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData(); //ejecutar la funcion de arriba
  }, []); //[] para que se carge cuando se inicia la página
}
