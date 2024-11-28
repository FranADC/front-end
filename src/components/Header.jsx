import "./Header.css";
import Logo from "../imagenes/marca/logo.png";

export default function ({ usuario }) {
  console.log(usuario);

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
    <header>
      <div className="cabeceraDiv">
        <div className="cabPrincipal">
          <img className="cabPrincipalLogo" src={Logo} alt="" />
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
                <li>
                  <a href="/conjuros">Conjuros</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
