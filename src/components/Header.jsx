import "./Header.css";
import Logo from "../imagenes/marca/logo.png";

export default function ({ usuario }) {
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "GET",
        credentials: "include", // Asegura que las cookies se envíen
      });

      if (!response.ok) {
        throw new Error("Error al cerrar sesión");
      }
      console.log("Sesión cerrada");
      window.location.href = "/";
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  return (
    <>
      <header>
        <div className="cabeceraPrincipal">
          <div className="cabeceraSuperior">
            <img
              className="cabeceraSupLogo"
              src="http://localhost:5173/imagenes/iconos/logo.png"
              alt=""
            />
            <div className="divMenuNav">
              <ul className="menuNavPantalla">
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
                    <li>
                      <a href="/conjuros">Conjuros</a>
                    </li>
                  </ul>
                </li>
                <li>Reglas</li>
                <li>Reglas</li>
              </ul>
            </div>
            <div className="cabeceraSupBotones">
              {usuario == undefined ? (
                <>
                  <a href="/login">
                    <input type="button" value="Iniciar sesión" />
                  </a>
                  <a href="/registrarse">
                    <input type="button" value="Registrarse" />
                  </a>
                </>
              ) : (
                <>
                  <div className="cabeceraSupBotonesCerrar">
                    <div className="cerrarSesion">
                      <p>Bienvenido: {usuario.nombre}</p>
                      <img
                        onClick={() => {
                          const estado =
                            document.getElementById("divCerrarSession").style
                              .display;
                          console.log(estado);
                          if (estado == "none") {
                            document.getElementById(
                              "divCerrarSession"
                            ).style.display = "flex";
                            document.getElementById("imgCerrarSession").src =
                              "http://localhost:5173/imagenes/iconos/restar.svg";
                          } else {
                            document.getElementById(
                              "divCerrarSession"
                            ).style.display = "none";
                            document.getElementById("imgCerrarSession").src =
                              "http://localhost:5173/imagenes/iconos/sumar.svg";
                          }
                        }}
                        className="iconoSesion"
                        id="imgCerrarSession"
                        src="http://localhost:5173/imagenes/iconos/sumar.svg"
                        alt=""
                      />
                    </div>
                    <div id="divCerrarSession" style={{ display: "none" }}>
                      <input
                        type="button"
                        value="Cerrar Sesion"
                        id="imgCerrarSession"
                        onClick={(e) => handleLogout()}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="cabeceraInferior">
            <button
              className="botonNavMovil"
              onClick={() => {
                document.getElementById("divNavAbsoluto").style.display =
                  "flex";
                document.body.style.overflow = "hidden";
                console.log("okay");
              }}
            >
              hamburgesa
            </button>
          </div>
        </div>
      </header>
      <div id="divNavAbsoluto" className="divNavAbsoluto">
        <div className="menuNavAbsoluto"></div>
        <button
          onClick={() => {
            document.getElementById("divNavAbsoluto").style.display = "none";
            document.body.style.overflow = "visible";
            console.log("okay");
          }}
        >
          reducir
        </button>
        <h1>Como jugar</h1>
        <h1>Classes</h1>
        <h1>Classes</h1>
        <h1>Classes</h1>
        <h2>
          <a href="/conjuros">Conjuros</a>
        </h2>
        <div>
          {usuario == undefined ? (
            <>
              <button>
                <a href="/login">sesión</a>
              </button>
              <button>
                <a href="/registrarse">registrarse</a>
              </button>
            </>
          ) : (
            <>
              <p>bienvenido: {usuario.nombre}</p>
              <button onClick={(e) => handleLogout()}>cerrarSession</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
