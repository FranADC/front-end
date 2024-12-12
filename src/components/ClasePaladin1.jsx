import "./HojaClases.css";
import "./TablaPaladin.css";
export default function () {
  return (
    <>
      {console.log("a")}
      <div className="divBody">
        <div className="divGeneral">
          <h1>PALADÍN</h1>
          <div className="divPrincipal">
            <div className="divTablaContenedor">
              <h1>Rasgos básicos del paladín</h1>
              <div className="tablaOverflow">
                <div className="divTablaPrin">
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Habilidad principal:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Fuerza y carisma</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Dado de puntos de golpe:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>D10 por nivel de paladín</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con tiradas de salvación:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Sabiduría y carisma</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con habilidades:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        escoge 2: Atleticas, perspicacia, intimidación,
                        medicina, persuasión o religión.
                      </p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con armas:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Armas simples y marciales</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con armaduras:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Armaduras ligeras, medianas, pesadas y escudos</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin  finalTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Equipamiento inicial:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge A o B: (A)Cota de malla, 1 escudo, 1 espada
                        larga, 6 javalinas, 1 simbolo sagrado, 1 pack de
                        sacerdote y 9 monedas de oro; o (B)150 monedas de oro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divImagen">
              <img src="/imagenes/general/BannerPaladin.png" alt="" />
            </div>
          </div>
          <div className="divDescripcion">
            <h1>Descripción</h1>
            <p>
              Los paladines están unidos por su juramento de luchar contra las
              fuerzas de la aniquilación y la corrupción. Ya sea ante el altar
              de un dios, en un claro sagrado ante los espíritus de la
              naturaleza o en un momento de desesperación y dolor con los
              muertos como únicos testigos, el juramento de un Paladín es un
              vínculo poderoso. Es una fuente de poder que convierte a un
              guerrero devoto en un campeón bendito.
            </p>
            <p>
              Los paladines se entrenan para aprender las habilidades del
              combate, dominando una gran variedad de armas y armaduras. Aun
              así, sus habilidades marciales son secundarias frente al poder
              mágico que ejercen: poder para curar a los heridos, golpear a sus
              enemigos y proteger a los indefensos y a los que luchan a su lado.
            </p>
            <p>
              Casi por definición, la vida de un Paladín es una vida de
              aventuras, ya que cada Paladín vive en primera línea de la lucha
              cósmica contra la aniquilación. Los combatientes son bastante
              raros entre las filas de los ejércitos de un mundo, pero aún son
              menos los que pueden reclamar la llamada de un Paladín. Cuando
              reciben la llamada, estos benditos abandonan sus ocupaciones
              anteriores y toman las armas y la magia.
            </p>
          </div>
          <div className="divInfo">
            <div className="divInfoCabecera">
              <h1>Características de paladín</h1>
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
                      <p>Cargas de imponer las manos</p>
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
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>1</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+2</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>
                        Escoge una subclase, sentidos divinos, imponer manos y
                        canalizar divinidad
                      </p>
                    </div>

                    <div className="columnaInfo1Prog">
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
                      <p>
                        Estilo de combate, lanzamiento de conjuros y castigo
                        divino
                      </p>
                    </div>

                    <div className="columnaInfo1Prog">
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
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>3</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+2</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Caracteristica de subclase y salud divina</p>
                    </div>

                    <div className="columnaInfo1Prog">
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

                    <div className="columnaHuecoProg">
                      <p>3</p>
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
                      <p>Ataque extra</p>
                    </div>

                    <div className="columnaInfo1Prog">
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
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>6</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+3</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Aura de protección</p>
                    </div>

                    <div className="columnaInfo1Prog">
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
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>7</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+3</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Caracteristica de subclase</p>
                    </div>

                    <div className="columnaInfo1Prog">
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

                    <div className="columnaHuecoProg">
                      <p>4</p>
                    </div>
                    <div className="columnaHuecoProg">
                      <p>3</p>
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
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>10</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+4</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Aura de valor</p>
                    </div>

                    <div className="columnaInfo1Prog">
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
                  </div>
                  <div className="filaTablaProg">
                    <div className="columnaNivelProg">
                      <p>11</p>
                    </div>
                    <div className="columnaProficienciaProg">
                      <p>+4</p>
                    </div>
                    <div className="columnaCaracteristicasProg">
                      <p>Castigo divino mejorado</p>
                    </div>

                    <div className="columnaInfo1Prog">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 1:</h2>
              <h3>Escoge una subclase</h3>
              <h3>Sentidos divinos</h3>
              <p>
                Gasta una acción adicional para obtener ventaja en las tiradas
                de ataque contra celestiales, demonios y no-muertos.
              </p>
              <p>Recarga: Descanso corto.</p>
              <h3>Imponer manos</h3>
              <p>
                Utiliza tu toque bendito para curar a una criatura. Si utilizas
                una carga le curarias un total de 2 x tu nivel de paladín, en
                caso de usar dos cargas de golpe le curarias 4 x tu nivel de
                paladín o podrias curarla de todas las enfermedades y venenos.
              </p>
              <h3>Canalizar divinidad</h3>
              <p>
                Una vez por descanso corto puedes invocar una magia divina para
                realizar un gran proeza. El tipo de proezas que puedes hacer
                vienen determinadas por tu subclase
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 2</h2>
              <h3>Estilo de combate</h3>
              <p>Escoge 1:</p>
              <p>
                <b>Protección: </b>Cuando tienes un escudo equipado, puedes
                impones desventaja a un enemigo que ataque a uno de tus aliados
                cuando estés a menos de 5 pies de ambos. Debes poder ver al
                enemigo.
              </p>
              <p>
                <b>Defensa: </b>Obtienes un bonificador +1 a la clase de
                armadura mientras lleves una armadura.
              </p>
              <p>
                <b>Duelista: </b>Cuando empuñas un arma cuerpo a cuerpo en una
                mano y no tienes ningún arma en la otra, obtienes un bonificador
                +2 a las tiradas de daño con esa arma.
              </p>
              <p>
                <b>Combate con dos armas: </b>Cuando realizas un ataque con el
                arma en tu mano no dominate, puedes sumar tu modificador de
                puntuación de habilidad al daño del ataque.
              </p>
              <h3>Lanzamiento de conjuros</h3>
              <p>
                <b>Conjuros preparados: </b>
                Escoge un numero de conjuros igual a tu nivel de
                paladín/2(redondeado hacia arriba) + tu modificador de carisma.
              </p>
              <h3>Castigo divino</h3>
              <p>
                Cuando golpeas a una criatura con un ataque de arma cuerpo a
                cuerpo, puedes gastar una ranura de conjuro para infligir daño
                radiante al objetivo, además del daño del arma. El daño extra es
                de 2d8 por una ranura de conjuro de 1º nivel, más 1d8 por cada
                nivel de conjuro superior al 1º, hasta un máximo de 5d8. El daño
                aumenta en 1d8 si el objetivo es un no muerto o un demonio,
                hasta un máximo de 6d8.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 3</h2>
              <h3>Caracteristica de subclase</h3>
              <h3>Salud divina</h3>
              <p>
                La magia divina que fluye en tu interior impide que las
                enfermedades te afecten.
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
              <h3>Ataque Extra</h3>
              <p>
                Puedes atacar dos veces, en lugar de una, siempre que realices
                la acción atacar en tu turno.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 6</h2>
              <h3>Aura de protección</h3>
              <p>
                Tú y los aliados cercanos ganáis un bonificador a los
                lanzamientos de salvación igual a tu modificador de carisma.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 7</h2>
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
              <h3>Aura de valor</h3>
              <p>
                Tú y los aliados cercanos no podéis ser asustados. El aura
                desaparece si caes inconsciente.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 11</h2>
              <h3>Castigo divino mejorado</h3>
              <p>
                Los ataques con armas cuerpo a cuerpo infligen 1d8 puntos de
                daño radiante extra.
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
            <h1>Subclases de paladín</h1>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Juramento de los Antiguos</h1>
                  <div>
                    <img src="/imagenes/general/logoPaladinSub1.png" alt="" />
                    <h2>
                      Luchas del lado de la luz en la lucha cósmica contra la
                      oscuridad para preservar la santidad de la vida y la
                      belleza de la naturaleza.
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
                  <h2>Nivel 1</h2>
                  <h3>Canalizar divinidad: Resplandor curativo</h3>
                  <p>
                    Cúrate a ti mismo y a todos los aliados a 30 pies un total
                    de: (tu bonificador de competencia + tu nivel de paladín +
                    tu modificador de carisma)x2 puntos de golpe.
                  </p>
                </div>
                <div>
                  <h2>Nivel 3</h2>
                  <h3>Canalizar divinidad: Ira de la naturaleza</h3>
                  <p>
                    Invoca fuerzas primigenias para inmovilizar a un enemigo.
                    Los ataques a enemigos inmovilizados tienen ventaja
                  </p>
                  <h3>Canalizar divinidad: Repeler a los infieles</h3>
                  <p>
                    Canaliza tu Juramento utilizando palabras antiguas para
                    repeler a los feéricos y los demonios cercanos.
                  </p>
                </div>
                <div>
                  <h2>Nivel 7</h2>
                  <h3>Aura de protección</h3>
                  <p>
                    Tú y los aliados cercanos tenéis resistencia al daño de
                    conjuros. El aura desaparece si caes inconsciente.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Juramento de la devoción</h1>
                  <div>
                    <img src="/imagenes/general/logoPaladinSub2.png" alt="" />
                    <h2>
                      Siguiendo el ideal del caballero de brillante armadura,
                      actúas con honor y virtud para proteger a los débiles y
                      perseguir el bien mayor.
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
              </div>
              <div
                className="divSubInferior"
                id="divSubInferior2"
                style={{ display: "none" }}
              >
                <div>
                  <h2>Nivel 1</h2>
                  <h3>Canalizar divinidad: Reprensión sagrada</h3>
                  <p>
                    Invoca tu juramento para otorgarte un aura vengativa que
                    inflige 1d4 de radiante a cualquiera que te alcance.
                  </p>
                </div>
                <div>
                  <h2>Nivel 3</h2>
                  <h3>Canalizar divinidad: Arma sagrada</h3>
                  <p>
                    Usando una acción, puedes convertir tu arma en un arma
                    sagrada. añade tu modificador de carisma a las tiradas de
                    ataque de tu arma, la cual además, emite una luz brillante
                    en un area de 15 pies.
                  </p>
                  <h3>Canalizar divinidad: Repeler a lo profano</h3>
                  <p>
                    Repele a los muertos vivientes y demonios cercanos, lo
                    cuales, se ven obligados a huir y no pueden acercarse a ti.
                  </p>
                </div>
                <div>
                  <h2>Nivel 7</h2>
                  <h3>Aura de devoción</h3>
                  <p>
                    Ni tú ni los aliados cercanos podéis ser encantados. El aura
                    desaparece si caes inconsciente.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Juramento de la venganza</h1>
                  <div>
                    <img src="/imagenes/general/logoPaladinSub3.png" alt="" />
                    <h2>
                      Has dejado de lado incluso tu propia pureza para enderezar
                      entuertos e impartir justicia a quienes han cometido los
                      pecados más graves.
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
              </div>
              <div
                className="divSubInferior"
                id="divSubInferior3"
                style={{ display: "none" }}
              >
                <div>
                  <h2>Nivel 1</h2>
                  <h3>Canalizar divinidad: Resplandor curativo</h3>
                  <p>
                    Cúrate a ti mismo y a todos los aliados a 30 pies un total
                    de: (tu bonificador de competencia + tu nivel de paladín +
                    tu modificador de carisma)x2 puntos de golpe.
                  </p>
                </div>
                <div>
                  <h2>Nivel 3</h2>
                  <h3>Canalizar divinidad: Abjurar al enemigo</h3>
                  <p>
                    Utiliza una acción para asustar a un enemigo.Los demonios y
                    no-muertos tienen desventaja en esta tirada de salvación.
                  </p>
                  <h3>Canalizar divinidad: Voto de enemistad</h3>
                  <p>
                    Gana ventaja en las tiradas de ataque contra un enemigo.
                  </p>
                </div>
                <div>
                  <h2>Nivel 7</h2>
                  <h3>Vengador implacable</h3>
                  <p>
                    Si golpeas a un enemigo con un Ataque de Oportunidad, tu
                    velocidad de movimiento aumenta en 15 pies en tu siguiente
                    turno. Este movimiento no provoca más ataques de
                    oportunidad.
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
