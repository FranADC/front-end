import "./hojaClases.css";
import "./tablaBardo.css";
export default function () {
  return (
    <>
      {console.log("a")}
      <div className="divBody">
        <div className="divGeneral">
          <h1>BARDO</h1>
          <div className="divPrincipal">
            <div className="divTablaContenedor">
              <h1>Rasgos básicos del bardo</h1>
              <div className="tablaOverflow">
                <div className="divTablaPrin">
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Habilidad principal:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Carisma</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Dado de puntos de golpe:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>D8 por nivel de bardo</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con tiradas de salvación:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Destreza y carisma</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con habilidades:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge 3 habilidades cualquiera y 3 instrumentos
                        musicales
                      </p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con armas:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Armas simples</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con armaduras:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Armaduras ligeras</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin  finalTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Equipamiento inicial:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge A o B: (A)Armadura de cuero, 2 dagas, 1
                        instrumento musical a tu elección, 1 pack de artista y
                        19 monedas de oro; o (B)90 monedas de oro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divImagen">
              <img
                src="http://localhost:5173/imagenes/general/BannerBardo.png"
                alt=""
              />
            </div>
          </div>
          <div className="divDescripcion">
            <h1>Descripción</h1>
            <p>
              Invocando la magia a través de la música, la danza y los versos,
              los bardos son expertos en inspirar a los demás, calmar heridas,
              descorazonar enemigos y crear ilusiones. Los bardos creen que el
              multiverso se creó mediante la palabra y que los restos de sus
              Palabras de la Creación aún resuenan y brillan en todos los planos
              de la existencia. La magia bárdica intenta aprovechar esas
              palabras, que trascienden cualquier idioma.
            </p>
            <p>
              Cualquier cosa puede inspirar una nueva canción o cuento, por lo
              que a los bardos les fascina casi todo. Se convierten en maestros
              de muchas cosas, como interpretar música, hacer magia y hacer
              bromas.
            </p>
            <p>
              Un bardo se pasa la vida viajando, recopilando sabiduría, contando
              historias y viviendo de la gratitud del público, como cualquier
              otro artista. Pero la profundidad de sus conocimientos y su
              dominio de la magia los distinguen de los demás.
            </p>
          </div>
          <div className="divInfo">
            <div className="divInfoCabecera">
              <h1>Características de bardo</h1>
              <div className="tablaOverflow">
                <div className="tablaProgresion">
                  <div className="filaMagiaExtra">
                    <div className="columnaMagiaExtra">
                      <p>Ranuras de Conjuros por nivel de conjuro</p>
                    </div>
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>Nivel</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>Bonificador de proficiencia</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Características de clase</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>Cargas de inspiración bardica</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>Trucos</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>Conjuros preparados</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>1</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>5</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>6</p>
                    </div>
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>1</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+2</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Inspiración bárdica(d6) y Lanzamiento de conjuros</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>2</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+2</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Canción de descanso y aprendiz de mucho</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>3</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+2</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Escoge una subclase y experiencia</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>6</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>4</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+2</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Mejora de caracteristicas</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>7</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>5</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+3</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>
                        Mejora de inspiración bárdica(d8) y fuente de
                        inspiración
                      </p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>8</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>6</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+3</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Caracteristica de subclase y contrahechizar</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>9</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>7</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+3</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>-</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>10</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>1</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>8</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+3</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Mejora de caracteristicas</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>11</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>9</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+4</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>-</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>12</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>1</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>10</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+4</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>
                        Mejora de inspiración bárdica(d10),experiencia y
                        secretos mágicos
                      </p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>13</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>-</p>
                    </div>
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>11</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+4</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>-</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>14</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>1</p>
                    </div>
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>12</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+4</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Mejora de caracteristicas</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>15</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>2</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 1:</h2>
              <h3>Inspiración bárdica</h3>
              <p>
                Inspira a un aliado a ir más allá de sus capacidades con tu
                actuación. Pueden añadir un 1d6 a su próxima tirada de ataque,
                chequeo de habilidad o tirada de salvación.
              </p>
              <p>Recarga: Descanso largo</p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 2</h2>
              <h3>Canción de descanso</h3>
              <p>Puedes realizar un descanso corto de forma instantánea</p>
              <h3>Aprendiz de mucho</h3>
              <p>
                Añade la mitad de tu bonificación de proficiencia (redondeada
                hacia abajo) a los chequeos de habilidad con lsoq ue no seas
                proficiente.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 3</h2>
              <h3>Escoge una subclase</h3>
              <h3>Experiencia</h3>
              <p>
                Ganas experiencia en 2 habilidades en las que seas competente
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 4</h2>
              <h3>Mejora de caracteristicas</h3>
              <p>
                Puedes aumentar una puntuación de habilidad a tu elección en 2,
                o puedes aumentar dos puntuaciones de habilidad a tu elección en
                1. Como es normal, no puedes aumentar una puntuación de
                habilidad por encima de 20 utilizando este rasgo.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 5</h2>
              <h3>fuente de inspiración</h3>
              <p>
                Recuperas todas tus cargas de inspiración bárdica tras un
                descanso largo o corto.
              </p>
              <h3>Mejora de inspiración bardica</h3>
              <p>Tus dados de inspiración bárdica son ahora un d8.</p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 6</h2>
              <h3>Caracteristica de subclase</h3>
              <h3>Contrahechizar</h3>
              <p>
                Tú y tus aliados en un radio de 30 pies tenéis ventaja en las
                tiradas de salvación contra ser encantado o asustado .
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 8</h2>
              <h3>Mejora de caracteristicas</h3>
              <p>
                Puedes aumentar una puntuación de habilidad a tu elección en 2,
                o puedes aumentar dos puntuaciones de habilidad a tu elección en
                1. Como es normal, no puedes aumentar una puntuación de
                habilidad por encima de 20 utilizando este rasgo.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 10</h2>
              <h3>Experiencia</h3>
              <p>
                Ganas experiencia en 2 habilidades mas en las que seas
                competente
              </p>
              <h3>Mejora de inspiración bárdica</h3>
              <p>Tus dados de inspiración bárdica son ahora un d10.</p>
              <h3>Secretos mágicos</h3>
              <p>Aprendes 2 conjuros de cualquier lista de conjuros </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 12</h2>
              <h3>Mejora de caracteristicas</h3>{" "}
              <p>
                Puedes aumentar una puntuación de habilidad a tu elección en 2,
                o puedes aumentar dos puntuaciones de habilidad a tu elección en
                1. Como es normal, no puedes aumentar una puntuación de
                habilidad por encima de 20 utilizando este rasgo.
              </p>
            </div>
            <h1>Subclases de bardo</h1>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Colegio del conocimiento</h1>
                  <div>
                    <img
                      src="http://localhost:5173/imagenes/general/logoBardoSub1.png"
                      alt=""
                    />
                    <h2>
                      Persigues la belleza y la verdad, recopilando
                      conocimientos desde tomos eruditos hasta cuentos de
                      campesinos, y utilizas tus dones para hechizar tanto al
                      público como a los enemigos.
                    </h2>
                    <img
                      className="imgBotonSubclase"
                      id="imgBotonSubclase1"
                      src="http://localhost:5173/imagenes/iconos/sumar.svg"
                      alt=""
                      onClick={() => {
                        const estado =
                          document.getElementById("divSubInferior1").style
                            .display;
                        if (estado == "none") {
                          document.getElementById(
                            "divSubInferior1"
                          ).style.display = "flex";
                          document.getElementById("imgBotonSubclase1").src =
                            "http://localhost:5173/imagenes/iconos/restar.svg";
                        } else {
                          document.getElementById(
                            "divSubInferior1"
                          ).style.display = "none";
                          document.getElementById("imgBotonSubclase1").src =
                            "http://localhost:5173/imagenes/iconos/sumar.svg";
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="divSubInferior"
                id="divSubInferior1"
                style={{ display: "none" }}
              >
                <div>
                  <h2>Nivel 3</h2>
                  <p>Ganas proficiencia en 3 habilidades</p>
                  <h3>Palabras cortantes</h3>
                  <p>
                    Puedes usa tu Reacción para distraer a una criatura que
                    pueda escucharte y minar su confianza. la criatura afectada
                    recibe un penalizador de un 1d6 a la tirada de ataque,
                    chequeo de habilidad o tirada de salvación de realice en ese
                    momento.
                  </p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Secretos Mágicos</h3>
                  <p>
                    Aprendes 2 conjuros de nivel 3 o inferior de cualquier lista
                    de conjuros.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Colegio del valor</h1>
                <div>
                  <img
                    src="http://localhost:5173/imagenes/general/logoBardoSub2.png"
                    alt=""
                  />
                  <h2>
                    Recorres la tierra para ser testigo y relatar las hazañas de
                    los poderosos, manteniendo vivo el recuerdo de los héroes
                    del pasado e inspirando a los héroes del futuro.
                  </h2>
                  <img
                    className="imgBotonSubclase"
                    id="imgBotonSubclase2"
                    src="http://localhost:5173/imagenes/iconos/sumar.svg"
                    alt=""
                    onClick={() => {
                      const estado =
                        document.getElementById("divSubInferior2").style
                          .display;
                      if (estado == "none") {
                        document.getElementById(
                          "divSubInferior2"
                        ).style.display = "flex";
                        document.getElementById("imgBotonSubclase2").src =
                          "http://localhost:5173/imagenes/iconos/restar.svg";
                      } else {
                        document.getElementById(
                          "divSubInferior2"
                        ).style.display = "none";
                        document.getElementById("imgBotonSubclase2").src =
                          "http://localhost:5173/imagenes/iconos/sumar.svg";
                      }
                    }}
                  />
                </div>
              </div>
              <div
                className="divSubInferior"
                id="divSubInferior2"
                style={{ display: "none" }}
              >
                <div>
                  <h2>Nivel 3</h2>
                  <p>
                    Ganas proficiencia con armas marciales, armadura mediana y
                    escudos.
                  </p>
                  <h3>Inspiración de combate</h3>
                  <p>
                    Tu inspiración bárdica recibe una mejora, lo que permite a
                    los aliados inspirados añadir una bonificación de daño a su
                    siguiente ataque con arma o una bonificación a su clase de
                    armadura durante un ataque.
                  </p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Ataque adicional</h3>
                  <p>
                    Puedes atacar dos veces, en lugar de una, siempre que
                    realices la acción atacar en tu turno.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Colegio de las espadas</h1>
                <div>
                  <img
                    src="http://localhost:5173/imagenes/general/logoBardoSub3.png"
                    alt=""
                  />
                  <h2>
                    Un guerrero muy entrenado y hábil, que utiliza su destreza
                    con las palabras y las armas para luchar y entretener a
                    partes iguales.
                  </h2>
                  <img
                    className="imgBotonSubclase"
                    id="imgBotonSubclase3"
                    src="http://localhost:5173/imagenes/iconos/sumar.svg"
                    alt=""
                    onClick={() => {
                      const estado =
                        document.getElementById("divSubInferior3").style
                          .display;
                      if (estado == "none") {
                        document.getElementById(
                          "divSubInferior3"
                        ).style.display = "flex";
                        document.getElementById("imgBotonSubclase3").src =
                          "http://localhost:5173/imagenes/iconos/restar.svg";
                      } else {
                        document.getElementById(
                          "divSubInferior3"
                        ).style.display = "none";
                        document.getElementById("imgBotonSubclase3").src =
                          "http://localhost:5173/imagenes/iconos/sumar.svg";
                      }
                    }}
                  />
                </div>
              </div>
              <div
                className="divSubInferior"
                id="divSubInferior3"
                style={{ display: "none" }}
              >
                <div>
                  <h2>Nivel 3</h2>
                  <p>Ganas proficiencia con cimittarra y armadura mediana.</p>
                  <h3>Artes de combate</h3>
                  <p>
                    Cuando intentas golpear a un enemigo puedes gastar un dado
                    de inpiración bárdica para añadir uno de los siguientes
                    efectos:
                  </p>
                  <p>
                    <b>Arte defensiva: </b>
                    Si consigues golpear al enemigo puedes ponerte en una
                    posición defensiva y aumentar tu clase de armadura en 4
                    durante un turno.
                  </p>
                  <p>
                    <b>Arte ofensiva: </b>
                    puedes atacar a dos enemigos al mismo tiempo
                  </p>
                  <p>
                    <b>Arte agil: </b>
                    Si consigues golpear al enemigo puedes empujarle 20 pies
                    hacia atras. Después, puedes teletransportarte cerca (area
                    de 10 pies) del objetivo.
                  </p>
                  <h3>Estilo de combate</h3>
                  <p>Escoge uno:</p>
                  <p>
                    <b>Duelista: </b>
                    Cuando empuñas un arma cuerpo a cuerpo que no es a dos manos
                    o es versátil, y ningún arma en la otra mano, obtienes un
                    bonificador +2 a las tiradas de daño con esa arma.
                  </p>
                  <p>
                    <b>Combate con dos armas: </b>
                    Cuando realizas un ataque con tu mano no dominante, puedes
                    sumar tu modificador de puntuación de habilidad al daño del
                    ataque.
                  </p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Ataque adicional</h3>
                  <p>
                    Puedes atacar dos veces, en lugar de una, siempre que
                    realices la acción atacar en tu turno.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
