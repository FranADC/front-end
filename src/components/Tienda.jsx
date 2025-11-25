import { useState, useEffect } from "react";

export default function () {
  const [dbArticulos, setDbArticulos] = useState([]);

  useEffect(() => {
    async function fetchArticulos() {
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

    fetchArticulos();
  });

  return <></>;
}
