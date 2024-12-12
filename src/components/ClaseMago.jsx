import "./HojaClases.css";
import "./TablaMago.css";
export default function () {
  return (
    <>
      {console.log("a")}
      <div className="divBody">
        <div className="divGeneral">
          <h1>MAGP</h1>
          <div className="divPrincipal">
            <div className="divTablaContenedor">
              <h1>Rasgos básicos del mago</h1>
              <div className="tablaOverflow">
                <div className="divTablaPrin">
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Habilidad principal:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Inteligencia</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Dado de puntos de golpe:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>D6 por nivel de mago</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con tiradas de salvación:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Inteligencia y sabiduría</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con habilidades:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge 2: Arcana, historia, perspicacia, investigación,
                        medicina, naturaleza o religión
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
                      <p>Ninguna</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin  finalTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Equipamiento inicial:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge A o B: (A) 2 dagas, 1 foco arcano, 1 toga, 1
                        libro de hechizos, 1 pack de escolar y 5 monedas de oro;
                        o (B)55 monedas de oro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divImagen">
              <img src="/imagenes/general/BannerHechicero.png" alt="" />
            </div>
          </div>
          <div className="divDescripcion">
            <h1>Descripción</h1>
            <p>
              Los magos se definen por su estudio exhaustivo del funcionamiento
              interno de la magia. Lanzan hechizos de fuego explosivo,
              relámpagos, engaños sutiles y transformaciones espectaculares. Su
              magia conjura monstruos de otros planos de existencia, vislumbra
              el futuro o forma barreras protectoras. Sus hechizos más poderosos
              transforman una sustancia en otra, hacen caer meteoritos del cielo
              o abren portales a otros mundos.
            </p>
            <p>
              La mayoría de los Magos comparten un enfoque erudito de la magia.
              Examinan los fundamentos teóricos de la magia, en especial la
              categorización de los hechizos en escuelas mágicas. Hechiceros de
              renombre como Bigby, Tasha, Mordenkainen y Yolande se han basado
              en sus estudios para inventar hechizos emblemáticos que ahora se
              utilizan en todo el multiverso.
            </p>
            <p>
              Lo más cerca que un Mago puede estar de una vida ordinaria es
              trabajando como sabio o conferenciante. Otros Magos venden sus
              servicios como consejeros, sirven en fuerzas militares o se
              dedican a la delincuencia o la dominación.
            </p>{" "}
            <p>
              Pero la atracción del conocimiento llama incluso a los magos menos
              aventureros a abandonar la seguridad de sus bibliotecas y
              laboratorios para adentrarse en ruinas y ciudades perdidas. La
              mayoría de los magos creen que sus homólogos de civilizaciones
              antiguas conocían secretos de la magia que se han perdido en el
              tiempo, y que descubrirlos podría abrirles el camino a un poder
              superior al de cualquier magia disponible en la era actual.
            </p>
          </div>
          <div className="divInfo">
            <div className="divInfoCabecera">
              <h1>Características de hechicero</h1>
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
                      <p>Cargas de Recuperación Arcana</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>Trucos</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>Conjuros aprendidos</p>
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
                      <p>Lanzamiento de conjuros y recuperación Arcana</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>1</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>2</p>
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
                      <p>Escoge una subclase </p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>1</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo3Prog">
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
                      <p>-</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>4</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>4</p>
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
                      <p>2</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>5</p>
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
                      <p>-</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo3Prog">
                      <p>6</p>
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
                      <p>Caracteristica de subclase</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>3</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>5</p>
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
                      <p>5</p>
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
                      <p>4</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>5</p>
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
                      <p>5</p>
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
                      <p>Caracteristica de subclase</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>5</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>6</p>
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
                      <p>6</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>6</p>
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
                      <p>6</p>
                    </div>
                    <div className="columnaInfo2Prog">
                      <p>6</p>
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
                      <p>1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 1:</h2>
              <h3>Recuperación Arcana</h3>
              <p>
                Por cada carga esta habilidad te permite recuperar la mitad de
                tu nivel de mago, redondeado hacia arriba, en ranuras de
                conjuro.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 2</h2>
              <h3>Escoge una subclase</h3>
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
              <h2>Nivel 6</h2>
              <h3>Caracteristica de subclase</h3>
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
              <h3>Caracteristica de subclase</h3>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 12</h2>
              <h3>Mejora de caracteristicas</h3>
              <p>
                Puedes aumentar una puntuación de habilidad a tu elección en 2,
                o puedes aumentar dos puntuaciones de habilidad a tu elección en
                1. Como es normal, no puedes aumentar una puntuación de
                habilidad por encima de 20 utilizando este rasgo.
              </p>
            </div>
            <h1>Subclases de mago</h1>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Escuela de Abjuración</h1>
                  <div>
                    <img src="/imagenes/general/logoHechiceroSub1.png" alt="" />
                    <h2>
                      Tuerces y endureces el Tejido para crear barreras arcanas
                      que te protejan a ti y a los demás.
                    </h2>
                    <img
                      className="imgBotonSubclase"
                      id="imgBotonSubclase1"
                      src="/imagenes/iconos/sumar.svg"
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
                            "/imagenes/iconos/restar.svg";
                        } else {
                          document.getElementById(
                            "divSubInferior1"
                          ).style.display = "none";
                          document.getElementById("imgBotonSubclase1").src =
                            "/imagenes/iconos/sumar.svg";
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
                  <h2>Nivel 2</h2>
                  <h3>Custodio arcano</h3>
                  <p>
                    La magia residual de tus conjuros forma una barrera a tu
                    alrededor que te protege de cualquier daño. Cada vez que
                    lanzas un conjuro de abjuración, excepto "escudo", la
                    intensidad de la protección aumenta en una cantidad igual a
                    el nivel del conjuro, hasta un máximo de 2 veces tu nivel de
                    Mago. Cada vez que recibes daño, el custodio bloquea una
                    cantidad de daño igual a su intensidad, y su intensidad
                    disminuye en 1. Después de cada Reposo Largo, la intensidad
                    de la protección se restablece y vuelve a ser igual a tu
                    nivel de Mago.
                  </p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Custodio proyectado</h3>
                  <p>
                    Como reacción, cuando un aliado cercano recibe daño, puedes
                    sacrificar tu custodio arcano para reducir el daño que
                    recibe tu aliado, y la intensidad del custodio se reduce en
                    1.
                  </p>
                </div>
                <div>
                  <h2>Nivel 10</h2>
                  <h3>Abjuración Mejorada</h3>
                  <p>
                    Cada vez que tomas un Descanso Corto, la intensidad de tu
                    custodio arcano aumenta en una cantidad igual a tu nivel de
                    Mago.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Escuela de Evocación</h1>
                <div>
                  <img src="/imagenes/general/logoHechiceroSub2.png" alt="" />
                  <h2>
                    Se te conoce como un evocador, que camina ileso a través del
                    caos desenfrenado al que llamas.
                  </h2>
                  <img
                    className="imgBotonSubclase"
                    id="imgBotonSubclase2"
                    src="/imagenes/iconos/sumar.svg"
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
                          "/imagenes/iconos/restar.svg";
                      } else {
                        document.getElementById(
                          "divSubInferior2"
                        ).style.display = "none";
                        document.getElementById("imgBotonSubclase2").src =
                          "/imagenes/iconos/sumar.svg";
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
                  <h2>Nivel 2</h2>
                  <h3>Esculpir conjuros</h3>
                  <p>
                    Creas espacios de seguridad con tus conjuros de evocación.
                    Los aliados tienen éxito automáticamente en sus tiradas de
                    salvación y no reciben daño de estos hechizos.
                  </p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Trucos potentes</h3>
                  <p>
                    Tus trucos se vuelven más difíciles de evadir. Cuando una
                    criatura supera su tirada de salvación contra uno de tus
                    trucos, esta sigue sufriendo la mitad del daño del truco,
                    pero no sufre efectos adicionales.
                  </p>
                </div>
                <div>
                  <h2>Nivel 10</h2>
                  <h3>Evocación potenciada</h3>
                  <p>
                    Tu dominio de la magia de evocación se ha reforzado, y
                    puedes añadir tu Inteligencia a las tiradas de daño con
                    cualquier hechizo de Evocación.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Escuela de ilusionismo</h1>
                <div>
                  <img src="/imagenes/general/logoHechiceroSub3.png" alt="" />
                  <h2>
                    Eres especialista en desenredar y volver a coser el tejido
                    de la realidad para engañar a incautos, crédulos y
                    monstruos.
                  </h2>
                  <img
                    className="imgBotonSubclase"
                    id="imgBotonSubclase3"
                    src="/imagenes/iconos/sumar.svg"
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
                          "/imagenes/iconos/restar.svg";
                      } else {
                        document.getElementById(
                          "divSubInferior3"
                        ).style.display = "none";
                        document.getElementById("imgBotonSubclase3").src =
                          "/imagenes/iconos/sumar.svg";
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
                  <h2>Nivel 2</h2>
                  <h3>Ilusión menor mejorada</h3>
                  <p>
                    Aprendes el truco ilusión menor y puedes lanzarlo como
                    acción adicional. Puedes permanecer oculto mientras lanzas
                    este truco. Ademas tambien puedes lanzarlo mientras estás
                    silenciado.
                  </p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Ver Invisibilidad</h3>
                  <p>
                    Una vez por Descanso Corto, como acción, puedes lanzar el
                    hechizo "ver invisibilidad" sin consumir un hueco de
                    conjuro.
                  </p>
                </div>
                <div>
                  <h2>Nivel 10</h2>
                  <h3>Yo ilusorio</h3>
                  <p>
                    Como reacción, creas mágicamente un duplicado ilusorio de ti
                    mismo cuando te atacan, haciendo que el ataque falle. Tras
                    su uso, esta habilidad no puede utilizarse hasta después de
                    un descanso corto.
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
