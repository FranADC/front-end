import "./Error.css";
import { useState, useEffect } from "react";

export default function () {
  return (
    <>
      <div className="divBody">
        <div className="divError">
          <h1>Error 404</h1>
          <h2>No se ha podido encontrar la página que estas buscando</h2>
        </div>
      </div>
    </>
  );
}
