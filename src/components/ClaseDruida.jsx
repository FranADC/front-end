import "./hojaClases.css";
import "./tablaDruida.css";
export default function () {
  return (
    <>
      {console.log("a")}
      <div className="divBody">
        <div className="divGeneral">
          <h1>DRUIDA</h1>
          <div className="divPrincipal">
            <div className="divTablaContenedor">
              <h1>Rasgos básicos del druida</h1>
              <div className="tablaOverflow">
                <div className="divTablaPrin">
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Habilidad principal:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Sabiduría</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Dado de puntos de golpe:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>D8 por nivel de druida</p>
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
                        kit de herbolista y 2 habilidades a escoger de las
                        siguientes: Trato con animales, arcana, perspicacia,
                        medicina, naturaleza, percepción, religión o
                        supervivencia.
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
                      <p>Armaduras ligeras y escudos</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin  finalTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Equipamiento inicial:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge A o B: (A)Armadura de cuero, 1 escudo, 1 hoz, 1
                        foco druídico, 1 pack de explorador y 9 monedas de oro;
                        o (B)50 monedas de oro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divImagen">
              <img
                src="http://localhost:5173/imagenes/general/BannerDruida.png"
                alt=""
              />
            </div>
          </div>
          <div className="divDescripcion">
            <h1>Descripción</h1>
            <p>
              Los druidas pertenecen a órdenes ancestrales que invocan las
              fuerzas de la naturaleza. Aprovechando la magia de los animales,
              las plantas y los cuatro elementos, los druidas curan, se
              transforman en animales y ejercen la destrucción elemental.
            </p>
            <p>
              Los druidas, que veneran la naturaleza por encima de todo,
              obtienen su magia de la naturaleza, de una deidad de la naturaleza
              o de ambas, y suelen unirse a otros druidas para celebrar ritos
              que marcan el paso de las estaciones y otros ciclos naturales.
            </p>
            <p>
              Los druidas se preocupan por el delicado equilibrio ecológico que
              sustenta la vida vegetal y animal y por la necesidad de que las
              personas vivan en armonía con la naturaleza. Los druidas suelen
              custodiar lugares sagrados o vigilar regiones de naturaleza
              virgen, pero cuando surge un peligro importante, los druidas
              adoptan un papel más activo como aventureros que combaten la
              amenaza.
            </p>
          </div>
          <div className="divInfo">
            <div className="divInfoCabecera">
              <h1>Características de druida</h1>
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

                    <div className="columnaInfo2Prog">
                      <p>Trucos</p>
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
                      <p>Lanzamiento de conjuros</p>
                    </div>

                    <div className="columnaInfo2Prog">
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
                      <p>Escoge una subclase y forma salvaje</p>
                    </div>

                    <div className="columnaInfo2Prog">
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

                    <div className="columnaInfo2Prog">
                      <p>3</p>
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
                      <p>Mejora de caracteristicas y mejora de forma salvaje</p>
                    </div>

                    <div className="columnaInfo2Prog">
                      <p>4</p>
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
                      <p>Golpe salvaje</p>
                    </div>

                    <div className="columnaInfo2Prog">
                      <p>4</p>
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

                    <div className="columnaInfo2Prog">
                      <p>4</p>
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

                    <div className="columnaInfo2Prog">
                      <p>4</p>
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
                      <p>Mejora de caracteristicas y mejora de forma salvaje</p>
                    </div>

                    <div className="columnaInfo2Prog">
                      <p>4</p>
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

                    <div className="columnaInfo2Prog">
                      <p>4</p>
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
                      <p>Caracteristica de subclase y mejora de foma salvaje</p>
                    </div>

                    <div className="columnaInfo2Prog">
                      <p>5</p>
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

                    <div className="columnaInfo2Prog">
                      <p>5</p>
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

                    <div className="columnaInfo2Prog">
                      <p>5</p>
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
              <h3>Lanzamiento de conjuros</h3>
              <p>
                <b>Conjuros preparados: </b>
                Escoge un numero de conjuros igual a tu nivel de druida + tu
                modificador de sabiduría
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 2</h2>
              <h3>Escoge una subclase</h3>
              <h3>Forma salvaje</h3>
              <p>
                Puedes transformate magicamente en un gato, un lobo o una araña.
                Mientras estás en forma animal, no puedes hablar ni lanzar
                Conjuros. Adoptas los atributos físicos de tu forma de bestia,
                manteniendo tu personalidad tu inteligencia, sabiduría y tu
                carisma.
              </p>
              <p>
                Tienes 2 cargas de forma salvaje las cuales se recuperan en un
                descanso corto o largo
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 4</h2>
              <h3>Mejora de forma salvaje</h3>
              <p>Ahora tambien puedes transformarte en un ñu</p>
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
              <h3>Golpe salvaje</h3>
              <p>
                Puedes realizar un ataque adicional tras realizar un golpe
                desarmado mientras estés en forma salvaje.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 6</h2>
              <h3>Caracteristica de subclase</h3>
              <h3>Mejora de forma salvaje</h3>
              <p>
                Ahora tambien puedes transformarte en una pantera y un
                oso-lechuza
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
              <h3>Caracteristica de subclase</h3>
              <h3>Mejora de forma salvaje</h3>
              <p>Ahora tambien puedes transformarte en un dilophosaurus</p>
              <h3>Mejora de golpe salvaje</h3>
              <p>
                Puedes realizar dos ataques adicionales tras realizar un golpe
                desarmado mientras estas en forma Salvaje.
              </p>
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
            <h1>Subclases de druida</h1>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Círculo de la vida</h1>
                  <div>
                    <img
                      src="http://localhost:5173/imagenes/general/logoDruidaSub1.png"
                      alt=""
                    />
                    <h2>
                      Canalizas la magia natural que fluye por la tierra y las
                      criaturas que hay sobre ella para lanzar poderosa magia
                      druídica.
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
                  <h2>Nivel 2</h2>
                  <h3>Recuperación natural</h3>
                  <p>
                    Una vez por dia, mientras estes fuera de combate, puedes
                    invocar el poder de la naturaleza para recuperar huecos de
                    conjuro con un valor igual a tu nivel de druida.
                  </p>
                  <p>Tambien puedes escoger un truco de druida extra.</p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Zancada de la tierra: terreno difícil</h3>
                  <p>
                    Te has convertido en un experto en moverte por la
                    naturaleza. El terreno difícil ya no te ralentiza.
                  </p>
                  <h3>Zancada de la tierra: plantas</h3>
                  <p>
                    Las superficies vegetales con espinas o peligros similares
                    ya no te dañan y tienes ventaja en tiradas de salvación
                    contra plantas creadas mágicamente para impedir tu
                    movimiento.
                  </p>
                </div>
                <div>
                  <h2>Nivel 10</h2>
                  <h3>Pupilo de la naturaleza</h3>
                  <p>
                    Los elementales y los feéricos no pueden hechizarte ni
                    asustarte y la enfermedad y el veneno ya no te afectan.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Círculo de la Luna</h1>
                  <div>
                    <img
                      src="http://localhost:5173/imagenes/general/logoDruidaSub2.png"
                      alt=""
                    />
                    <h2>
                      Tu forma es mutable como la luna mercurial, lo que te
                      permite transformarte en enormes bestias e incluso en
                      elementales primigenios.
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
              </div>
              <div
                className="divSubInferior"
                id="divSubInferior2"
                style={{ display: "none" }}
              >
                <div>
                  <h2>Nivel 2</h2>
                  <h3>Remiendo lunar</h3>
                  <p>
                    Puedes usar huecos de conjuros para curarte mientras estas
                    en forma salvaje.
                  </p>
                  <p>
                    Te curas una cantidad de d8 igual a el nivel del hueco de
                    conjuro que usas.
                  </p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Golpe primordial</h3>
                  <p>
                    Mientras estés en forma de bestia, tus ataques cuentan como
                    mágicos a efectos de superar la resistencia y la inmunidad
                    al daño no mágico.
                  </p>
                </div>
                <div>
                  <h2>Nivel 10</h2>
                  <h3>Forma sSalvaje elemental</h3>
                  <p>
                    Puedes gastar dos usos de Forma salvaje al mismo tiempo para
                    transformarte en un elemental de aire, un elemental de
                    tierra, un elemental de fuego o un elemental de agua.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Círculo de las esporas</h1>
                  <div>
                    <img
                      src="http://localhost:5173/imagenes/general/logoDruidaSub3.png"
                      alt=""
                    />
                    <h2>
                      Considerando la muerte, la necrosis, el crecimiento
                      fúngico y la esporulación como una parte más de la vida,
                      puedes manipular esas esporas para aumentarte y dañar a
                      tus enemigos.
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
              </div>
              <div
                className="divSubInferior"
                id="divSubInferior3"
                style={{ display: "none" }}
              >
                <div>
                  <h2>Nivel 2</h2>
                  <h3>Entidad simbiótica</h3>
                  <p>
                    Puedes usar una carga de forma salvaje para liberar una nube
                    de esporas a tu alrededor. Cuando haces esto obtienes los
                    siguientes beneficios:
                    <ul>
                      <li>
                        Obtienes 4 puntos de vida temporales por nivel de druida
                        que tengas
                      </li>
                      <li>
                        Inflinges 1d6 de daño necrotico extra cuando golpeas a
                        un enemigo con un ataques con armas y desarmados
                      </li>
                    </ul>
                    <p>
                      Este efecto termina cuando pierdes todos los puntos de
                      vida temporales
                    </p>
                  </p>
                  <p>Tambien obtienes el truco "Toque helado".</p>
                </div>
                <div>
                  <h2>Nivel 6</h2>
                  <h3>Infestación fúngica</h3>
                  <p>
                    Como eeacción apunta a un cadáver a 30 pies de ti, que sea
                    de una bestia o un humanoide, y levantalo como un zombi
                    hasta el siguiente descanso largo.
                  </p>
                  <p>
                    Tienes 4 cargas de esta caracteristica que se recargan cada
                    descanso largo
                  </p>
                </div>
                <div>
                  <h2>Nivel 10</h2>
                  <h3>Propagación de esporas</h3>
                  <p>
                    Cuando activas tu "entidad simbiótica" puedes crear, a 30
                    pies de ti, una nube de esporas con un area de 20 pies.
                  </p>
                  <p>
                    Cuando un enemigo empieza su turno en la nube recibe 2d8 de
                    daño necrotico.
                  </p>
                  <p>
                    Este efecto termina cuando "entidad simbiótica" termina.
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
