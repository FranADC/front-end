import "./HojaClases.css";
import "./TablaExplorador.css";
export default function () {
  return (
    <>
      {console.log("a")}
      <div className="divBody">
        <div className="divGeneral">
          <h1>EXPLORADOR</h1>
          <div className="divPrincipal">
            <div className="divTablaContenedor">
              <h1>Rasgos básicos del explorador</h1>
              <div className="tablaOverflow">
                <div className="divTablaPrin">
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Habilidad principal:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Destreza y sabiduría</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Dado de puntos de golpe:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>D10 por nivel de explorador</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con tiradas de salvación:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Fuerza y destreza</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con habilidades:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        escoge 3: Trato con animales, atleticas, perspicacia,
                        investigación, naturaleza, percepción, sigilo o
                        supervivencia.
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
                      <p>Armaduras ligeras, medianas y escudos</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin  finalTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Equipamiento inicial:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge A o B: (A)Armadura de cuero, 1 cimitarra, 1
                        espada corta, 1 arco largo, 20 flechas, 1 carcaj, foco
                        druídico, 1 pack de explorador y 7 monedas de oro; o
                        (B)150 monedas de oro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divImagen">
              <img src="/imagenes/general/BannerExplorador.png" alt="" />
            </div>
          </div>
          <div className="divDescripcion">
            <h1>Descripción</h1>
            <p>
              Lejos de las bulliciosas ciudades, entre los árboles de bosques
              sin caminos y a través de amplias llanuras, los Rangers mantienen
              su interminable vigilancia en la naturaleza salvaje. Los Rangers
              aprenden a rastrear a su presa como lo hace un depredador,
              moviéndose sigilosamente por la naturaleza y escondiéndose entre
              la maleza y los escombros.
            </p>
            <p>
              Gracias a su conexión con la naturaleza, los Rangers también
              pueden lanzar hechizos que aprovechan los poderes primigenios de
              la naturaleza salvaje. Los talentos y la magia de un Ranger se
              perfeccionan con un enfoque mortal para proteger al mundo de los
              estragos de monstruos y tiranos.
            </p>
          </div>
          <div className="divInfo">
            <div className="divInfoCabecera">
              <h1>Características de explorador</h1>
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
                      <p>Conjuros conocidos</p>
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
                      <p>Astuto</p>
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
                      <p>Estilo de combate y lanzamiento de conjuros</p>
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
                      <p>Escoge una subclase</p>
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
                      <p>Nómada</p>
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
                      <p>Caracteristica de subclase </p>
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
                      <p>Mejora de caracteristicas y zancada de la tierra</p>
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
                      <p>Incansable y ocultarse a plena vista</p>
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
                      <p>Caracteristica de subclase</p>
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
              <h3>Astuto</h3>
              <p>
                Elige una de tus habilidades. Tu bonificador de competencia se
                duplica para cualquier chequeo de habilidad que realices
                utilizando la habilidad elegida. También puedes hablar, leer y
                escribir 2 idiomas adicionales a tu elección.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 2</h2>
              <h3>Estilo de combate</h3>
              <p>Escoge 1:</p>
              <p>
                <b>Arqueria: </b>Obtienes un bonificador +2 a las tiradas de
                ataque con armas a distancia.
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
            </div>
            <div className="divInfoFila">
              <h2>Nivel 3</h2>
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
              <h2>Nivel 5</h2>
              <h3>Ataque Extra</h3>
              <p>
                Puedes atacar dos veces, en lugar de una, siempre que realices
                la acción atacar en tu turno.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 6</h2>
              <h3>Nómada</h3>
              <p>
                Tu velocidad al caminar aumenta en 5 pies, y ganas una velocidad
                de escalada y una velocidad de nado iguales a tu velocidad al
                caminar.
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
              <h3>Zancada de la tierra: terreno difícil </h3>
              <p>
                Te has convertido en un experto en moverte por la naturaleza. El
                terreno difícil ya no te ralentiza.
              </p>
              <h3>Zancada de la tierra: plantas</h3>
              <p>
                Las superficies vegetales con espinas o peligros similares ya no
                te dañan y tienes ventaja en tiradas de salvación contra plantas
                creadas mágicamente para impedir tu movimiento.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 10</h2>
              <h3>Incansable</h3>
              <p>
                Como acción, puedes otorgarte un número de puntos de golpe
                temporales igual a 1d8 + tu modificador de Sabiduría (mínimo 1
                punto de golpe temporal). Puedes usar esta acción un número de
                veces igual a tu bonificador de competencia, y recuperas todos
                los usos gastados cuando terminas un descanso largo.
              </p>
              <h3>Ocultarse a plena vista</h3>
              <p>
                Puedes intentar esconderte apretándote contra una superficie
                sólida, como un árbol o una pared, que sea al menos tan alta y
                ancha como tú. Obtienes un bonificador +10 a los chequeos de
                Destreza (Sigilo) mientras permanezcas allí sin moverte ni
                realizar acciones. En cuanto te muevas o realices una acción o
                reacción, debes camuflarte de nuevo para obtener este beneficio.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 11</h2>
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
            <h1>Subclases de explorador</h1>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Cazador</h1>
                  <div>
                    <img
                      src="/imagenes/general/logoExploradorSub1.png"
                      alt=""
                    />
                    <h2>
                      Buscas las presas más peligrosas de Faerûn, desde dragones
                      ancestrales hasta enormes hordas de no-muertos, y destacas
                      matándolos a todos.
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
                  <h2>Nivel 3</h2>
                  <h3>La presa del cazador</h3>
                  <p>
                    Te especializas en la lucha contra amenazas específicas.
                    Elige una de las siguientes características:
                  </p>
                  <div className="divTablaPrin">
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Cazador de colosos:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Una vez por turno, tus ataques con armas infligir un
                          daño físico adicional de 1d8 si el objetivo está por
                          debajo de su puntos de vida máximo.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Asesino de gigantes:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Si una criatura "grande" o aun mas grande te ataca,
                          puedes usar tu reacción para realizar un ataque cuerpo
                          a cuerpo.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin finalTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Rompe hordas:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Puedes apunta a dos criaturas que estén cerca la una
                          de la otra, atacándolas en rápida sucesión con el
                          mismo ataque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2>Nivel 7</h2>
                  <h3>Tácticas defensivas</h3>
                  <div className="divTablaPrin">
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b> Escapa de la horda:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Los ataques de oportunidad contra ti tienen desventaja
                          Icon.png Desventaja.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Voluntad de acero:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Tienes ventaja en las tiradas de salvación contra ser
                          asustado.
                        </p>
                      </div>
                    </div>
                    <div className="filaTablaPrin finalTablaPrin">
                      <div className="primeraColumnaPrin">
                        <b>Defensa ante multiples ataques:</b>
                      </div>
                      <div className="segundaColumnaPrin">
                        <p>
                          Cuando un enemigo te ataca, sufre una penalización de
                          -4 a las tiradas de ataque adicionales contra ti hasta
                          el inicio de su siguiente turno.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2>Nivel 11</h2>
                  <h3>Diezmar la horda</h3>
                  <p>Desbloqueas las siguientes habilidades:</p>
                  <p>
                    <b>Salva de flechas: </b>Dispara una cascada de flechas
                    sobre los enemigos en un area a tu alrededor de 60 pìes,
                    realizando tiradas de ataque a distancia separadas contra
                    cada objetivo.
                  </p>
                  <p>
                    <b>Ataque Torbellino: </b>Golpea a todos los enemigos
                    cercanos a 5 pies de ti, realizando tiradas de ataque
                    separadas contra cada objetivo.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div>
                <div className="divSubSuperior">
                  <h1>Amo de las bestias</h1>
                  <div>
                    <img
                      src="/imagenes/general/logoExploradorSub2.png"
                      alt=""
                    />
                    <h2>
                      Fomentas un vínculo inteligente con una bestia poderosa
                      que puede ayudarte dentro y fuera del combate.
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
                  <h2>Nivel 3</h2>
                  <h3>Invocar compañero</h3>
                  <p>
                    Consigue una bestia de compañía que te acompañe en tus
                    aventuras y luche a tu lado.
                  </p>
                  <p>Solo puedes tener uno a la vez:</p>
                  <p>
                    <b>Compañero oso: </b>Invoca a un oso negro que puede
                    soportar fuertes ataques y atraer la atención del enemigo
                    con su rugido provocador.
                  </p>
                  <p>
                    <b>Compañero javali: </b>Invoca un jabalí que puede arrasar
                    el campo de batalla y derribar a los enemigos con su Carga.
                  </p>
                  <p>
                    <b>Compañero cuervo terrible: </b>Invocar un cuervo terrible
                    que puede volar y Cegar a sus enemigos.
                  </p>
                  <p>
                    <b>Compañero lobo: </b> Invoca a un lobo que puede infligir
                    heridas devastadoras y derribar enemigos con su mordisco
                    fulminante.
                  </p>
                  <p>
                    <b>Compañero araña-lobo: </b>Invoca una araña lobo que pueda
                    disparar telarañas y envenenar a los enemigos con su
                    mordisco.
                  </p>
                </div>
                <div>
                  <h2>Nivel 7</h2>
                  <h3>Vínculo de compañerismo</h3>
                  <p>
                    El vínculo entre tú y tu compañero se hace más fuerte. Tu
                    bonificación de competencia La bonificación de competencia
                    se añade a su clase de armadura, al daño y a las tiradas de
                    ataque.
                  </p>
                </div>
                <div>
                  <h2>Nivel 11</h2>
                  <h3>Furia bestial</h3>
                  <p>
                    El vínculo entre tu compañero y tú se ha estrechado aun mas.
                    Tu compañero obtiene un ataque extra cada vez que realiza la
                    acción atacar y duplica sus puntos de vida.
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
                      src="/imagenes/general/logoExploradorSub3.png"
                      alt=""
                    />
                    <h2>
                      Emergiendo como un horrible regalo de la envoltura de la
                      oscuridad y las sombras, emboscas y abates a tus enemigos
                      antes de que puedan siquiera gritar.
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
                  <h2>Nivel 3</h2>
                  <h3>Capa de sombras</h3>
                  <p>
                    Como acción si estas en una sombra oscurecida puedes
                    envolverte en esas sombras y volverte invisible durante 10
                    turnos si estás Oscurecido.
                  </p>
                  <h3>Visión en la oscuridad superior</h3>
                  <p>Puede ver en la oscuridad hasta 80 pies.</p>
                  <h3>Emboscador temible</h3>
                  <p>
                    Estás especializado en acabar con los enemigos de forma
                    rápida y despiadada. Obtienes un bonificador +3 a la
                    iniciativa. En el primer turno de combate, tu velocidad de
                    movimiento aumenta en 10 pies, y también puedes realizar un
                    ataque extra que inflige un daño físico de 1d8.
                  </p>
                  <p>
                    Tambien desbloqueas la capacidad de esconderte como ación
                    adicional
                  </p>
                </div>
                <div>
                  <h2>Nivel 7</h2>
                  <h3>Mente de Hierro</h3>
                  <p>
                    Ganas Competencia en tiradas de salvación de Sabiduría e
                    Inteligencia.
                  </p>
                </div>
                <div>
                  <h2>Nivel 11</h2>
                  <h3>Andanada del acechador</h3>
                  <p>
                    Una vez en cada uno de tus turnos, cuando fallas con un
                    ataque de arma, puedes hacer otro gratis.
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
