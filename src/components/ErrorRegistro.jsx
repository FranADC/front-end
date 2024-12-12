import "./error.css";
import { useState, useEffect } from "react";

export default function () {
  return (
    <>
      <div className="divBody">
        <div className="divError">
          <h1>Necesitas iniciar sesión para acceder a esta página</h1>
          <div>
            <a href="/login">
              <input type="button" value="Iniciar sesión" />
            </a>
            <a href="/registrarse">
              <input type="button" value="Registrarse" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
