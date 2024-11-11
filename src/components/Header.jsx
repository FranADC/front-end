import "./Header.css";
import Logo from "../imagenes/marca/logo.png";

export default function () {
  return (
    <header>
      <div className="cabeceraDiv">
        <div className="cabPrincipal">
          <img className="cabPrincipalLogo" src={Logo} alt="" />
          <div>
            <button>sesión</button>
          </div>
        </div>
        <div className="cabNavegacion">
          <ul className="cabNavegacionMenu">
            <li>
              Como jugar
              <ul>
                <li>
                  <a href="">Crear un personaje</a>
                </li>
                <li>
                  <a href="">Conceptos básicos</a>
                </li>
                <li>
                  <a href="">Conceptos avanzados</a>
                </li>
              </ul>
            </li>
            <li>
              Reglas
              <ul>
                <li>
                  <a href="">Classes</a>
                </li>
                <li>
                  <a href="">Razas</a>
                </li>
                <li>
                  <a href="">Transfondos</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/magia">magia</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
