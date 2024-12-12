import "./Index.css";

export default function () {
  return (
    <>
      <div className="divBody">
        <div className="divTitulo">
          <h3>bienvenidos a </h3>
          <h1>DRAMONES Y MAZMORRAS</h1>
          <p>
            Aqui encontraras toda la información necesaria para empezar a jugar
            a dragones y mazmorras, crear tus presonajes y disfrutar de una gran
            aventura con tus amigos.
          </p>
        </div>
        <div className="divElementos">
          <div>
            <h2>Clases</h2>
            <img
              src="http://localhost:5173/imagenes/general/logoGuerrero.png"
              alt=""
            />
            <a href="/clases">
              <input type="button" value="Ver más" />
            </a>
          </div>
          <div>
            <h2>Razas</h2>
            <img
              src="http://localhost:5173/imagenes/general/personajeTiefling.png"
              alt=""
            />
            <a href="/razas">
              <input type="button" value="Ver más" />
            </a>
          </div>
          <div>
            <h2>Transfondos</h2>
            <img
              src="http://localhost:5173/imagenes/general/transfondoCharlatan.png"
              alt=""
            />
            <a href="/transfondos">
              <input type="button" value="Ver más" />
            </a>
          </div>
          <div>
            <h2>Conjuros</h2>
            <img
              src="http://localhost:5173/imagenes/general/ejemploMagia.webp"
              alt=""
            />
            <a href="/conjuros">
              <input type="button" value="Ver más" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
