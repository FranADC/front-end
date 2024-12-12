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
            <a href="/">
              <img
                className="cabeceraSupLogo"
                src="/imagenes/iconos/logo.png"
                alt=""
              />
            </a>
            <div className="divMenuNav">
              <ul className="menuNavPantalla">
                <li>
                  <a href="/clases">Classes</a>
                </li>
                <li>
                  <a href="/razas">Razas</a>
                </li>
                <li>
                  <a href="/transfondos">Transfondos</a>
                </li>
                <li>
                  <a href="/conjuros">Conjuros</a>
                </li>
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
                              "/imagenes/iconos/restar.svg";
                          } else {
                            document.getElementById(
                              "divCerrarSession"
                            ).style.display = "none";
                            document.getElementById("imgCerrarSession").src =
                              "/imagenes/iconos/sumar.svg";
                          }
                        }}
                        className="iconoSesion"
                        id="imgCerrarSession"
                        src="/imagenes/iconos/sumar.svg"
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
            <img
              src="/imagenes/iconos/hamburguesa.svg"
              className="botonNavMovil"
              onClick={() => {
                document.getElementById("divNavAbsoluto").style.display =
                  "flex";
                document.body.style.overflow = "hidden";
                console.log("okay");
              }}
            />
          </div>
        </div>
      </header>
      <div id="divNavAbsoluto" className="divNavAbsoluto">
        <div className="menuNavAbsoluto"></div>
        <img
          src="/imagenes/iconos/salir.svg"
          onClick={() => {
            document.getElementById("divNavAbsoluto").style.display = "none";
            document.body.style.overflow = "visible";
            console.log("okay");
          }}
        />
        <h1>
          <a href="/clases">Clases</a>
        </h1>
        <h1>
          <a href="/razas">Razas</a>
        </h1>
        <h1>
          <a href="/transfondos">Transfondos</a>
        </h1>
        <h1>
          <a href="/conjuros">Conjuros</a>
        </h1>
        <div>
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
              <p>Bienvenido: {usuario.nombre}</p>
              <button onClick={(e) => handleLogout()}>Cerrar sesión</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
