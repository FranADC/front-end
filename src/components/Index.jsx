import "./Index.css";

export default function () {
  return (
    <>
      <div className="divBody">
        <div className="divTitulo">
          <h1>bienvenidos a Dramones y Mazmorras</h1>
          <p>
            En esta web encontraras toda la información necesaria para empezar a
            jugar a dragones y mazmorras, crear tus presonajes y disfrutar de
            una gran aventura con tus amigos.
          </p>
          <p>
            Aunque si deseas mas información o un lugar donde comprar tus
            suministros para la aventura no dudes en acudir a nuestra tienda
            fisica
          </p>
          <img src="/imagenes/tienda/localizacion.png" alt="" />
        </div>
        <div className="divElementos">
          <div>
            <h2>Clases</h2>
            <img src="/imagenes/general/logoGuerrero.png" alt="" />
            <a href="/clases">
              <input type="button" value="Ver más" />
            </a>
          </div>
          <div>
            <h2>Razas</h2>
            <img src="/imagenes/general/personajeTiefling.png" alt="" />
            <a href="/razas">
              <input type="button" value="Ver más" />
            </a>
          </div>
          <div>
            <h2>Transfondos</h2>
            <img src="/imagenes/general/transfondoCharlatan.png" alt="" />
            <a href="/transfondos">
              <input type="button" value="Ver más" />
            </a>
          </div>
          <div>
            <h2>Conjuros</h2>
            <img src="/imagenes/general/ejemploMagia.webp" alt="" />
            <a href="/conjuros">
              <input type="button" value="Ver más" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
