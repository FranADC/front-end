import "./hojaClases.css";
import "./tablaPicaro.css";
export default function () {
  return (
    <>
      {console.log("a")}
      <div className="divBody">
        <div className="divGeneral">
          <h1>PÍCARO</h1>
          <div className="divPrincipal">
            <div className="divTablaContenedor">
              <h1>Rasgos básicos del pícaro</h1>
              <div className="tablaOverflow">
                <div className="divTablaPrin">
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Habilidad principal:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Destreza</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Dado de puntos de golpe:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>D8 por nivel de pícaro</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con tiradas de salvación:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>Destreza y inteligencia</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Competencia con habilidades:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Herramientas de ladrón y escoge 4: acrobacias,
                        atleticas, engaño, perspicacia, inventigación,
                        percepción o persuasión, juego de manos o sigilo.
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
                      <p>Armaduras ligeras</p>
                    </div>
                  </div>
                  <div className="filaTablaPrin  finalTablaPrin">
                    <div className="primeraColumnaPrin">
                      <b>Equipamiento inicial:</b>
                    </div>
                    <div className="segundaColumnaPrin">
                      <p>
                        Escoge A, B o C: (A)Armadura de cuero, 2 dagas, 1 espada
                        corta, 1 arco corto, 20 flechas, carcaj, herramientas y
                        pack de ladrón y 8 monedas de oro;(B) 100 monedas de oro
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divImagen">
              <img
                src="http://localhost:5173/imagenes/general/BannerPicaro.png"
                alt=""
              />
            </div>
          </div>
          <div className="divDescripcion">
            <h1>Descripción</h1>
            <p>
              Los pícaros se basan en la astucia, el sigilo y las
              vulnerabilidades de sus enemigos para sacar ventaja en cualquier
              situación. Tienen un don para encontrar la solución a casi
              cualquier problema. Algunos incluso aprenden trucos mágicos para
              complementar sus otras habilidades. Muchos pícaros se centran en
              el sigilo y el engaño, mientras que otros perfeccionan habilidades
              que les ayudan en el entorno de las mazmorras, como trepar,
              encontrar y desactivar trampas y abrir cerraduras.
            </p>
            <p>
              En combate, los pícaros dan prioridad a los golpes sutiles sobre
              la fuerza bruta. Prefieren asestar un golpe preciso a desgastar a
              un oponente con una avalancha de golpes.
            </p>
            <p>
              Algunos Pícaros comenzaron su carrera como criminales, mientras
              que otros utilizaron su astucia para luchar contra el crimen. Sea
              cual sea su relación con la ley, ningún delincuente común o agente
              de la ley puede igualar la sutil brillantez de los mejores
              pícaros.
            </p>
          </div>
          <div className="divInfo">
            <div className="divInfoCabecera">
              <h1>Características de pícaro</h1>
              <div className="tablaOverflow">
                <div className="tablaProgresion">
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
                      <p>Daño de ataque Furtivo</p>
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
                      <p>Experiencia y ataque furtivo</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>1d6</p>
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
                      <p>Acción astuta</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>1d6</p>
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
                      <p>2d6</p>
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
                      <p>1d6</p>
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
                      <p>Esquiva asombrosa</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>3d6</p>
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
                      <p>Experiencia</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>3d6</p>
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
                      <p>Evasión</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>4d6</p>
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
                      <p>4d6</p>
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
                      <p>Caracteristica de subclase</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>5d6</p>
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
                      <p>Mejora de caracteristicas</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>5d6</p>
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
                      <p>Talento fiable</p>
                    </div>
                    <div className="columnaInfo1Prog">
                      <p>6d6</p>
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
                      <p>6d6</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 1:</h2>
              <h3>Experiencia</h3>
              <p>
                Ganas "experiencia" (el doble de tu bonificación de
                proficiencia) en 2 habilidades en las que seas competente.
              </p>
              <h3>Ataque Furtivo</h3>
              <p>
                Una vez por turno, puedes infligir 1d6 puntos de daño
                adicionales a un enemigo sobre el que tengas ventaja. Debes
                tener un arma sutil o a distancia equipada. A medida que subas
                de nivel en Pícaro, este daño aumentará añadiendo más dados d6.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 2</h2>
              <h3>Acción astuta</h3>
              <p>
                Puedes usar tu acción adicional para: correr, destrabarte o
                esconderte
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
              <h3>Esquiva asombrosa</h3>
              <p>
                Usa tus rápidos reflejos para protegerte. Cuando un ataque te
                alcanza, puedes usar tu reacción para recibir la mitad del daño
                habitual.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 6</h2>
              <h3>Experiencia</h3>
              <p>
                Ganas "experiencia" (el doble de tu bonificación de
                proficiencia) en 2 habilidades en las que seas competente.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 7</h2>
              <h3>Evasión</h3>
              <p>
                Tu agilidad te permite esquivar ciertos hechizos. Cuando un
                hechizo o efecto infligiría la mitad de daño en una tirada de
                salvación de Destreza exitosa, no inflige daño si tienes éxito,
                y sólo la mitad de daño si fallas.
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
              <h2>Nivel 9</h2>
              <h3>Caracteristica de subclase</h3>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 10</h2>
              <h3>Mejora de caracteristicas</h3>
              <p>
                Puedes aumentar una puntuación de habilidad a tu elección en 2,
                o puedes aumentar dos puntuaciones de habilidad a tu elección en
                1. Como es normal, no puedes aumentar una puntuación de
                habilidad por encima de 20 utilizando este rasgo.
              </p>
            </div>
            <div className="divInfoFila">
              <h2>Nivel 11</h2>
              <h3>Talento fiable</h3>
              <p>
                Cuando realizas un chequeo de habilidad con una habilidad en la
                que tienes competencia, el resultado más bajo que puedes sacar
                en el dado es un 10.
              </p>
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
            <h1>Subclases de pícaro</h1>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Ladrón</h1>
                <div>
                  <img
                    src="http://localhost:5173/imagenes/general/logoPicaroSub1.png"
                    alt=""
                  />
                  <h2>
                    Tus manos rápidas y tu dominio de las artes del latrocinio
                    hacen que robar sea algo natural, ya sea desde la ventana de
                    un tercer piso o desde una ruina olvidada.
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
              <div
                className="divSubInferior"
                id="divSubInferior1"
                style={{ display: "none" }}
              >
                <div>
                  <h2>Nivel 3</h2>
                  <h3>Manos rápidas</h3>
                  <p>Gana una acción adicional extra todos los turnos.</p>
                  <h3>Trabajo en el segundo piso</h3>
                  <p>
                    Has dominado el arte de caer y obtienes resistencia al daño
                    de caída.
                  </p>
                </div>
                <div>
                  <h2>Nivel 9</h2>
                  <h3>Sigilo supremo</h3>
                  <p>
                    Cuando te escondese te mézclas con el entorno hasta el punto
                    de volverte invisible.
                  </p>
                </div>
              </div>
            </div>
            <div className="divInfoFila">
              <div className="divSubSuperior">
                <h1>Asesino</h1>
                <div>
                  <img
                    src="http://localhost:5173/imagenes/general/logoPicaroSub2.png"
                    alt=""
                  />
                  <h2>
                    Prefieres infligir un castigo sublime a un solo enemigo a la
                    vez, no en un duelo, porque un duelo implica caballerosidad,
                    y estás demasiado ocupado haciendo el trabajo por honor.
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
                  <h3>Presteza del asesino</h3>
                  <p>
                    Rápido como un gato callejero en una ciudad oscura por la
                    lluvia, restableces inmediatamente tu acción y tu
                    bonificación de acción al inicio del combate
                  </p>
                  <h3>Emboscada</h3>
                  <p>
                    Cualquier tirada de ataque con éxito contra un enemigo
                    sorprendido es un impacto crítico.
                  </p>
                  <h3>Iniciativa del asesino</h3>
                  <p>
                    Eres más letal contra enemigos desprevenidos. En combate,
                    tienes ventaja en las tiradas de ataque contra criaturas que
                    aún no hayan realizado un turno.
                  </p>
                </div>
                <div>
                  <h2>Nivel 9</h2>
                  <h3>Experto en infiltración</h3>
                  <p>
                    Adoptar una nueva identidad, cambiando de aspecto atraves de
                    un disfraz que puedas improvisar con los materiales que
                    tengas a mano.
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
